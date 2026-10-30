import React, { useState } from 'react';
import { toast } from 'sonner';
import { ArrowLeft, Download, Search, Send, Trash2 } from 'lucide-react';
import { deleteAppUser, exportAppUser, getAppUser, listAppUsers, pushDeviceSettings, updateAppUser } from '@/api/adminApi.js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Bars, LoadState, Pager, Pill, SectionHeader, StatCard, formatDate, useAdminData } from './shared.jsx';

const planTone = (u) => (u.plan === 'premium' ? 'ok' : 'neutral');

export function AppUsersSection({ onUnauthorized }) {
  const [openId, setOpenId] = useState(null);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState({ search: '', plan: '', status: '', page: 1 });
  const { data, error, isLoading, reload } = useAdminData(() => listAppUsers(query), [JSON.stringify(query)], onUnauthorized);

  if (openId) return <AppUserDetail id={openId} onBack={() => { setOpenId(null); reload(); }} onUnauthorized={onUnauthorized} />;

  return (
    <section className="mt-6">
      <SectionHeader title="App users" subtitle="Everyone with a NuroTok account. Open one to see devices, usage, family links and more." />
      <form
        className="mt-5 flex flex-wrap gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          setQuery((q) => ({ ...q, search, page: 1 }));
        }}
      >
        <div className="relative min-w-[240px] flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b8a82]" aria-hidden="true" />
          <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Email, name, referral code or Firebase id" className="pl-9" aria-label="Search app users" />
        </div>
        <select aria-label="Plan" value={query.plan} onChange={(e) => setQuery((q) => ({ ...q, plan: e.target.value, page: 1 }))} className="rounded-xl border border-[#dcece6] bg-white px-3 text-sm">
          <option value="">All plans</option>
          <option value="free">Free</option>
          <option value="premium">Premium</option>
        </select>
        <select aria-label="Status" value={query.status} onChange={(e) => setQuery((q) => ({ ...q, status: e.target.value, page: 1 }))} className="rounded-xl border border-[#dcece6] bg-white px-3 text-sm">
          <option value="">Any status</option>
          <option value="active">Active</option>
          <option value="suspended">Suspended</option>
        </select>
        <Button type="submit">Search</Button>
      </form>

      <LoadState isLoading={isLoading} error={error} onRetry={reload}>
        <div className="mt-4 overflow-hidden rounded-2xl border border-[#dcece6] bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Devices</TableHead>
                <TableHead>Usage sharing</TableHead>
                <TableHead>Last seen</TableHead>
                <TableHead>Joined</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(data?.data || []).length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-sm font-medium text-[#536b64]">No app users match.</TableCell>
                </TableRow>
              ) : (
                data.data.map((u) => (
                  <TableRow key={u.id} className="cursor-pointer hover:bg-[#f6fbf9]" onClick={() => setOpenId(u.id)}>
                    <TableCell>
                      <button type="button" className="text-left" onClick={() => setOpenId(u.id)}>
                        <span className="block font-semibold text-[#0b3b31]">{u.name || 'No name'}</span>
                        <span className="block text-xs text-[#536b64]">{u.email || u.firebase_uid}</span>
                      </button>
                    </TableCell>
                    <TableCell>
                      <Pill tone={planTone(u)}>{u.plan}</Pill> {u.status === 'suspended' ? <Pill tone="bad">suspended</Pill> : null}
                    </TableCell>
                    <TableCell className="tabular-nums">{u.devices_count}</TableCell>
                    <TableCell>{u.usage_consent ? <Pill tone="ok">On</Pill> : <Pill>Off</Pill>}</TableCell>
                    <TableCell>{formatDate(u.last_seen_at, true)}</TableCell>
                    <TableCell>{formatDate(u.created_at)}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
        <Pager meta={data} onPage={(page) => setQuery((q) => ({ ...q, page }))} />
      </LoadState>
    </section>
  );
}

function AppUserDetail({ id, onBack, onUnauthorized }) {
  const { data, error, isLoading, reload } = useAdminData(() => getAppUser(id), [id], onUnauthorized);
  const [busy, setBusy] = useState(false);
  const [expires, setExpires] = useState('');

  const act = async (fn, success) => {
    setBusy(true);
    try {
      await fn();
      toast.success(success);
      await reload();
    } catch (e) {
      toast.error(e.message);
    } finally {
      setBusy(false);
    }
  };

  const download = async () => {
    try {
      const payload = await exportAppUser(id);
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `nurotok-user-${id}.json`;
      a.click();
      URL.revokeObjectURL(a.href);
    } catch (e) {
      toast.error(e.message);
    }
  };

  const remove = async () => {
    if (!window.confirm('Delete this account and all of its data? This cannot be undone.')) return;
    setBusy(true);
    try {
      await deleteAppUser(id);
      toast.success('Account deleted.');
      onBack();
    } catch (e) {
      toast.error(e.message);
      setBusy(false);
    }
  };

  const u = data?.user;
  return (
    <section className="mt-6">
      <button type="button" onClick={onBack} className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0b5f49]">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All app users
      </button>
      <LoadState isLoading={isLoading} error={error} onRetry={reload}>
        {u ? (
          <>
            <SectionHeader title={u.name || u.email || `User ${u.id}`} subtitle={`${u.email || 'No email'} · signed in with ${u.provider || 'unknown'} · joined ${formatDate(u.created_at)}`}>
              <Button variant="outline" onClick={download} className="gap-2">
                <Download className="h-4 w-4" aria-hidden="true" /> Export data
              </Button>
              <Button variant="destructive" onClick={remove} disabled={busy} className="gap-2">
                <Trash2 className="h-4 w-4" aria-hidden="true" /> Delete account
              </Button>
            </SectionHeader>

            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
              <StatCard label="Plan" value={u.plan} hint={u.plan_expires_at ? `until ${formatDate(u.plan_expires_at)}` : u.plan_source || ''} />
              <StatCard label="Status" value={u.status} />
              <StatCard label="Referral code" value={u.referral_code} hint={`${u.referrals_count} referred`} />
              <StatCard label="Usage sharing" value={u.usage_consent ? 'On' : 'Off'} hint={u.usage_consent_at ? `changed ${formatDate(u.usage_consent_at)}` : ''} />
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-[#dcece6] bg-white p-5">
                <h2 className="text-base font-semibold text-[#0b3b31]">Plan</h2>
                <p className="mt-1 text-sm text-[#536b64]">Grant Premium (no charge, ends on the date you choose or never), or set back to Free.</p>
                <div className="mt-3 flex flex-wrap items-end gap-2">
                  <div>
                    <Label htmlFor="expires">Premium until (optional)</Label>
                    <Input id="expires" type="date" value={expires} onChange={(e) => setExpires(e.target.value)} />
                  </div>
                  <Button disabled={busy} onClick={() => act(() => updateAppUser(id, { plan: 'premium', plan_expires_at: expires || null }), 'Premium granted.')}>
                    Grant Premium
                  </Button>
                  <Button variant="outline" disabled={busy} onClick={() => act(() => updateAppUser(id, { plan: 'free' }), 'Set to Free.')}>
                    Set to Free
                  </Button>
                </div>
              </div>
              <div className="rounded-2xl border border-[#dcece6] bg-white p-5">
                <h2 className="text-base font-semibold text-[#0b3b31]">Account status</h2>
                <p className="mt-1 text-sm text-[#536b64]">Suspending signs the account out on every device and blocks sign-in until it is reactivated.</p>
                <div className="mt-3">
                  {u.status === 'suspended' ? (
                    <Button disabled={busy} onClick={() => act(() => updateAppUser(id, { status: 'active' }), 'Reactivated.')}>Reactivate</Button>
                  ) : (
                    <Button variant="destructive" disabled={busy} onClick={() => act(() => updateAppUser(id, { status: 'suspended' }), 'Suspended.')}>Suspend</Button>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-[#dcece6] bg-white p-5">
              <h2 className="text-base font-semibold text-[#0b3b31]">Reels, last 30 days</h2>
              {u.usage_consent ? (
                <div className="mt-4">
                  <Bars rows={data.usage} labelKey="day" valueKey="reels" />
                </div>
              ) : (
                <p className="mt-2 text-sm text-[#536b64]">This person hasn&apos;t switched on usage sharing, so no usage is stored.</p>
              )}
            </div>

            <div className="mt-5 rounded-2xl border border-[#dcece6] bg-white p-5">
              <h2 className="text-base font-semibold text-[#0b3b31]">Devices</h2>
              <div className="mt-3 space-y-3">
                {u.devices.length === 0 ? <p className="text-sm text-[#536b64]">No devices.</p> : null}
                {u.devices.map((d) => (
                  <DeviceCard key={d.id} userId={id} device={d} onPushed={reload} />
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-[#dcece6] bg-white p-5">
              <h2 className="text-base font-semibold text-[#0b3b31]">Family links</h2>
              {data.families.length === 0 ? <p className="mt-2 text-sm text-[#536b64]">None.</p> : null}
              <ul className="mt-2 space-y-2 text-sm font-medium text-[#31544c]">
                {data.families.map((f) => (
                  <li key={f.id} className="flex flex-wrap items-center gap-2">
                    <Pill tone={f.status === 'active' ? 'ok' : f.status === 'pending' ? 'warn' : 'neutral'}>{f.status}</Pill>
                    {f.parent_id === u.id ? 'Parent of' : 'Child of'}{' '}
                    {f.parent_id === u.id ? f.child_device?.label || f.child?.name || f.child_name || 'a device' : f.parent?.name || f.parent?.email}
                    <span className="text-xs text-[#6b8a82]">{formatDate(f.linked_at || f.created_at)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : null}
      </LoadState>
    </section>
  );
}

/** One device: what it reports it's using, and a way to push protective settings to it. */
function DeviceCard({ userId, device, onPushed }) {
  const reported = device.settings?.reported;
  const [allowance, setAllowance] = useState('');
  const [goal, setGoal] = useState('');
  const [busy, setBusy] = useState(false);

  const push = async () => {
    const reels = {};
    if (allowance !== '') reels.allowance = Number(allowance);
    if (goal !== '') reels.goal = Number(goal);
    if (!Object.keys(reels).length) {
      toast.error('Enter a goal or an allowance to send.');
      return;
    }
    setBusy(true);
    try {
      const r = await pushDeviceSettings(userId, device.id, { reels });
      toast.success(`Sent. The phone applies it on its next sync (change ${r.version}).`);
      setAllowance('');
      setGoal('');
      onPushed();
    } catch (e) {
      toast.error(e.message);
    } finally {
      setBusy(false);
    }
  };

  const pending = device.settings && device.settings.remote_version > device.settings.applied_version;
  return (
    <div className="rounded-xl border border-[#e4efeb] p-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-semibold text-[#0b3b31]">{device.label || device.model || 'Device'}</span>
        <Pill>{device.platform}</Pill>
        <Pill tone="accent">v{device.app_version || '?'}</Pill>
        {pending ? <Pill tone="warn">settings waiting to apply</Pill> : null}
        <span className="text-xs text-[#6b8a82]">last sync {formatDate(device.last_sync_at, true)}</span>
      </div>
      {reported ? (
        <p className="mt-2 text-xs text-[#536b64]">
          Using: goal {reported?.reels?.goal ?? '–'}, allowance {reported?.reels?.allowance ?? '–'}, switches {(reported?.reels?.switches || []).join(', ') || 'none'},
          website blocking {reported?.web?.on ? 'on' : 'off'}.
        </p>
      ) : (
        <p className="mt-2 text-xs text-[#536b64]">No settings reported yet.</p>
      )}
      <div className="mt-3 flex flex-wrap items-end gap-2">
        <div>
          <Label htmlFor={`goal-${device.id}`}>Daily reel goal</Label>
          <Input id={`goal-${device.id}`} type="number" min="0" max="2000" value={goal} onChange={(e) => setGoal(e.target.value)} className="w-32" />
        </div>
        <div>
          <Label htmlFor={`allow-${device.id}`}>Reel allowance (-1 off, 0 none)</Label>
          <Input id={`allow-${device.id}`} type="number" min="-1" max="2000" value={allowance} onChange={(e) => setAllowance(e.target.value)} className="w-40" />
        </div>
        <Button variant="outline" onClick={push} disabled={busy} className="gap-2">
          <Send className="h-4 w-4" aria-hidden="true" /> Send to phone
        </Button>
      </div>
    </div>
  );
}
