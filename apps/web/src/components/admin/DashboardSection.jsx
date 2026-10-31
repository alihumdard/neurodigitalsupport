import React, { useState } from 'react';
import { getAnalytics, getDashboard } from '@/api/adminApi.js';
import { Bars, LoadState, SectionHeader, StatCard, useAdminData } from './shared.jsx';

const APP_NAMES = { instagram: 'Instagram', youtube: 'YouTube', tiktok: 'TikTok', snapchat: 'Snapchat', facebook: 'Facebook', x: 'X', reddit: 'Reddit', linkedin: 'LinkedIn' };

import { SystemHealthCard } from './OpsCards.jsx';

export function DashboardSection({ onUnauthorized }) {
  const { data, error, isLoading, reload } = useAdminData(getDashboard, [], onUnauthorized);
  return (
    <section className="mt-6">
      <SectionHeader title="Overview" subtitle="NuroTok app and website at a glance." />
      <LoadState isLoading={isLoading} error={error} onRetry={reload}>
        {data ? (
          <>
            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
              <StatCard label="App users" value={data.users.total} hint={`${data.users.new_7d} new this week`} />
              <StatCard label="Active today" value={data.users.active_24h} hint={`${data.users.active_7d} in 7 days`} />
              <StatCard label="Premium" value={data.users.premium} />
              <StatCard label="Sharing usage" value={data.users.consented} hint="Have said yes to usage sync" />
              <StatCard label="Devices" value={data.devices.total} hint={`${data.devices.android} Android · ${data.devices.ios} iOS`} />
              <StatCard label="Family links" value={data.families} />
              <StatCard label="Referrals" value={data.referrals} />
              <StatCard label="New inquiries" value={data.website.inquiries_new} hint={`${data.website.inquiries_total} in total`} />
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <StatCard label="Reels counted today" value={data.today.reels} hint="Across everyone sharing usage" />
              <StatCard label="Blocked opens today" value={data.today.blocked_opens} />
              <StatCard label="Focus minutes today" value={data.today.focus_minutes} />
            </div>
            <SystemHealthCard />
            <div className="mt-5 rounded-2xl border border-[#dcece6] bg-white p-5">
              <h2 className="text-base font-semibold text-[#0b3b31]">Sign-ups, last 30 days</h2>
              <div className="mt-4">
                <Bars rows={data.signups} labelKey="day" valueKey="count" />
              </div>
            </div>
          </>
        ) : null}
      </LoadState>
    </section>
  );
}

export function AnalyticsSection({ onUnauthorized }) {
  const [days, setDays] = useState(30);
  const { data, error, isLoading, reload } = useAdminData(() => getAnalytics(days), [days], onUnauthorized);
  return (
    <section className="mt-6">
      <SectionHeader title="Usage analytics" subtitle="Totals from people who share their usage. Individual detail stays in each user's page.">
        {[7, 30, 90].map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => setDays(d)}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${days === d ? 'bg-[#0b5f49] text-white' : 'border border-[#dcece6] bg-white text-[#31544c]'}`}
          >
            {d} days
          </button>
        ))}
      </SectionHeader>
      <LoadState isLoading={isLoading} error={error} onRetry={reload}>
        {data ? (
          <div className="mt-5 grid gap-4">
            <div className="rounded-2xl border border-[#dcece6] bg-white p-5">
              <h2 className="text-base font-semibold text-[#0b3b31]">Reels per day</h2>
              <div className="mt-4">
                <Bars rows={data.per_day} labelKey="day" valueKey="reels" />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-[#dcece6] bg-white p-5">
                <h2 className="text-base font-semibold text-[#0b3b31]">By app</h2>
                <ul className="mt-3 space-y-2">
                  {data.by_app.length === 0 ? <li className="text-sm text-[#536b64]">No reels yet.</li> : null}
                  {data.by_app.map((a) => (
                    <li key={a.app} className="flex justify-between text-sm font-medium text-[#31544c]">
                      <span>{APP_NAMES[a.app] || a.app}</span>
                      <span className="tabular-nums">{a.count}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-[#dcece6] bg-white p-5">
                <h2 className="text-base font-semibold text-[#0b3b31]">By hour of day (UTC)</h2>
                <div className="mt-4">
                  <Bars rows={Array.from({ length: 24 }, (_, h) => ({ hour: `${h}:00`, count: data.by_hour.find((x) => Number(x.hour) === h)?.count || 0 }))} labelKey="hour" valueKey="count" height={110} />
                </div>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-[#dcece6] bg-white p-5">
                <h2 className="text-base font-semibold text-[#0b3b31]">Blocked opens and unlocks</h2>
                <ul className="mt-3 space-y-1 text-sm font-medium text-[#31544c]">
                  <li>Blocked opens: {data.per_day.reduce((s, d) => s + Number(d.blocked || 0), 0)}</li>
                  <li>Unlocks (pushed through): {data.per_day.reduce((s, d) => s + Number(d.unlocks || 0), 0)}</li>
                  <li>Focus minutes: {data.per_day.reduce((s, d) => s + Number(d.focus || 0), 0)}</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-[#dcece6] bg-white p-5">
                <h2 className="text-base font-semibold text-[#0b3b31]">App versions in use</h2>
                <ul className="mt-3 space-y-1 text-sm font-medium text-[#31544c]">
                  {data.app_versions.map((v) => (
                    <li key={v.app_version || 'unknown'} className="flex justify-between">
                      <span>{v.app_version || 'Unknown'}</span>
                      <span className="tabular-nums">{v.count}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : null}
      </LoadState>
    </section>
  );
}
