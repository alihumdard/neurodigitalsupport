import React, { useMemo, useState } from 'react';
import { toast } from 'sonner';
import { getIntegrations, saveIntegrations, sendTestMail } from '@/api/adminApi.js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LoadState, Pill, SectionHeader, formatDate, useAdminData } from './shared.jsx';

const SOURCE = {
  admin: { tone: 'ok', label: 'Set here' },
  server: { tone: 'neutral', label: 'From server .env' },
  none: { tone: 'warn', label: 'Not set' },
};

function Field({ field, value, onChange, error }) {
  const id = `int-${field.key}`;
  const placeholder = field.secret
    ? field.hint ? `${field.hint}. Type to replace` : 'Not set'
    : field.source === 'server' ? `${field.value} (from .env)` : '';
  let control;
  if (field.kind.startsWith('select:')) {
    control = (
      <select id={id} value={value ?? field.value ?? ''} onChange={(e) => onChange(e.target.value)} className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
        <option value="">Not set</option>
        <option value="ssl">SSL (port 465)</option>
        <option value="tls">STARTTLS (port 587)</option>
      </select>
    );
  } else if (field.kind === 'json') {
    control = (
      <textarea id={id} rows={4} value={value ?? ''} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} spellCheck={false}
        className="w-full rounded-md border border-input bg-background px-3 py-2 font-mono text-xs" />
    );
  } else {
    control = (
      <Input id={id} type={field.secret ? 'password' : field.kind === 'number' ? 'number' : 'text'} autoComplete="off"
        value={value ?? (field.secret || field.source !== 'admin' ? '' : field.value ?? '')} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    );
  }
  return (
    <div className="space-y-1">
      <div className="flex flex-wrap items-center gap-2">
        <Label htmlFor={id}>{field.label}</Label>
        <Pill tone={SOURCE[field.source].tone}>{SOURCE[field.source].label}</Pill>
        {field.updated_at ? <span className="text-xs text-muted-foreground">changed {formatDate(field.updated_at, true)}</span> : null}
      </div>
      {control}
      {error ? <p role="alert" className="text-xs text-red-700">{error}</p> : field.help ? <p className="text-xs text-muted-foreground">{field.help}</p> : null}
    </div>
  );
}

/**
 * Admin > Integrations: SMTP and every third-party credential, set here instead of on the server.
 * Secrets are never shown again once saved; type a new value to replace one, or clear it to fall
 * back to the server's .env. Every change is recorded in the Activity log (without the values).
 */
export function IntegrationsSection({ onUnauthorized }) {
  const { data, error, isLoading, reload, setData } = useAdminData(getIntegrations, [], onUnauthorized);
  const [edits, setEdits] = useState({});
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  const [testTo, setTestTo] = useState('');
  const [testing, setTesting] = useState(false);
  const changed = useMemo(() => Object.keys(edits).length, [edits]);

  const set = (key, value) => setEdits((e) => ({ ...e, [key]: value }));
  const clear = (key) => setEdits((e) => ({ ...e, [key]: '' }));

  const save = async () => {
    if (!changed) return;
    setSaving(true);
    setErrors({});
    try {
      const res = await saveIntegrations(edits);
      setData(res);
      setEdits({});
      toast.success('Saved. New values are used straight away.');
    } catch (e) {
      const fieldErrors = Object.fromEntries(Object.entries(e.data?.errors || {}).map(([k, v]) => [k.replace(/^values\./, ''), v[0]]));
      // Shown next to the fields and the save button, not as a toast that could cover the button.
      setErrors(Object.keys(fieldErrors).length ? fieldErrors : { form: e.message });
    } finally {
      setSaving(false);
    }
  };

  const test = async () => {
    if (!/^\S+@\S+\.\S+$/.test(testTo.trim())) { toast.error('Enter an email address to send the test to.'); return; }
    setTesting(true);
    try {
      const res = await sendTestMail(testTo.trim());
      toast.success(res.message);
    } catch (e) {
      toast.error(e.message);
    } finally {
      setTesting(false);
    }
  };

  return (
    <>
      <SectionHeader
        title="Integrations"
        subtitle="Email (SMTP) and third-party keys. A value set here is used instead of the server's .env; clear it to go back to .env. Saved secrets are never shown again."
      />
      <LoadState isLoading={isLoading} error={error} onRetry={reload}>
        <div className="space-y-5">
          {data?.groups?.map((group) => (
            <section key={group.name} className="rounded-2xl border border-[#dcece6] bg-white p-5">
              <h2 className="text-base font-semibold text-[#0b3b31]">{group.name}</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {group.fields.map((f) => (
                  <div key={f.key}>
                    <Field field={f} value={edits[f.key]} error={errors[f.key]} onChange={(v) => set(f.key, v)} />
                    {f.source === 'admin' && edits[f.key] !== '' ? (
                      <button type="button" className="mt-1 text-xs text-red-700 underline" onClick={() => clear(f.key)}>Clear (use .env)</button>
                    ) : null}
                    {edits[f.key] === '' && f.source === 'admin' ? <p className="mt-1 text-xs text-amber-700">Will be cleared when you save.</p> : null}
                  </div>
                ))}
              </div>
              {group.name === 'Email (SMTP)' ? (
                <div className="mt-5 flex flex-wrap items-end gap-2 border-t border-[#eef3f1] pt-4">
                  <div className="min-w-[220px] flex-1 space-y-1">
                    <Label htmlFor="int-test-to">Send a test email to</Label>
                    <Input id="int-test-to" type="email" value={testTo} onChange={(e) => setTestTo(e.target.value)} placeholder="you@example.com" />
                  </div>
                  <Button type="button" variant="outline" onClick={test} disabled={testing}>{testing ? 'Sending…' : 'Send test email'}</Button>
                  <p className="w-full text-xs text-muted-foreground">Uses the saved settings, so save first.</p>
                </div>
              ) : null}
            </section>
          ))}

          <div className="sticky bottom-0 flex flex-wrap items-end gap-3 rounded-2xl border border-[#dcece6] bg-white p-4 shadow-sm">
            <Button type="button" onClick={save} disabled={saving || !changed}>
              {saving ? 'Saving…' : changed ? `Save ${changed} change${changed === 1 ? '' : 's'}` : 'No changes'}
            </Button>
            {changed ? <Button type="button" variant="ghost" onClick={() => { setEdits({}); setErrors({}); }}>Discard</Button> : null}
            {Object.keys(errors).length ? (
              <p role="alert" className="w-full text-sm text-red-700">
                {errors.form || 'Some values need fixing. See the messages above.'}
              </p>
            ) : null}
          </div>
        </div>
      </LoadState>
    </>
  );
}
