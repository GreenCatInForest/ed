"use client";

import { useState } from "react";
import { ReactNode } from "react";
import DownloadCard from "@/components/DownloadCard/DownloadCard";
import DownloadModal from "@/components/DownloadModal/DownloadModal";

interface DownloadGateProps {
  label?: string;
  title: string;
  description: ReactNode;
  guideName: string;
  ctaLabel?: string;
  icon?: ReactNode;
}

export default function DownloadGate({
  label,
  title,
  description,
  guideName,
  ctaLabel = "Get free template",
  icon,
}: DownloadGateProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <DownloadCard
        label={label}
        title={title}
        description={description}
        icon={icon}
        cta={{ label: ctaLabel, href: "#" }}
        onDownload={() => setOpen(true)}
      />
      {open && (
        <DownloadModal
          title={title}
          guideName={guideName}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
