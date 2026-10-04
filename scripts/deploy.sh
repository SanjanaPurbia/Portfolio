#!/usr/bin/env sh
# Publish the site to GitHub Pages: https://sanjanapurbia.github.io/Portfolio/
# Builds under the /Portfolio/ base path and pushes dist/ as the `gh-pages` branch.
# The branch only ever holds build output, so it is replaced on every deploy.
set -e
cd "$(dirname "$0")/.."
REMOTE="$(git remote get-url origin)"
SOURCE="$(git rev-parse --short HEAD)"
# Commit as this repo's identity (git config user.name/email), not the global one.
NAME="$(git config user.name)"
EMAIL="$(git config user.email)"
BASE_PATH=/Portfolio/ SITE_URL=https://sanjanapurbia.github.io/Portfolio npm run build
touch dist/.nojekyll
cd dist
rm -rf .git
git init -q -b gh-pages
git add -A
git -c user.name="$NAME" -c user.email="$EMAIL" commit -q -m "Deploy $SOURCE"
git push -q -f "$REMOTE" gh-pages
rm -rf .git
echo "Deployed $SOURCE to https://sanjanapurbia.github.io/Portfolio/"
