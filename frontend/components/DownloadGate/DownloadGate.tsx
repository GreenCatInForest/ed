"use client";

import { useState } from "react";
import { ReactNode } from "react";
import DownloadCard from "@/components/DownloadCard/DownloadCard";
import DownloadModal from "@/components/DownloadModal/DownloadModal";

export interface GateFormat {
  format: "pdf" | "word";
  label: string;
  meta?: string;
  primary?: boolean;
}

interface DownloadGateProps {
  label?: string;
  title: string;
  description: ReactNode;
  guideName: string;
  /** Multiple gated formats (e.g. PDF + Word). Each button opens the modal for that format. */
  formats?: GateFormat[];
  /** Single-button label — used when `formats` is not provided. */
  ctaLabel?: string;
  disclaimer?: string;
  caption?: string;
  icon?: ReactNode;
}

export default function DownloadGate({
  label,
  title,
  description,
  guideName,
  formats,
  ctaLabel = "Get free template",
  disclaimer,
  caption,
  icon,
}: DownloadGateProps) {
  const [openFormat, setOpenFormat] = useState<"pdf" | "word" | null>(null);

  const downloads = formats
    ? formats.map((f) => ({
        label: f.label,
        meta: f.meta,
        primary: f.primary,
        onDownload: () => setOpenFormat(f.format),
      }))
    : [{ label: ctaLabel, onDownload: () => setOpenFormat("pdf"), primary: true }];

  return (
    <>
      <DownloadCard
        label={label}
        title={title}
        description={description}
        icon={icon}
        downloads={downloads}
        disclaimer={disclaimer}
        caption={caption}
      />
      {openFormat && (
        <DownloadModal
          title={title}
          guideName={guideName}
          format={openFormat}
          onClose={() => setOpenFormat(null)}
        />
      )}
    </>
  );
}
