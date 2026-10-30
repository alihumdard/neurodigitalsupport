import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { ShieldCheck } from 'lucide-react';
import { confirmTwoFactor, disableTwoFactor, fetchAdminMe, setupTwoFactor } from '@/api/adminApi.js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

/**
 * Two-step sign-in for the signed-in admin: add NuroTok admin to an authenticator app (Google
 * Authenticator, Microsoft Authenticator, 1Password…), confirm with a code, and from then on
 * signing in needs the password and the app's current code.
 */
export function TwoFactorCard() {
  const [on, setOn] = useState(null);
  const [setup, setSetup] = useState(null);
  const [code, setCode] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    fetchAdminMe().then((u) => setOn(Boolean(u?.two_factor))).catch(() => setOn(null));
  }, []);

  const act = async (fn) => {
    setBusy(true);
    try {
      await fn();
    } catch (e) {
      toast.error(e.message);
    } finally {
      setBusy(false);
    }
  };
  const validCode = /^\d{6}$/.test(code.trim());

  if (on === null) return null;
  return (
    <div className="mt-5 rounded-2xl border border-[#dcece6] bg-white p-5">
      <h2 className="flex items-center gap-2 text-base font-semibold text-[#0b3b31]">
        <ShieldCheck className="h-5 w-5" aria-hidden="true" /> Your two-step sign-in
      </h2>
      {on ? (
        <>
          <p className="mt-1 text-sm text-[#536b64]">On. Signing in needs your password and the code from your authenticator app.</p>
          <div className="mt-3 flex flex-wrap items-end gap-2">
            <div>
              <Label htmlFor="tf-off">Current code, to turn it off</Label>
              <Input id="tf-off" inputMode="numeric" autoComplete="one-time-code" maxLength={6} value={code} onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))} />
            </div>
            <Button variant="outline" disabled={busy || !validCode} onClick={() => act(async () => { await disableTwoFactor(code); setOn(false); setCode(''); toast.success('Two-step sign-in is off.'); })}>
              Turn off
            </Button>
          </div>
        </>
      ) : setup ? (
        <>
          <p className="mt-1 text-sm text-[#536b64]">
            In your authenticator app, add an account and enter this key (or open the link on the phone that has the app). Then type the
            6-digit code it shows.
          </p>
          <p className="mt-3 break-all rounded-xl bg-[#f3f8f6] p-3 font-mono text-sm tracking-wider text-[#0b3b31]">{setup.secret.match(/.{1,4}/g).join(' ')}</p>
          <a className="mt-2 inline-block text-sm font-semibold text-[#0b5f49] underline" href={setup.uri}>Open in authenticator app</a>
          <div className="mt-3 flex flex-wrap items-end gap-2">
            <div>
              <Label htmlFor="tf-code">Code from the app</Label>
              <Input id="tf-code" inputMode="numeric" autoComplete="one-time-code" maxLength={6} value={code} onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))} />
            </div>
            <Button disabled={busy || !validCode} onClick={() => act(async () => { await confirmTwoFactor(code); setOn(true); setSetup(null); setCode(''); toast.success('Two-step sign-in is on.'); })}>
              Turn on
            </Button>
          </div>
        </>
      ) : (
        <>
          <p className="mt-1 text-sm text-[#536b64]">Off. Turn it on so a leaked password alone can&apos;t open the admin panel.</p>
          <Button className="mt-3" disabled={busy} onClick={() => act(async () => setSetup(await setupTwoFactor()))}>Set up</Button>
        </>
      )}
    </div>
  );
}
