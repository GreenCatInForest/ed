"use client";

import { ReactNode } from "react";
import { IconFileDownload, IconDownload } from "@tabler/icons-react";

export interface DownloadOption {
  label: string;
  href?: string;
  /** Short file metadata shown on the right, e.g. "14 KB · 7 pages" */
  meta?: string;
  onDownload?: () => void;
  /** Renders with accent (red) background. Defaults to true for the first item. */
  primary?: boolean;
}

interface DownloadCardProps {
  label?: string;
  title: string;
  description: ReactNode;
  downloads: DownloadOption[];
  /** Optional legal disclaimer shown below a divider. */
  disclaimer?: string;
  /** Optional small caption at the very bottom (e.g. page scope note). */
  caption?: string;
  icon?: ReactNode;
}

export default function DownloadCard({
  label = "Free download",
  title,
  description,
  downloads,
  disclaimer,
  caption,
  icon,
}: DownloadCardProps) {
  return (
    <div className="bg-surface border border-(--color-border) rounded-xl p-5 flex flex-col gap-3 max-w-xs">
      <div className="flex items-center gap-1.5 text-accent text-xs font-semibold uppercase tracking-widest">
        {icon ?? <IconFileDownload size={14} stroke={2} />}
        {label}
      </div>
      <h3 className="text-base font-bold leading-snug">{title}</h3>
      <p className="text-sm text-fg-muted leading-relaxed">{description}</p>
      <div className="flex flex-col gap-2">
        {downloads.map((dl, i) => {
          const isPrimary = dl.primary ?? i === 0;
          const className = isPrimary
            ? "inline-flex items-center justify-between gap-2 bg-accent hover:bg-accent-hover text-white text-sm font-medium px-4 py-3 rounded-lg transition-colors"
            : "inline-flex items-center justify-between gap-2 bg-surface border border-(--color-border) text-fg text-sm font-medium px-4 py-3 rounded-lg transition-colors hover:border-(--color-border-input)";
          const inner = (
            <>
              <span className="flex items-center gap-2">
                <IconDownload size={16} stroke={2} />
                {dl.label}
              </span>
              {dl.meta && (
                <span className="text-xs opacity-60 shrink-0 text-right leading-tight">
                  {dl.meta}
                </span>
              )}
            </>
          );
          return dl.onDownload ? (
            <button key={i} onClick={dl.onDownload} className={className}>
              {inner}
            </button>
          ) : (
            <a key={i} href={dl.href ?? "#"} className={className}>
              {inner}
            </a>
          );
        })}
      </div>
      {disclaimer && (
        <>
          <hr className="border-(--color-border)" />
          <p className="text-xs text-fg-muted leading-relaxed">{disclaimer}</p>
        </>
      )}
      {caption && (
        <p className="text-[10px] text-fg-subtle text-center italic">{caption}</p>
      )}
    </div>
  );
}
