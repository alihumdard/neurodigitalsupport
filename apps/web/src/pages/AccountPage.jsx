import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const API = (import.meta.env.VITE_API_BASE_URL || 'https://api.neurodigitalsupport.com/api').replace(/\/+$/, '');
const KEY = 'nurotok-web-session';

const fmtDay = (d) => new Date(`${String(d).slice(0, 10)}T12:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
const fmtDate = (d) => (d ? new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : '');
const sum = (rows, k) => rows.reduce((a, r) => a + (Number(r[k]) || 0), 0);

// The session lives only in this tab, and ends on its own after 12 hours on the server.
const readToken = () => { try { return sessionStorage.getItem(KEY); } catch { return null; } };
const saveToken = (t) => { try { if (t) sessionStorage.setItem(KEY, t); else sessionStorage.removeItem(KEY); } catch { /* private mode */ } };

/** No request waits longer than this, including reading the answer. */
const DEADLINE_MS = 15000;

async function call(path, { token, method, body } = {}) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), DEADLINE_MS);
  let r;
  let data;
  try {
    r = await fetch(`${API}${path}`, {
      method: method ?? (body ? 'POST' : 'GET'),
      headers: { Accept: 'application/json', ...(body ? { 'Content-Type': 'application/json' } : {}), ...(token ? { Authorization: `Bearer ${token}` } : {}) },
      body: body ? JSON.stringify(body) : undefined,
      signal: ctrl.signal,
    });
    data = await r.json().catch(() => ({}));
  } catch (e) {
    throw new Error(e?.name === 'AbortError' ? 'The server took too long to answer. Please try again.' : 'Could not reach NuroTok. Check your connection and try again.');
  } finally {
    clearTimeout(timer);
  }
  if (!r.ok) {
    const first = data.errors ? Object.values(data.errors)[0]?.[0] : null;
    const err = new Error(first || data.message || 'Something went wrong. Please try again.');
    err.status = r.status;
    throw err;
  }
  return data;
}

const input = 'w-full rounded-xl border border-[#cfe3dc] bg-white px-3 py-2 text-[#0b3b31] focus:outline-none focus:ring-2 focus:ring-[#2f7a66]';
const button = 'rounded-xl bg-[#2f7a66] px-4 py-2 font-semibold text-white hover:bg-[#276654] disabled:opacity-60';
const quiet = 'rounded-xl border border-[#cfe3dc] bg-white px-4 py-2 font-semibold text-[#0b3b31] hover:bg-[#eef6f2] disabled:opacity-60';

function Section({ title, children, note }) {
  return (
    <section className="rounded-2xl border border-[#dcece6] bg-white p-5">
      <h2 className="text-lg font-semibold text-[#0b3b31]">{title}</h2>
      {note ? <p className="mt-1 text-sm text-[#536b64]">{note}</p> : null}
      {children}
    </section>
  );
}

function Tile({ label, value, hint }) {
  return (
    <div className="rounded-2xl border border-[#dcece6] bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-[#536b64]">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-[#0b3b31]">{value}</p>
      {hint ? <p className="mt-1 text-xs text-[#6b8a82]">{hint}</p> : null}
    </div>
  );
}

function Bars({ rows }) {
  const max = Math.max(1, ...rows.map((r) => r.reels));
  const every = rows.length > 14 ? Math.ceil(rows.length / 7) : 1;
  return (
    <div role="img" aria-label="Reels watched each day, last 30 days" className="mt-3">
      <div className="flex h-36 items-end gap-[3px]">
        {rows.map((r) => (
          <div key={r.day} className="flex-1 rounded-t bg-[#2f7a66]" style={{ height: `${Math.max(2, (r.reels / max) * 100)}%` }} title={`${fmtDay(r.day)}: ${r.reels} reels`} />
        ))}
      </div>
      <div className="mt-1 flex gap-[3px] text-[10px] text-[#6b8a82]">
        {rows.map((r, i) => <div key={r.day} className="flex-1 text-center">{i % every === 0 ? fmtDay(r.day) : ''}</div>)}
      </div>
    </div>
  );
}

function SignIn({ onSignedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) { setError('Enter the email you use in the app.'); return; }
    if (!password) { setError('Enter your password.'); return; }
    setBusy(true);
    setError(null);
    try {
      const res = await call('/app/auth/web/login', { body: { email: email.trim(), password } });
      saveToken(res.token);
      onSignedIn(res.token);
    } catch (err) {
      setError(err.status === 429 ? 'Too many tries. Please wait a minute.' : err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Section title="Sign in" note="Use the email and password you use in the NuroTok app.">
      <form onSubmit={submit} className="mt-4 space-y-3" noValidate>
        <label className="block text-sm font-semibold">Email
          <input className={`${input} mt-1`} type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className="block text-sm font-semibold">Password
          <input className={`${input} mt-1`} type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        {error ? <p role="alert" className="text-sm text-[#b42318]">{error}</p> : null}
        <button type="submit" className={button} disabled={busy}>{busy ? 'Signing in…' : 'Sign in'}</button>
        <p className="text-xs text-[#6b8a82]">
          Signed in to the app with Google or Apple? Add a password first: in the app, sign out, then choose &ldquo;Forgot password&rdquo; with the same email.
        </p>
      </form>
    </Section>
  );
}

function DeleteAccount({ token, onDeleted }) {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  const go = async () => {
    if (!password) { setError('Enter your password to confirm.'); return; }
    setBusy(true);
    setError(null);
    try {
      await call('/app/web/delete', { token, body: { password } });
      saveToken(null);
      onDeleted();
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Section title="Delete your account" note="Deletes your NuroTok account and everything stored with it on our servers, straight away. What is kept only on your phone stays there until you remove the app.">
      {!open ? (
        <button type="button" className={`${quiet} mt-4 text-[#b42318]`} onClick={() => setOpen(true)}>Delete my account…</button>
      ) : (
        <div className="mt-4 space-y-3">
          <label className="block text-sm font-semibold">Your password, to confirm
            <input className={`${input} mt-1`} type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          {error ? <p role="alert" className="text-sm text-[#b42318]">{error}</p> : null}
          <div className="flex flex-wrap gap-2">
            <button type="button" className="rounded-xl bg-[#b42318] px-4 py-2 font-semibold text-white disabled:opacity-60" disabled={busy} onClick={go}>{busy ? 'Deleting…' : 'Delete for good'}</button>
            <button type="button" className={quiet} onClick={() => { setOpen(false); setPassword(''); setError(null); }}>Keep my account</button>
          </div>
        </div>
      )}
    </Section>
  );
}

const APP_NAMES = { instagram: 'Instagram', youtube: 'YouTube', tiktok: 'TikTok', snapchat: 'Snapchat', facebook: 'Facebook', x: 'X', reddit: 'Reddit', linkedin: 'LinkedIn' };
const WEEKDAYS = ['Sundays', 'Mondays', 'Tuesdays', 'Wednesdays', 'Thursdays', 'Fridays', 'Saturdays'];
const mean = (xs) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : 0);

/**
 * Trends in the shared counts: this week against last, the busiest day of the week, where the
 * reels are, and the Calm Score over time. Each one only shows with enough days behind it.
 */
function Trends({ days, byApp }) {
  const counted = days.filter((x) => x.reels > 0);
  const thisWeek = days.slice(-7).filter((x) => x.reels > 0).map((x) => x.reels);
  const lastWeek = days.slice(-14, -7).filter((x) => x.reels > 0).map((x) => x.reels);
  const byWeekday = WEEKDAYS.map((name, i) => ({ name, values: counted.filter((x) => new Date(`${x.day}T12:00:00`).getDay() === i).map((x) => x.reels) }))
    .filter((w) => w.values.length >= 2);
  const busiest = byWeekday.length >= 3 ? byWeekday.reduce((a, b) => (mean(b.values) > mean(a.values) ? b : a)) : null;
  const totalApps = byApp.reduce((a, x) => a + x.reels, 0);
  const calm = days.filter((x) => x.calm !== null && x.calm !== undefined);
  const change = thisWeek.length >= 3 && lastWeek.length >= 3 ? Math.round(((mean(thisWeek) - mean(lastWeek)) / Math.max(1, mean(lastWeek))) * 100) : null;

  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-2">
      {change !== null ? (
        <Tile label="This week against last" value={change === 0 ? 'The same' : `${Math.abs(change)}% ${change < 0 ? 'fewer' : 'more'}`} hint={`About ${Math.round(mean(thisWeek))} a day, from ${Math.round(mean(lastWeek))}`} />
      ) : null}
      {busiest ? <Tile label="Busiest day of the week" value={busiest.name} hint={`About ${Math.round(mean(busiest.values))} reels on those days`} /> : null}
      {totalApps > 0 ? (
        <div className="rounded-2xl border border-[#dcece6] bg-white p-4 sm:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#536b64]">Where the reels are</p>
          <ul className="mt-2 space-y-1">
            {byApp.slice(0, 6).map((a) => (
              <li key={a.app} className="text-sm">
                <div className="flex justify-between"><span>{APP_NAMES[a.app] || a.app}</span><span className="text-[#536b64]">{a.reels} · {Math.round((a.reels / totalApps) * 100)}%</span></div>
                <div className="mt-1 h-1.5 rounded-full bg-[#eef3f1]"><div className="h-1.5 rounded-full bg-[#2f7a66]" style={{ width: `${(a.reels / byApp[0].reels) * 100}%` }} /></div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {calm.length >= 3 ? (
        <div className="rounded-2xl border border-[#dcece6] bg-white p-4 sm:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#536b64]">Calm Score</p>
          <p className="mt-1 text-sm text-[#536b64]">Average {Math.round(mean(calm.map((x) => x.calm)))} over {calm.length} days. Higher is calmer.</p>
          <div role="img" aria-label="Calm Score each day" className="mt-2 flex h-20 items-end gap-[3px]">
            {calm.map((x) => <div key={x.day} className="flex-1 rounded-t bg-[#7fb8a4]" style={{ height: `${Math.max(4, x.calm)}%` }} title={`${fmtDay(x.day)}: ${x.calm}`} />)}
          </div>
        </div>
      ) : null}
    </div>
  );
}

/** Where the account is signed in, with sign-out for one or for all but this website session. */
function SignedIn({ token }) {
  const [sessions, setSessions] = useState(null);
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);

  const load = useCallback(() => {
    call('/app/me/sessions', { token }).then((r) => { setSessions(r.sessions); setError(null); }).catch((e) => setError(e.message));
  }, [token]);
  useEffect(load, [load]);

  const act = async (path, method, confirmText) => {
    if (!window.confirm(confirmText)) return;
    setBusy(true);
    try {
      await call(path, { token, method });
      load();
    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  };

  const others = (sessions ?? []).filter((s) => !s.current);
  return (
    <Section title="Where you're signed in" note="Sign out anything you don't recognise, then change your password in the app.">
      {error ? <p role="alert" className="mt-3 text-sm text-[#b42318]">{error}</p> : null}
      {sessions === null && !error ? <p className="mt-3 text-sm text-[#536b64]">Loading…</p> : null}
      {sessions?.length ? (
        <ul className="mt-3 divide-y divide-[#eef3f1]">
          {sessions.map((s) => (
            <li key={s.id} className="flex flex-wrap items-center gap-2 py-2 text-sm">
              <span className="font-semibold">{s.name}{s.current ? ' (this browser)' : ''}</span>
              <span className="flex-1 text-[#536b64]">{s.last_used_at ? `last used ${fmtDate(s.last_used_at)}` : `signed in ${fmtDate(s.signed_in_at)}`}{s.app_version ? ` · app ${s.app_version}` : ''}</span>
              {!s.current ? (
                <button type="button" className={`${quiet} py-1 text-xs`} disabled={busy} onClick={() => act(`/app/me/sessions/${s.id}`, 'DELETE', `Sign out ${s.name}?`)}>Sign out</button>
              ) : null}
            </li>
          ))}
        </ul>
      ) : null}
      {others.length ? (
        <button type="button" className={`${quiet} mt-3`} disabled={busy} onClick={() => act('/app/me/sessions/sign-out-others', 'POST', 'Sign out every phone and other session? You stay signed in here.')}>
          Sign out everywhere else
        </button>
      ) : null}
    </Section>
  );
}

function Dashboard({ token, onSignedOut }) {
  const [state, setState] = useState({ loading: true, error: null, data: null });
  const [downloading, setDownloading] = useState(false);
  const [notice, setNotice] = useState(null);

  const load = useCallback(() => {
    setState((s) => ({ ...s, loading: true, error: null }));
    call('/app/web/summary', { token })
      .then((data) => setState({ loading: false, error: null, data }))
      .catch((e) => {
        if (e.status === 401) { saveToken(null); onSignedOut('Your session ended. Please sign in again.'); return; }
        setState({ loading: false, error: e.message, data: null });
      });
  }, [token, onSignedOut]);

  useEffect(load, [load]);

  const d = state.data;
  const days = useMemo(() => d?.days ?? [], [d]);
  const week = days.slice(-7);

  const download = async () => {
    setDownloading(true);
    setNotice(null);
    try {
      const data = await call('/app/web/export', { token });
      const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
      const a = document.createElement('a');
      a.href = url;
      a.download = `nurotok-data-${new Date().toLocaleDateString('en-CA')}.json`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      setNotice(e.message);
    } finally {
      setDownloading(false);
    }
  };

  const signOut = async () => {
    await call('/app/web/logout', { token, method: 'POST' }).catch(() => {});
    saveToken(null);
    onSignedOut(null);
  };

  if (state.loading && !d) return <p className="text-sm text-[#536b64]">Loading your account…</p>;
  if (state.error) {
    return (
      <Section title="Couldn't load your account" note={state.error}>
        <button type="button" className={`${button} mt-4`} onClick={load}>Try again</button>
      </Section>
    );
  }

  const u = d.user;
  return (
    <>
      <Section title={u.name ? `Hello, ${u.name}` : 'Your account'} note={u.email}>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <Tile label="Plan" value={u.plan === 'premium' ? 'Premium' : 'Free'} hint={u.plan === 'premium' ? (u.plan_source === 'family' ? 'Through your family' : u.plan_expires_at ? `Renews or ends ${fmtDate(u.plan_expires_at)}` : null) : 'Upgrade from the app'} />
          <Tile label="Usage sharing" value={u.usage_consent ? 'On' : 'Off'} hint="Change it in the app, under You" />
          <Tile label="Therapist links" value={d.shares} hint="Active links you've shared" />
        </div>
      </Section>

      <Section title="The last 30 days" note={u.usage_consent ? 'From the counts your phones send. Only totals, never what you watched.' : 'Usage sharing is off, so nothing is sent from your phones. Your counts stay on your phone, in the app.'}>
        {u.usage_consent && days.length ? (
          <>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <Tile label="Reels, last 7 days" value={sum(week, 'reels')} />
              <Tile label="Shielded opens, 7 days" value={sum(week, 'blocked')} />
              <Tile label="Focus sessions, 7 days" value={`${sum(week, 'focus')} min`} />
            </div>
            <Bars rows={days} />
            <Trends days={days} byApp={d.by_app ?? []} />
          </>
        ) : u.usage_consent ? <p className="mt-3 text-sm text-[#536b64]">Nothing yet. Counts arrive after your phone next syncs.</p> : null}
      </Section>

      <Section title="Your phones">
        {d.devices.length ? (
          <ul className="mt-3 divide-y divide-[#eef3f1]">
            {d.devices.map((x, i) => (
              <li key={i} className="py-2 text-sm">
                <span className="font-semibold">{x.model || (x.platform === 'ios' ? 'iPhone' : 'Android phone')}</span>
                <span className="text-[#536b64]"> · app {x.app_version || 'unknown'}{x.last_sync_at ? ` · last synced ${fmtDate(x.last_sync_at)}` : ''}</span>
              </li>
            ))}
          </ul>
        ) : <p className="mt-3 text-sm text-[#536b64]">No phones signed in yet.</p>}
      </Section>

      <SignedIn token={token} />

      {d.children.length || d.parents.length ? (
        <Section title="Family" note="Manage links from the app, under Family.">
          <ul className="mt-3 space-y-1 text-sm">
            {d.children.map((c, i) => <li key={`c${i}`}>Your child: <span className="font-semibold">{c.name}</span>{c.linked_at ? `, linked ${fmtDate(c.linked_at)}` : ''}</li>)}
            {d.parents.map((p, i) => <li key={`p${i}`}>Linked to parent: <span className="font-semibold">{p.name}</span></li>)}
          </ul>
        </Section>
      ) : null}

      <Section title="Your data" note="Download a copy of everything stored on our servers for this account, as a JSON file.">
        <div className="mt-4 flex flex-wrap gap-2">
          <button type="button" className={button} disabled={downloading} onClick={download}>{downloading ? 'Preparing…' : 'Download my data'}</button>
          <button type="button" className={quiet} onClick={signOut}>Sign out</button>
        </div>
        {notice ? <p role="alert" className="mt-2 text-sm text-[#b42318]">{notice}</p> : null}
      </Section>

      <DeleteAccount token={token} onDeleted={() => onSignedOut('Your account and its data have been deleted.')} />
    </>
  );
}

/**
 * "Your account" for NuroTok users: sign in with the app's email and password to see the account
 * at a glance, download its data, or delete it. Not indexed.
 */
export default function AccountPage() {
  const [token, setToken] = useState(readToken);
  const [message, setMessage] = useState(null);
  const signedOut = useCallback((msg) => { setToken(null); setMessage(msg); }, []);

  return (
    <main className="min-h-screen bg-[#f5f8f6] px-4 py-8 text-[#0b3b31]">
      <Helmet>
        <title>Your NuroTok account</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="mx-auto max-w-3xl space-y-4">
        <header className="space-y-1">
          <p className="text-sm font-semibold text-[#2f7a66]"><Link to="/nurotok" className="hover:underline">NuroTok</Link> · your account</p>
          <h1 className="text-3xl font-semibold">Your NuroTok account</h1>
        </header>
        {message ? <p role="status" className="rounded-xl bg-[#e7f4ee] px-4 py-3 text-sm">{message}</p> : null}
        {token ? <Dashboard token={token} onSignedOut={signedOut} /> : <SignIn onSignedIn={(t) => { setMessage(null); setToken(t); }} />}
        <p className="text-xs text-[#6b8a82]">
          See the <Link to="/nurotok/privacy" className="underline">privacy policy</Link> for what NuroTok keeps and why.
        </p>
      </div>
    </main>
  );
}
