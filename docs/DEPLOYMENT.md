# Deployment

The site is a static Vite build served from a private S3 bucket through CloudFront.
CI/CD runs on GitHub Actions and authenticates to AWS with OIDC, so there are no
long-lived AWS keys anywhere.

## Architecture

```
  git push (main)
        │
        ▼
┌────────────────┐  OIDC token   ┌──────────────┐  short-lived creds
│ GitHub Actions │ ────────────▶ │   AWS STS    │ ───────────────┐
│  deploy.yml    │               │ (IAM role)   │                │
└───────┬────────┘               └──────────────┘                │
        │ npm ci && npm run build                                │
        │ aws s3 sync dist/  ◀────────────────────────────────────┘
        ▼
┌────────────────┐  OAC (SigV4)  ┌──────────────┐    HTTPS    ┌──────┐
│ S3 (private,   │ ◀──────────── │  CloudFront  │ ──────────▶ │ User │
│ versioned)     │               │ + sec headers│             └──────┘
└────────────────┘               └──────────────┘
```

- `.github/workflows/ci.yml`: lint, build, Docker build + Trivy scan, `terraform fmt`/`validate` on every PR and push.
- `.github/workflows/deploy.yml`: build, sync to S3 (hashed `assets/` cached for a year as immutable, everything else `no-cache`), invalidate CloudFront.
- `infra/terraform/`: bucket, CloudFront distribution, OIDC provider and deploy role.

## One-time bootstrap

Prerequisites: Terraform >= 1.6 and AWS credentials with admin rights for the first apply.

```bash
cp infra/terraform/terraform.tfvars.example infra/terraform/terraform.tfvars
# edit github_repo = "owner/repo"

make tf-init
make tf-plan
make tf-apply
terraform -chdir=infra/terraform output
```

If the account already has a GitHub OIDC provider, import it first (the command is in `oidc.tf`).

Then in GitHub, under **Settings > Environments**, create a `production` environment.
Limit its deployment branches to `main`, and add these values:

| Kind     | Name                         | Value (Terraform output)            |
|----------|------------------------------|-------------------------------------|
| Secret   | `AWS_ROLE_ARN`               | `github_deploy_role_arn`            |
| Variable | `AWS_REGION`                 | `aws_region` you applied with       |
| Variable | `S3_BUCKET`                  | `s3_bucket_name`                    |
| Variable | `CLOUDFRONT_DISTRIBUTION_ID` | `cloudfront_distribution_id`        |
| Variable | `SITE_URL` (optional)        | `https://` + `cloudfront_domain_name` |

Push to `main`, or run the **Deploy** workflow manually, to ship.

## Run locally with Docker

The image matches production behaviour: nginx runs as a non-root user and serves
the SPA fallback, cache headers and security headers.

```bash
make docker-run              # or: docker compose up --build
curl -i localhost:8080/healthz
```

Open http://localhost:8080.

## Rollback

You have two options:

1. **Redeploy a known-good commit (preferred).** Either `git revert` the bad commit on
   `main` (CI passes, then Deploy runs automatically), or open **Actions → Deploy →
   Run workflow** on `main` and put the known-good commit SHA or tag in the `ref` input.
   Every deploy is a full, reproducible sync.
2. **Restore from S3 versioning.** The bucket keeps noncurrent versions for 30 days.
   Copy the previous version of `index.html` back over the current one. The older
   hashed assets it references are still there, or can be restored the same way.
   Then invalidate the cache:

   ```bash
   aws s3api list-object-versions --bucket "$BUCKET" --prefix index.html
   aws s3api copy-object --bucket "$BUCKET" --key index.html \
     --copy-source "$BUCKET/index.html?versionId=<VERSION_ID>" \
     --cache-control no-cache --metadata-directive REPLACE --content-type text/html
   aws cloudfront create-invalidation --distribution-id "$DIST_ID" --paths "/*"
   ```
