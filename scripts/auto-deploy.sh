#!/usr/bin/env bash
# Run from cron on the server every couple of minutes. Deploys only when main on GitHub has moved,
# one run at a time, logging to /var/log/<repo>-deploy.log. Nothing in GitHub needs access to
# the server: the server pulls.
#
#   */2 * * * * bash /var/www/<repo>/scripts/auto-deploy.sh
set -uo pipefail

APP_DIR="$(cd "$(dirname "$0")/.." && pwd)"
LOG="${DEPLOY_LOG:-/var/log/$(basename "$APP_DIR")-deploy.log}"
cd "$APP_DIR"

# Another deploy still running: skip this turn.
exec 9>"/tmp/$(basename "$APP_DIR")-deploy.lock"
flock -n 9 || exit 0

# Never wait for a password nobody will type; give up after a minute and say why.
export GIT_TERMINAL_PROMPT=0
if ! out="$(timeout 60 git fetch --quiet origin main 2>&1)"; then
  echo "$(date -Is) fetch failed: $out" >> "$LOG"
  exit 1
fi
[ "$(git rev-parse HEAD)" = "$(git rev-parse origin/main)" ] && exit 0

{
  echo "===== $(date -Is) deploying $(git rev-parse --short origin/main)"
  if bash "$APP_DIR/scripts/deploy.sh"; then echo "===== ok"; else echo "===== FAILED (exit $?)"; fi
} >> "$LOG" 2>&1
