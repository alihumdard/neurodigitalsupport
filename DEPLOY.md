# Deploying neurodigitalsupport.com

The server deploys itself. Root's crontab runs `scripts/auto-deploy.sh` every 2 minutes; when
`main` on GitHub has new commits it runs `scripts/deploy.sh`, which pulls, runs `npm ci`, builds
into a temporary folder and swaps it into `dist/apps/web` (what nginx serves) only if the build
succeeded.

```cron
*/2 * * * * bash /var/www/neurodigitalsupport/scripts/auto-deploy.sh
```

- Log: `/var/log/neurodigitalsupport-deploy.log` (`===== ok` or `===== FAILED` per deploy).
- `apps/web/.env` on the server holds `VITE_API_BASE_URL`; it is not in git.
- It refuses to pull over changes made by hand on the server; commit or discard them first.
- To deploy right away: `bash scripts/deploy.sh` in `/var/www/neurodigitalsupport`.
- GitHub Actions only checks that the site builds.
