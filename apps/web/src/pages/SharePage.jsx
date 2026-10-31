import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

const API = (import.meta.env.VITE_API_BASE_URL || 'https://api.neurodigitalsupport.com/api').replace(/\/+$/, '');

const SELF_CHECKS = {
  'sensory-load': 'Sensory load',
  recovery: 'Overwhelm and recovery',
  'wind-down': 'Evenings and sleep',
};
const MOOD_WORDS = ['', 'Rough', 'Low', 'Okay', 'Good', 'Great'];

const fmtDay = (d) => new Date(`${String(d).slice(0, 10)}T12:00:00`).toLocaleDateString(undefined, { day: 'numeric', month: 'short' });
const fmtDate = (d) => new Date(d).toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' });
const sum = (rows, k) => rows.reduce((a, r) => a + (Number(r[k]) || 0), 0);
const avg = (rows, k) => (rows.length ? Math.round(sum(rows, k) / rows.length) : 0);

function Tile({ label, value, hint }) {
  return (
    <div className="rounded-2xl border border-[#dcece6] bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-[#536b64]">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-[#0b3b31]">{value}</p>
      {hint ? <p className="mt-1 text-xs text-[#6b8a82]">{hint}</p> : null}
    </div>
  );
}

function Bars({ rows, valueKey, labelKey, max: fixedMax, label }) {
  const max = Math.max(1, fixedMax ?? Math.max(...rows.map((r) => Number(r[valueKey]) || 0)));
  const every = rows.length > 14 ? Math.ceil(rows.length / 7) : 1;
  return (
    <div role="img" aria-label={label} className="mt-3">
      <div className="flex h-36 items-end gap-[3px]">
        {rows.map((r, i) => (
          <div key={i} className="flex-1 rounded-t bg-[#2f7a66]" style={{ height: `${Math.max(2, ((Number(r[valueKey]) || 0) / max) * 100)}%` }} title={`${r[labelKey]}: ${r[valueKey]}`} />
        ))}
      </div>
      <div className="mt-1 flex gap-[3px] text-[10px] text-[#6b8a82]">
        {rows.map((r, i) => <div key={i} className="flex-1 text-center">{i % every === 0 ? r[labelKey] : ''}</div>)}
      </div>
    </div>
  );
}

function Section({ title, children, note }) {
  return (
    <section className="rounded-2xl border border-[#dcece6] bg-white p-5">
      <h2 className="text-lg font-semibold text-[#0b3b31]">{title}</h2>
      {note ? <p className="mt-1 text-sm text-[#536b64]">{note}</p> : null}
      {children}
    </section>
  );
}

/**
 * A therapist's read-only view of what their client chose to share from NuroTok. The client made
 * this link, decided what it shows and for how long, can see each time it is opened, and can stop
 * it at any moment. Not indexed, not cached.
 */
export default function SharePage() {
  const { token } = useParams();
  const [state, setState] = useState({ loading: true, error: null, data: null });

  useEffect(() => {
    let live = true;
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 15000);
    fetch(`${API}/share/${encodeURIComponent(token || '')}`, { headers: { Accept: 'application/json' }, signal: ctrl.signal })
      .then(async (r) => {
        const body = await r.json().catch(() => ({}));
        if (!r.ok) throw new Error(body.message || 'This link could not be opened.');
        return body;
      })
      .then((data) => live && setState({ loading: false, error: null, data }))
      .catch((e) => live && setState({ loading: false, error: e.name === 'AbortError' ? 'The server took too long to answer. Please reload the page.' : e.message, data: null }))
      .finally(() => clearTimeout(timer));
    return () => { live = false; ctrl.abort(); clearTimeout(timer); };
  }, [token]);

  const d = state.data;
  const usage = useMemo(() => (d?.usage ?? []).map((r) => ({ ...r, label: fmtDay(r.day) })), [d]);
  const last7 = usage.slice(-7);
  const prev7 = usage.slice(-14, -7);
  const hours = (d?.reels_by_hour ?? []).map((n, h) => ({ h: `${h}`, n }));
  const peakHour = hours.length ? hours.reduce((a, b) => (b.n > a.n ? b : a), hours[0]) : null;
  const moods = useMemo(() => d?.mood ?? [], [d]);
  const moodWeeks = useMemo(() => {
    const byWeek = new Map();
    for (const m of moods) {
      const dt = new Date(m.at);
      const monday = new Date(dt); monday.setDate(dt.getDate() - ((dt.getDay() + 6) % 7));
      const k = monday.toISOString().slice(0, 10);
      const w = byWeek.get(k) ?? { label: fmtDay(k), total: 0, n: 0 };
      w.total += m.value; w.n += 1; byWeek.set(k, w);
    }
    return [...byWeek.values()].map((w) => ({ label: w.label, avg: Math.round((w.total / w.n) * 10) / 10 }));
  }, [moods]);
  const moodNames = useMemo(() => {
    const c = {};
    for (const m of moods) if (m.ref) c[m.ref] = (c[m.ref] ?? 0) + 1;
    return Object.entries(c).sort((a, b) => b[1] - a[1]).slice(0, 6);
  }, [moods]);
  const checks = useMemo(() => {
    const by = {};
    for (const c of d?.checks ?? []) (by[c.ref] ??= []).push(c);
    return Object.entries(by);
  }, [d]);
  const practice = d?.practice ?? [];

  return (
    <main className="min-h-screen bg-[#f5f8f6] px-4 py-8 text-[#0b3b31]">
      <Helmet>
        <title>Shared NuroTok summary</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="mx-auto max-w-4xl space-y-4">
        <header className="space-y-1">
          <p className="text-sm font-semibold text-[#2f7a66]">NuroTok · shared with you</p>
          {d ? (
            <>
              <h1 className="text-3xl font-semibold">{d.name}&apos;s NuroTok summary{d.label ? ` for ${d.label}` : ''}</h1>
              <p className="text-sm text-[#536b64]">
                The last 90 days, as of {fmtDate(d.generated_at)}. {d.name} chose what this shows and can stop the link at any time; it ends on its own on {fmtDate(d.expires_at)}.
              </p>
            </>
          ) : null}
        </header>

        {state.loading ? <p className="text-sm text-[#536b64]">Loading…</p> : null}
        {state.error ? (
          <Section title="This link isn't available">
            <p className="mt-2 text-sm text-[#536b64]">{state.error}</p>
          </Section>
        ) : null}

        {d ? (
          <>
            <div className="rounded-2xl bg-[#e8f3ef] p-4 text-sm text-[#2c4a42]">
              Counts and self-reported scores from the NuroTok app, to support your conversations. It is not a clinical record or an assessment,
              and NuroTok never keeps what was on the screen. Please don&apos;t forward this link.
            </div>

            {d.scopes.includes('usage') ? (
              <Section title="Short-video use" note={d.usage === null ? `${d.name} hasn't switched on usage sharing in the app, so there's nothing to show here yet.` : 'Reels, Shorts and similar videos counted on their phone, and how often blocked apps were stopped.'}>
                {usage.length ? (
                  <>
                    <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
                      <Tile label="Reels a day (last 7)" value={avg(last7, 'reels')} hint={prev7.length ? `${avg(prev7, 'reels')} the week before` : null} />
                      <Tile label="Blocked opens" value={sum(usage, 'blocked')} hint="Apps kept closed" />
                      <Tile label="Unlocks" value={sum(usage, 'unlocks')} hint="Chose to open anyway" />
                      <Tile label="Focus time" value={`${sum(usage, 'focus')} min`} hint="Focus sessions" />
                    </div>
                    <Bars rows={usage.slice(-30)} valueKey="reels" labelKey="label" label="Reels per day, last 30 days" />
                    {peakHour && peakHour.n > 0 ? (
                      <>
                        <h3 className="mt-6 text-sm font-semibold">When the pull is strongest</h3>
                        <p className="text-xs text-[#536b64]">Reels by hour of day across the period; most around {peakHour.h}:00.</p>
                        <Bars rows={hours} valueKey="n" labelKey="h" label="Reels by hour of day" />
                      </>
                    ) : null}
                  </>
                ) : d.usage !== null ? <p className="mt-2 text-sm text-[#536b64]">No days shared yet.</p> : null}
              </Section>
            ) : null}

            {d.scopes.includes('mood') ? (
              <Section title="Mood check-ins" note="Self-reported, from 1 (rough) to 5 (good). Journal text is never shared.">
                {moods.length ? (
                  <>
                    <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
                      <Tile label="Check-ins" value={moods.length} />
                      <Tile label="Average" value={`${(sum(moods, 'value') / moods.length).toFixed(1)} / 5`} hint={MOOD_WORDS[Math.round(sum(moods, 'value') / moods.length)]} />
                      <Tile label="Latest" value={`${moods[moods.length - 1].value} / 5`} hint={fmtDay(moods[moods.length - 1].at)} />
                    </div>
                    {moodWeeks.length > 1 ? <Bars rows={moodWeeks} valueKey="avg" labelKey="label" max={5} label="Average mood by week" /> : null}
                    {moodNames.length ? (
                      <p className="mt-4 text-sm text-[#2c4a42]">
                        Words chosen most: {moodNames.map(([w, n]) => `${w.replace(/-/g, ' ')} (${n})`).join(', ')}.
                      </p>
                    ) : null}
                  </>
                ) : <p className="mt-2 text-sm text-[#536b64]">No check-ins shared yet.</p>}
              </Section>
            ) : null}

            {d.scopes.includes('checks') ? (
              <Section title="Self-checks" note="Short questionnaires in the app. Higher means more affected. They are reflections, not diagnoses.">
                {checks.length ? (
                  <ul className="mt-3 divide-y divide-[#eef5f2]">
                    {checks.map(([id, rows]) => {
                      const last = rows[rows.length - 1];
                      const first = rows[0];
                      return (
                        <li key={id} className="flex flex-wrap items-baseline justify-between gap-2 py-3 text-sm">
                          <span className="font-semibold">{SELF_CHECKS[id] || id}</span>
                          <span className="text-[#2c4a42]">
                            Latest {Math.round(last.value * 100)}% ({fmtDay(last.at)})
                            {rows.length > 1 ? ` · first ${Math.round(first.value * 100)}% (${fmtDay(first.at)}) · ${rows.length} times` : ''}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                ) : <p className="mt-2 text-sm text-[#536b64]">No self-checks shared yet.</p>}
              </Section>
            ) : null}

            {d.scopes.includes('practice') ? (
              <Section title="Calming practice" note="Breathing, grounding and meditation sessions finished in the app.">
                {practice.length ? (
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <Tile label="Sessions" value={practice.length} />
                    <Tile label="Minutes" value={Math.round(sum(practice, 'value'))} />
                  </div>
                ) : <p className="mt-2 text-sm text-[#536b64]">No sessions shared yet.</p>}
              </Section>
            ) : null}

            <p className="pb-6 text-center text-xs text-[#6b8a82]">
              NuroTok by NeuroDigital Support · <a className="underline" href="/nurotok/privacy">Privacy policy</a>
            </p>
          </>
        ) : null}
      </div>
    </main>
  );
}
