import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { getHealth, reconcileAppUser, setAdminSecurity } from '@/api/adminApi.js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Pill, formatDate } from './shared.jsx';

const TONE = { ok: 'ok', warn: 'warn', bad: 'bad' };
const WORD = { ok: 'OK', warn: 'Check', bad: 'Needs action' };

/**
 * Server health on the overview: the scheduler, the nightly clean-up and each outside service,
 * plus the switch that requires two-step sign-in for every admin. Admin accounts only; editors
 * simply don't see it.
 */
export function SystemHealthCard() {
  const [data, setData] = useState(null);
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getHealth().then(setData).catch(() => setData(null));
  }, []);

  if (!data) return null;
  const toggle = async () => {
    if (!password) { setError('Enter your password to change this.'); return; }
    setBusy(true);
    setError(null);
    try {
      setData(await setAdminSecurity(!data.require_admin_2fa, password));
      setPassword('');
      toast.success(data.require_admin_2fa ? 'Two-step sign-in is now optional.' : 'Two-step sign-in is now required for every admin.');
    } catch (e) {
      setError(e.data?.errors ? Object.values(e.data.errors)[0][0] : e.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="mt-5 rounded-2xl border border-[#dcece6] bg-white p-5">
      <h2 className="text-base font-semibold text-[#0b3b31]">System health</h2>
      <ul className="mt-3 divide-y divide-[#eef5f2] text-sm">
        {data.checks.map((c) => (
          <li key={c.name} className="flex flex-wrap items-start gap-2 py-2">
            <span className="w-48 font-semibold text-[#0b3b31]">{c.name}</span>
            <Pill tone={TONE[c.status]}>{WORD[c.status]}</Pill>
            <span className="min-w-[200px] flex-1 text-[#536b64]">{c.detail}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap items-end gap-3 border-t border-[#eef3f1] pt-4">
        <p className="w-full text-sm">
          Two-step sign-in for admins is <strong>{data.require_admin_2fa ? 'required' : 'optional'}</strong>.
          {data.require_admin_2fa ? ' Admins without it can only set it up.' : ' Turn on your own first (Admin accounts), then require it.'}
        </p>
        <div className="w-full max-w-xs space-y-1">
          <Label htmlFor="sec-password">Your password, to confirm</Label>
          <Input id="sec-password" type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <Button type="button" variant="outline" disabled={busy} onClick={toggle}>
          {busy ? 'Saving…' : data.require_admin_2fa ? 'Make it optional' : 'Require for every admin'}
        </Button>
        {error ? <p role="alert" className="w-full text-sm text-red-700">{error}</p> : null}
      </div>
    </div>
  );
}

/** Compare one customer's plan with RevenueCat, and correct ours if they differ. */
export function ReconcileCard({ userId, onChanged }) {
  const [result, setResult] = useState(null);
  const [busy, setBusy] = useState(false);

  const run = async (apply) => {
    setBusy(true);
    try {
      const r = await reconcileAppUser(userId, apply);
      setResult(r);
      if (r.applied) {
        toast.success('Plan corrected to match RevenueCat.');
        onChanged?.();
      }
    } catch (e) {
      toast.error(e.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="rounded-2xl border border-[#dcece6] bg-white p-5">
      <h2 className="text-base font-semibold text-[#0b3b31]">Check with RevenueCat</h2>
      <p className="mt-1 text-sm text-[#536b64]">Compares this plan with the store. Plans you assigned by hand, or through a parent, are left alone.</p>
      <Button type="button" variant="outline" className="mt-3" disabled={busy} onClick={() => run(false)}>{busy ? 'Checking…' : 'Check now'}</Button>
      {result ? (
        <div className="mt-3 space-y-2 text-sm">
          <p>
            <Pill tone={result.matches ? 'ok' : 'warn'}>{result.matches ? 'Matches' : 'Different'}</Pill>{' '}
            Store: {result.store.active ? `active${result.store.expires_at ? ` until ${formatDate(result.store.expires_at)}` : ''}${result.store.product ? ` (${result.store.product})` : ''}` : 'no active subscription'}.
            {' '}Here: {result.ours.premium ? `Premium (${result.ours.source || 'unknown'})${result.ours.expires_at ? ` until ${formatDate(result.ours.expires_at)}` : ''}` : 'Free'}.
          </p>
          {!result.matches && !result.manual ? (
            <Button type="button" disabled={busy} onClick={() => run(true)}>Correct to match the store</Button>
          ) : null}
          {result.events?.length ? (
            <details>
              <summary className="cursor-pointer text-[#31544c]">Store events ({result.events.length})</summary>
              <ul className="mt-2 space-y-1 text-xs text-[#536b64]">
                {result.events.map((e, i) => <li key={i}>{formatDate(e.created_at, true)} · {e.type} · {e.outcome}</li>)}
              </ul>
            </details>
          ) : <p className="text-xs text-[#6b8a82]">No store events received for this customer.</p>}
        </div>
      ) : null}
    </div>
  );
}
