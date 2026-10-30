#!/usr/bin/env bash
# Deploys the website on the server. Run from the repo folder (/var/www/neurodigitalsupport);
# scripts/auto-deploy.sh runs it from cron when main has moved. Safe to run by hand too.
#
# Builds into a fresh folder and swaps it in only when the build succeeded, so visitors never see
# a half-written site and a failed build leaves the current one up.
set -euo pipefail

APP_DIR="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$APP_DIR/dist/apps/web"
cd "$APP_DIR"

echo "==> Pulling main"
# --ff-only: refuses rather than overwrite changes made by hand on the server.
git fetch --quiet origin main
# Every build regenerates llms.txt (tracked); drop that copy so it never blocks the pull.
git checkout -- apps/web/public/llms.txt 2>/dev/null || true
git merge --ff-only origin/main

echo "==> Installing packages"
npm ci --no-audit --no-fund

echo "==> Building"
# apps/web/.env on the server holds VITE_API_BASE_URL; it is not in git.
NEXT="$APP_DIR/dist/.web-next"
rm -rf "$NEXT"
(cd apps/web && node tools/generate-llms.js || true)
(cd apps/web && npx vite build --outDir "$NEXT" --emptyOutDir)
test -f "$NEXT/index.html"

echo "==> Switching to the new build"
mkdir -p "$(dirname "$OUT")"
rm -rf "$OUT.old"
[ -d "$OUT" ] && mv "$OUT" "$OUT.old"
mv "$NEXT" "$OUT"
rm -rf "$OUT.old"

echo "==> Deployed $(git rev-parse --short HEAD)"
