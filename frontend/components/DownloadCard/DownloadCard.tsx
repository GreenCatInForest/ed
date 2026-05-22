import { ReactNode } from "react";
import { IconFileDownload, IconDownload } from "@tabler/icons-react";

interface ResourceCardProps {
  label?: string;
  title: string;
  description: ReactNode;
  cta: {
    label: string;
    href: string;
  };
  variant?: "download" | "external" | "internal";
  icon?: ReactNode;
}

export default function DownloadCard({
  label = "Free download",
  title,
  description,
  cta,
  icon,
}: ResourceCardProps) {
  return (
    <div className="bg-surface border border-(--color-border) rounded-xl p-5 flex flex-col gap-3 max-w-xs">
      <div className="flex items-center gap-1.5 text-accent text-xs font-semibold uppercase tracking-widest">
        {icon ?? <IconFileDownload size={14} stroke={2} />}
        {label}
      </div>
      <h3 className="text-base font-bold leading-snug">{title}</h3>
      <p className="text-sm text-fg-muted leading-relaxed">{description}</p>
      <a
        href={cta.href}
        className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white text-sm font-medium px-4 py-3 rounded-lg transition-colors"
      >
        <IconDownload size={16} stroke={2} />
        {cta.label}
      </a>
    </div>
  );
}
