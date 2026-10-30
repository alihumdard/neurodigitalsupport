import React, { useState } from 'react';
import { toast } from 'sonner';
import { Eye, Pencil, Plus, Send, Trash2 } from 'lucide-react';
import {
  deleteAdmin,
  deleteAnnouncement,
  deleteConfig,
  deletePage,
  listAdmins,
  listAnnouncements,
  listAudit,
  listConfigs,
  listFamilies,
  listPages,
  listReferrals,
  revokeFamily,
  saveAdmin,
  saveAnnouncement,
  saveConfig,
  savePage,
  sendAnnouncement
} from '@/api/adminApi.js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { LoadState, Pager, Pill, SectionHeader, formatDate, useAdminData } from './shared.jsx';
import { TwoFactorCard } from './TwoFactorCard.jsx';

const run = async (fn, success, after) => {
  try {
    const r = await fn();
    if (success) toast.success(success);
    await after?.(r);
    return r;
  } catch (e) {
    toast.error(e.message);
    return null;
  }
};

// ── Pages (CMS) ───────────────────────────────────────────────────────────────

const emptyPage = { id: null, title: '', slug: '', summary: '', body: '', group: 'legal', status: 'draft', meta_title: '', meta_description: '' };

export function PagesSection({ onUnauthorized }) {
  const { data, error, isLoading, reload } = useAdminData(listPages, [], onUnauthorized);
  const [form, setForm] = useState(null);
  const [saving, setSaving] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const save = async () => {
    if (!form.title.trim()) return toast.error('A page needs a title.');
    setSaving(true);
    const r = await run(() => savePage(form.id, form), 'Page saved.', reload);
    setSaving(false);
    if (r) setForm(null);
  };

  return (
    <section className="mt-6">
      <SectionHeader title="Pages" subtitle="Legal pages and other content shown on the website (/nurotok/slug) and in the app. Written in Markdown.">
        <Button onClick={() => setForm(emptyPage)} className="gap-2">
          <Plus className="h-4 w-4" aria-hidden="true" /> New page
        </Button>
      </SectionHeader>
      <LoadState isLoading={isLoading} error={error} onRetry={reload}>
        <div className="mt-4 overflow-hidden rounded-2xl border border-[#dcece6] bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Group</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Updated</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(data?.pages || []).map((p) => (
                <TableRow key={p.id}>
                  <TableCell className="font-medium">{p.title}</TableCell>
                  <TableCell className="text-xs">{p.slug}</TableCell>
                  <TableCell>{p.group}</TableCell>
                  <TableCell>{p.status === 'published' ? <Pill tone="ok">Published</Pill> : <Pill tone="warn">Draft</Pill>}</TableCell>
                  <TableCell>{formatDate(p.updated_at)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={`/nurotok/${p.slug}`} target="_blank" rel="noopener noreferrer">
                          <Eye className="h-3.5 w-3.5" aria-hidden="true" /> View
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => setForm({ ...emptyPage, ...p, summary: p.summary || '', body: p.body || '', meta_title: p.meta_title || '', meta_description: p.meta_description || '' })}>
                        <Pencil className="h-3.5 w-3.5" aria-hidden="true" /> Edit
                      </Button>
                      <Button variant="destructive" size="sm" onClick={() => window.confirm(`Delete "${p.title}"?`) && run(() => deletePage(p.id), 'Page deleted.', reload)}>
                        <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </LoadState>

      <Dialog open={!!form} onOpenChange={(open) => !open && setForm(null)}>
        <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{form?.id ? 'Edit page' : 'New page'}</DialogTitle>
          </DialogHeader>
          {form ? (
            <div className="grid gap-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <Label htmlFor="pg-title">Title</Label>
                  <Input id="pg-title" value={form.title} onChange={set('title')} />
                </div>
                <div>
                  <Label htmlFor="pg-slug">Slug (web address)</Label>
                  <Input id="pg-slug" value={form.slug} onChange={set('slug')} placeholder="made from the title if empty" />
                </div>
                <div>
                  <Label htmlFor="pg-group">Group</Label>
                  <select id="pg-group" value={form.group} onChange={set('group')} className="h-10 w-full rounded-xl border border-[#dcece6] bg-white px-3 text-sm">
                    <option value="legal">Legal</option>
                    <option value="nurotok">NuroTok</option>
                    <option value="general">General</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="pg-status">Status</Label>
                  <select id="pg-status" value={form.status} onChange={set('status')} className="h-10 w-full rounded-xl border border-[#dcece6] bg-white px-3 text-sm">
                    <option value="draft">Draft (not public)</option>
                    <option value="published">Published</option>
                  </select>
                </div>
              </div>
              <div>
                <Label htmlFor="pg-summary">Summary</Label>
                <Textarea id="pg-summary" rows={2} value={form.summary} onChange={set('summary')} />
              </div>
              <div>
                <Label htmlFor="pg-body">Content (Markdown: ## for headings, - for lists, links as plain https:// addresses)</Label>
                <Textarea id="pg-body" rows={18} value={form.body} onChange={set('body')} className="font-mono text-xs" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <Label htmlFor="pg-mt">SEO title</Label>
                  <Input id="pg-mt" value={form.meta_title} onChange={set('meta_title')} />
                </div>
                <div>
                  <Label htmlFor="pg-md">SEO description</Label>
                  <Input id="pg-md" value={form.meta_description} onChange={set('meta_description')} maxLength={300} />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setForm(null)}>Cancel</Button>
                <Button onClick={save} disabled={saving}>{saving ? 'Saving…' : 'Save page'}</Button>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}

// ── App settings ─────────────────────────────────────────────────────────────

export function AppConfigSection({ onUnauthorized }) {
  const { data, error, isLoading, reload } = useAdminData(listConfigs, [], onUnauthorized);
  const [editing, setEditing] = useState(null);

  const save = async () => {
    let value;
    try {
      value = JSON.parse(editing.text);
    } catch {
      return toast.error('That isn’t valid JSON. Text needs "quotes"; numbers and true/false don’t.');
    }
    const r = await run(() => saveConfig({ key: editing.key, value, description: editing.description }), 'Setting saved. The app picks it up within 5 minutes.', reload);
    if (r) setEditing(null);
  };

  return (
    <section className="mt-6">
      <SectionHeader title="App settings" subtitle="Change the app without a release: feature switches, minimum version, crisis lines, referral reward.">
        <Button onClick={() => setEditing({ key: '', text: '""', description: '', isNew: true })} className="gap-2">
          <Plus className="h-4 w-4" aria-hidden="true" /> New setting
        </Button>
      </SectionHeader>
      <LoadState isLoading={isLoading} error={error} onRetry={reload}>
        <div className="mt-4 grid gap-3">
          {(data?.configs || []).map((c) => (
            <div key={c.key} className="rounded-2xl border border-[#dcece6] bg-white p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="font-mono text-sm font-semibold text-[#0b3b31]">{c.key}</p>
                  {c.description ? <p className="text-xs text-[#536b64]">{c.description}</p> : null}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => setEditing({ key: c.key, text: JSON.stringify(c.value, null, 2), description: c.description || '' })}>
                    <Pencil className="h-3.5 w-3.5" aria-hidden="true" /> Edit
                  </Button>
                  <Button variant="destructive" size="sm" onClick={() => window.confirm(`Remove ${c.key}?`) && run(() => deleteConfig(c.key), 'Removed.', reload)}>
                    <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                  </Button>
                </div>
              </div>
              <pre className="mt-2 max-h-40 overflow-auto rounded-lg bg-[#f6fbf9] p-2 text-xs text-[#31544c]">{JSON.stringify(c.value, null, 2)}</pre>
            </div>
          ))}
        </div>
      </LoadState>
      <Dialog open={!!editing} onOpenChange={(open) => !open && setEditing(null)}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>{editing?.isNew ? 'New setting' : editing?.key}</DialogTitle>
          </DialogHeader>
          {editing ? (
            <div className="grid gap-3">
              {editing.isNew ? (
                <div>
                  <Label htmlFor="cfg-key">Key (lowercase, dots and underscores)</Label>
                  <Input id="cfg-key" value={editing.key} onChange={(e) => setEditing((x) => ({ ...x, key: e.target.value }))} />
                </div>
              ) : null}
              <div>
                <Label htmlFor="cfg-desc">Description</Label>
                <Input id="cfg-desc" value={editing.description} onChange={(e) => setEditing((x) => ({ ...x, description: e.target.value }))} />
              </div>
              <div>
                <Label htmlFor="cfg-val">Value (JSON)</Label>
                <Textarea id="cfg-val" rows={12} value={editing.text} onChange={(e) => setEditing((x) => ({ ...x, text: e.target.value }))} className="font-mono text-xs" />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setEditing(null)}>Cancel</Button>
                <Button onClick={save}>Save</Button>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}

// ── Announcements ────────────────────────────────────────────────────────────

const emptyAnnouncement = { id: null, title: '', body: '', audience: 'all', deep_link: '' };

export function AnnouncementsSection({ onUnauthorized }) {
  const { data, error, isLoading, reload } = useAdminData(listAnnouncements, [], onUnauthorized);
  const [form, setForm] = useState(null);

  const save = async (andSend) => {
    if (!form.title.trim() || !form.body.trim()) return toast.error('Add a title and a message.');
    const r = await run(() => saveAnnouncement(form.id, { ...form, deep_link: form.deep_link || null }), andSend ? null : 'Saved as a draft.');
    if (!r) return;
    setForm(null);
    if (andSend) await send(r.announcement);
    else reload();
  };

  const send = async (a) => {
    if (!window.confirm(`Send "${a.title}" to ${a.audience === 'all' ? 'everyone' : `${a.audience} users`} now?`)) return reload();
    await run(() => sendAnnouncement(a.id), 'Sent.', reload);
    reload();
  };

  return (
    <section className="mt-6">
      <SectionHeader title="Announcements" subtitle="Push notifications to the app. Keep them rare and kind.">
        <Button onClick={() => setForm(emptyAnnouncement)} className="gap-2">
          <Plus className="h-4 w-4" aria-hidden="true" /> New announcement
        </Button>
      </SectionHeader>
      <LoadState isLoading={isLoading} error={error} onRetry={reload}>
        <div className="mt-4 grid gap-3">
          {(data?.announcements || []).length === 0 ? <p className="text-sm text-[#536b64]">No announcements yet.</p> : null}
          {(data?.announcements || []).map((a) => (
            <div key={a.id} className="rounded-2xl border border-[#dcece6] bg-white p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-[#0b3b31]">{a.title}</span>
                  <Pill tone={a.status === 'sent' ? 'ok' : a.status === 'failed' ? 'bad' : 'warn'}>{a.status}</Pill>
                  <Pill>{a.audience}</Pill>
                  {a.sent_at ? <span className="text-xs text-[#6b8a82]">sent {formatDate(a.sent_at, true)}</span> : null}
                </div>
                <div className="flex gap-2">
                  {a.status !== 'sent' ? (
                    <>
                      <Button variant="outline" size="sm" onClick={() => setForm({ ...emptyAnnouncement, ...a, deep_link: a.deep_link || '' })}>
                        <Pencil className="h-3.5 w-3.5" aria-hidden="true" /> Edit
                      </Button>
                      <Button size="sm" onClick={() => send(a)} className="gap-1">
                        <Send className="h-3.5 w-3.5" aria-hidden="true" /> Send
                      </Button>
                    </>
                  ) : null}
                  <Button variant="destructive" size="sm" onClick={() => window.confirm('Delete this announcement?') && run(() => deleteAnnouncement(a.id), 'Deleted.', reload)}>
                    <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                  </Button>
                </div>
              </div>
              <p className="mt-2 text-sm text-[#31544c]">{a.body}</p>
              {a.error ? <p className="mt-1 text-xs text-[#8a2f2f]">{a.error}</p> : null}
            </div>
          ))}
        </div>
      </LoadState>
      <Dialog open={!!form} onOpenChange={(open) => !open && setForm(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{form?.id ? 'Edit announcement' : 'New announcement'}</DialogTitle>
          </DialogHeader>
          {form ? (
            <div className="grid gap-3">
              <div>
                <Label htmlFor="an-title">Title</Label>
                <Input id="an-title" maxLength={120} value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} />
              </div>
              <div>
                <Label htmlFor="an-body">Message</Label>
                <Textarea id="an-body" rows={4} maxLength={500} value={form.body} onChange={(e) => setForm((f) => ({ ...f, body: e.target.value }))} />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <Label htmlFor="an-aud">Who gets it</Label>
                  <select id="an-aud" value={form.audience} onChange={(e) => setForm((f) => ({ ...f, audience: e.target.value }))} className="h-10 w-full rounded-xl border border-[#dcece6] bg-white px-3 text-sm">
                    <option value="all">Everyone</option>
                    <option value="free">Free users</option>
                    <option value="premium">Premium users</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="an-link">Opens (optional)</Label>
                  <Input id="an-link" placeholder="nurotok://toolkit" value={form.deep_link} onChange={(e) => setForm((f) => ({ ...f, deep_link: e.target.value }))} />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => save(false)}>Save draft</Button>
                <Button onClick={() => save(true)} className="gap-2">
                  <Send className="h-4 w-4" aria-hidden="true" /> Save and send
                </Button>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}

// ── Families & referrals ─────────────────────────────────────────────────────

export function FamiliesSection({ onUnauthorized }) {
  const [status, setStatus] = useState('active');
  const [page, setPage] = useState(1);
  const { data, error, isLoading, reload } = useAdminData(() => listFamilies({ status, page }), [status, page], onUnauthorized);
  return (
    <section className="mt-6">
      <SectionHeader title="Families" subtitle="Parent accounts linked to a child's phone.">
        <select aria-label="Status" value={status} onChange={(e) => { setStatus(e.target.value); setPage(1); }} className="rounded-xl border border-[#dcece6] bg-white px-3 py-2 text-sm">
          <option value="active">Active</option>
          <option value="pending">Waiting for code</option>
          <option value="revoked">Ended</option>
          <option value="">All</option>
        </select>
      </SectionHeader>
      <LoadState isLoading={isLoading} error={error} onRetry={reload}>
        <div className="mt-4 overflow-hidden rounded-2xl border border-[#dcece6] bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Parent</TableHead>
                <TableHead>Child phone</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Linked</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(data?.data || []).length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-sm text-[#536b64]">No family links.</TableCell>
                </TableRow>
              ) : (
                data.data.map((f) => (
                  <TableRow key={f.id}>
                    <TableCell>{f.parent?.name || f.parent?.email || '–'}</TableCell>
                    <TableCell>
                      {f.child_device?.label || f.child_name || f.child?.name || '–'}
                      <span className="block text-xs text-[#6b8a82]">{f.child_device?.model}</span>
                    </TableCell>
                    <TableCell><Pill tone={f.status === 'active' ? 'ok' : f.status === 'pending' ? 'warn' : 'neutral'}>{f.status}</Pill></TableCell>
                    <TableCell>{formatDate(f.linked_at || f.created_at)}</TableCell>
                    <TableCell className="text-right">
                      {f.status !== 'revoked' ? (
                        <Button variant="outline" size="sm" onClick={() => window.confirm('End this family link?') && run(() => revokeFamily(f.id), 'Link ended.', reload)}>
                          End link
                        </Button>
                      ) : null}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
        <Pager meta={data} onPage={setPage} />
      </LoadState>
    </section>
  );
}

export function ReferralsSection({ onUnauthorized }) {
  const [page, setPage] = useState(1);
  const { data, error, isLoading, reload } = useAdminData(() => listReferrals(page), [page], onUnauthorized);
  return (
    <section className="mt-6">
      <SectionHeader title="Referrals" subtitle="Who invited whom. Both get the Premium days set under App settings → referral_reward_days." />
      <LoadState isLoading={isLoading} error={error} onRetry={reload}>
        <div className="mt-4 overflow-hidden rounded-2xl border border-[#dcece6] bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invited by</TableHead>
                <TableHead>New account</TableHead>
                <TableHead>Reward</TableHead>
                <TableHead>When</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(data?.data || []).length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center text-sm text-[#536b64]">No referrals yet.</TableCell>
                </TableRow>
              ) : (
                data.data.map((r) => (
                  <TableRow key={r.id}>
                    <TableCell>
                      {r.referrer?.name || r.referrer?.email} <span className="text-xs text-[#6b8a82]">{r.referrer?.referral_code}</span>
                    </TableCell>
                    <TableCell>{r.referred?.name || r.referred?.email}</TableCell>
                    <TableCell>{r.reward_days} days each</TableCell>
                    <TableCell>{formatDate(r.created_at)}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
        <Pager meta={data} onPage={setPage} />
      </LoadState>
    </section>
  );
}

// ── Admin accounts & activity ────────────────────────────────────────────────

export function AdminsSection({ onUnauthorized }) {
  const { data, error, isLoading, reload } = useAdminData(listAdmins, [], onUnauthorized);
  const [form, setForm] = useState(null);

  const save = async () => {
    const r = await run(() => saveAdmin(form.id, form), 'Saved.', reload);
    if (r) setForm(null);
  };

  return (
    <section className="mt-6">
      <SectionHeader title="Admin accounts" subtitle="Admins manage everything. Editors manage blogs, pages and announcements only.">
        <Button onClick={() => setForm({ id: null, name: '', email: '', role: 'editor', password: '' })} className="gap-2">
          <Plus className="h-4 w-4" aria-hidden="true" /> Add admin
        </Button>
      </SectionHeader>
      <TwoFactorCard />
      <LoadState isLoading={isLoading} error={error} onRetry={reload}>
        <div className="mt-4 overflow-hidden rounded-2xl border border-[#dcece6] bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Last sign-in</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(data?.admins || []).map((a) => (
                <TableRow key={a.id}>
                  <TableCell className="font-medium">{a.name}</TableCell>
                  <TableCell>{a.email}</TableCell>
                  <TableCell><Pill tone={a.role === 'admin' ? 'accent' : 'neutral'}>{a.role}</Pill></TableCell>
                  <TableCell>{formatDate(a.last_login_at, true)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm" onClick={() => setForm({ ...a, password: '' })}>
                        <Pencil className="h-3.5 w-3.5" aria-hidden="true" /> Edit
                      </Button>
                      <Button variant="destructive" size="sm" onClick={() => window.confirm(`Remove ${a.email}?`) && run(() => deleteAdmin(a.id), 'Removed.', reload)}>
                        <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </LoadState>
      <Dialog open={!!form} onOpenChange={(open) => !open && setForm(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{form?.id ? 'Edit admin' : 'Add admin'}</DialogTitle>
          </DialogHeader>
          {form ? (
            <div className="grid gap-3">
              <div>
                <Label htmlFor="ad-name">Name</Label>
                <Input id="ad-name" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
              </div>
              <div>
                <Label htmlFor="ad-email">Email</Label>
                <Input id="ad-email" type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
              </div>
              <div>
                <Label htmlFor="ad-role">Role</Label>
                <select id="ad-role" value={form.role} onChange={(e) => setForm((f) => ({ ...f, role: e.target.value }))} className="h-10 w-full rounded-xl border border-[#dcece6] bg-white px-3 text-sm">
                  <option value="editor">Editor</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div>
                <Label htmlFor="ad-pw">{form.id ? 'New password (leave empty to keep)' : 'Password (at least 10 characters)'}</Label>
                <Input id="ad-pw" type="password" autoComplete="new-password" value={form.password} onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))} />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setForm(null)}>Cancel</Button>
                <Button onClick={save}>Save</Button>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}

export function AuditSection({ onUnauthorized }) {
  const [page, setPage] = useState(1);
  const { data, error, isLoading, reload } = useAdminData(() => listAudit({ page }), [page], onUnauthorized);
  return (
    <section className="mt-6">
      <SectionHeader title="Activity log" subtitle="Every change made in this admin panel, newest first." />
      <LoadState isLoading={isLoading} error={error} onRetry={reload}>
        <div className="mt-4 overflow-hidden rounded-2xl border border-[#dcece6] bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>When</TableHead>
                <TableHead>Who</TableHead>
                <TableHead>What</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(data?.data || []).length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center text-sm text-[#536b64]">Nothing yet.</TableCell>
                </TableRow>
              ) : (
                data.data.map((l) => (
                  <TableRow key={l.id}>
                    <TableCell className="whitespace-nowrap">{formatDate(l.created_at, true)}</TableCell>
                    <TableCell>{l.user?.name || 'System'}</TableCell>
                    <TableCell className="font-mono text-xs">{l.action}</TableCell>
                    <TableCell className="max-w-[360px] truncate text-xs text-[#536b64]" title={JSON.stringify(l.changes)}>
                      {l.subject_type ? `${l.subject_type} #${l.subject_id} ` : ''}
                      {l.changes ? JSON.stringify(l.changes) : ''}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
        <Pager meta={data} onPage={setPage} />
      </LoadState>
    </section>
  );
}
