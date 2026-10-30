import React, { useCallback, useEffect, useState } from 'react';
import { UnauthorizedError } from '@/api/adminApi.js';

/** Load data for an admin section, with loading and error state, and a way to reload. */
export function useAdminData(load, deps = [], onUnauthorized) {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const reload = useCallback(async () => {
    setIsLoading(true);
    setError('');
    try {
      setData(await load());
    } catch (e) {
      if (e instanceof UnauthorizedError) onUnauthorized?.(e);
      setError(e?.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useEffect(() => {
    reload();
  }, [reload]);

  return { data, error, isLoading, reload, setData };
}

export function SectionHeader({ title, subtitle, children }) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-3">
      <div>
        <h1 className="text-2xl font-semibold text-[#0b3b31]">{title}</h1>
        {subtitle ? <p className="mt-1 text-sm font-medium text-[#536b64]">{subtitle}</p> : null}
      </div>
      {children ? <div className="flex flex-wrap gap-2">{children}</div> : null}
    </div>
  );
}

export function LoadState({ isLoading, error, onRetry, children }) {
  if (isLoading) {
    return (
      <div className="mt-6 rounded-2xl border border-[#dcece6] bg-white p-8 text-center" role="status">
        <p className="text-base font-semibold text-[#31544c]">Loading…</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="mt-6 rounded-2xl border border-[#f1d5d5] bg-[#fff8f8] p-8 text-center" role="alert">
        <p className="text-base font-semibold text-[#8a2f2f]">{error}</p>
        {onRetry ? (
          <button type="button" onClick={onRetry} className="mt-3 text-sm font-semibold text-[#0b5f49] underline underline-offset-4">
            Try again
          </button>
        ) : null}
      </div>
    );
  }
  return children;
}

export function StatCard({ label, value, hint }) {
  return (
    <div className="rounded-2xl border border-[#dcece6] bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-[#6b8a82]">{label}</p>
      <p className="mt-2 text-3xl font-semibold tabular-nums text-[#0b3b31]">{value ?? '–'}</p>
      {hint ? <p className="mt-1 text-xs font-medium text-[#536b64]">{hint}</p> : null}
    </div>
  );
}

/** Simple bars without a chart library: one value per label, scaled to the largest. */
export function Bars({ rows, labelKey, valueKey, height = 140, format = (v) => v }) {
  const max = Math.max(1, ...rows.map((r) => Number(r[valueKey]) || 0));
  if (!rows.length) return <p className="text-sm font-medium text-[#536b64]">No data yet.</p>;
  return (
    <div className="flex items-end gap-1" style={{ height }} role="img" aria-label={rows.map((r) => `${r[labelKey]}: ${format(r[valueKey])}`).join(', ')}>
      {rows.map((r) => (
        <div key={r[labelKey]} className="group relative flex h-full flex-1 flex-col justify-end">
          <div
            className="rounded-t-md bg-gradient-to-t from-[#0b5f49] to-[#4aa585]"
            style={{ height: `${Math.max(2, ((Number(r[valueKey]) || 0) / max) * 100)}%` }}
          />
          <span className="pointer-events-none absolute -top-6 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded bg-[#0b3b31] px-1.5 py-0.5 text-[0.65rem] font-semibold text-white group-hover:block">
            {r[labelKey]}: {format(r[valueKey])}
          </span>
        </div>
      ))}
    </div>
  );
}

export function Pill({ tone = 'neutral', children }) {
  const tones = {
    neutral: 'bg-[#eef4f2] text-[#31544c]',
    ok: 'bg-[#e1f5ec] text-[#0b5f49]',
    warn: 'bg-[#fff1df] text-[#94591b]',
    bad: 'bg-[#fde8e8] text-[#8a2f2f]',
    accent: 'bg-[#e7f0ff] text-[#24448a]'
  };
  return <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${tones[tone] || tones.neutral}`}>{children}</span>;
}

export const formatDate = (iso, withTime = false) => {
  if (!iso) return '–';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '–';
  return withTime
    ? d.toLocaleString(undefined, { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
    : d.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
};

export function Pager({ meta, onPage }) {
  if (!meta || meta.last_page <= 1) return null;
  return (
    <div className="mt-4 flex items-center justify-between text-sm font-medium text-[#536b64]">
      <span>
        Page {meta.current_page} of {meta.last_page} · {meta.total} total
      </span>
      <div className="flex gap-2">
        <button type="button" disabled={meta.current_page <= 1} onClick={() => onPage(meta.current_page - 1)} className="rounded-lg border border-[#dcece6] px-3 py-1.5 disabled:opacity-40">
          Previous
        </button>
        <button type="button" disabled={meta.current_page >= meta.last_page} onClick={() => onPage(meta.current_page + 1)} className="rounded-lg border border-[#dcece6] px-3 py-1.5 disabled:opacity-40">
          Next
        </button>
      </div>
    </div>
  );
}
