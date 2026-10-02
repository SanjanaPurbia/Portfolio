# These map 1:1 onto the GitHub repo settings used by .github/workflows/deploy.yml.

output "s3_bucket_name" {
  description = "Repo variable S3_BUCKET."
  value       = aws_s3_bucket.site.id
}

output "cloudfront_distribution_id" {
  description = "Repo variable CLOUDFRONT_DISTRIBUTION_ID."
  value       = aws_cloudfront_distribution.site.id
}

output "cloudfront_domain_name" {
  description = "Public URL of the site (repo variable SITE_URL, prefixed with https://)."
  value       = aws_cloudfront_distribution.site.domain_name
}

output "github_deploy_role_arn" {
  description = "Repo secret AWS_ROLE_ARN."
  value       = aws_iam_role.github_deploy.arn
}
