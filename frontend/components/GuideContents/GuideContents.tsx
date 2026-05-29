"use client";
import { ReactNode, useState } from "react";

export interface GuideSection {
  title: string;
  content: ReactNode;
}

interface GuideContentsProps {
  num?: number | string;
  sections: GuideSection[];
  aside?: ReactNode;
}

function TocList({
  sections,
  active,
  onSelect,
}: {
  sections: GuideSection[];
  active: number;
  onSelect: (i: number) => void;
}) {
  return (
    <ol className="flex flex-col">
      {sections.map((section, i) => (
        <li key={i}>
          <button
            onClick={() => onSelect(i)}
            className={`w-full text-left flex items-baseline cursor-pointer gap-4 px-0 py-3.5 border-b border-(--color-border) border-l-2 pl-4 transition-colors ${
              active === i
                ? "border-l-accent text-fg"
                : "border-l-transparent text-fg-muted hover:text-fg"
            }`}
          >
            <span className="text-xs font-mono text-fg-subtle shrink-0 w-5">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className={`text-sm ${active === i ? "font-semibold" : "font-normal"}`}>
              {section.title}
            </span>
          </button>
        </li>
      ))}
    </ol>
  );
}

export default function GuideContents({ sections, aside }: GuideContentsProps) {
  const [active, setActive] = useState(0);
  const [tocOpen, setTocOpen] = useState(false);

  const select = (i: number) => {
    setActive(i);
    setTocOpen(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 w-full">

      {/* ── Mobile: Contents toggle bar ─────────────────────── */}
      <button
        onClick={() => setTocOpen(true)}
        className="md:hidden w-full flex items-center justify-between border border-(--color-border) rounded-lg px-4 py-3 mb-6 hover:border-(--color-border-emphasis) transition-colors"
      >
        <span className="flex items-baseline gap-2 text-sm text-fg-muted min-w-0">
          <span className="text-xs font-mono text-accent shrink-0">
            {String(active + 1).padStart(2, "0")}
          </span>
          <span className="truncate">{sections[active].title}</span>
        </span>
        <span className="text-xs text-fg-subtle ml-3 shrink-0">Contents ▾</span>
      </button>

      {/* ── Mobile: backdrop ────────────────────────────────── */}
      {tocOpen && (
        <div
          className="md:hidden fixed inset-0 z-40"
          style={{ background: "rgba(0,0,0,0.72)" }}
          onClick={() => setTocOpen(false)}
        />
      )}

      {/* ── Mobile: bottom-sheet TOC ─────────────────────────── */}
      <div
        className={`md:hidden fixed inset-x-0 bottom-0 z-50 bg-surface border-t border-(--color-border) rounded-t-2xl max-h-[70vh] overflow-y-auto transition-transform duration-300 ${
          tocOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-(--color-border)">
          <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium">
            In this guide
          </p>
          <button
            onClick={() => setTocOpen(false)}
            className="text-fg-subtle hover:text-fg transition-colors text-lg leading-none"
            aria-label="Close contents"
          >
            ✕
          </button>
        </div>
        <div className="px-2 pb-6">
          <TocList sections={sections} active={active} onSelect={select} />
        </div>
      </div>

      {/* ── Desktop: two-column layout ───────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

        {/* TOC — desktop only */}
        <div className="hidden md:flex sticky top-6 self-start flex-col max-h-[calc(100vh-3rem)] overflow-y-auto">
          <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium mb-4">
            In this guide
          </p>
          <TocList sections={sections} active={active} onSelect={setActive} />
        </div>

        {/* Content panel */}
        <div className="flex flex-col gap-6 overflow-y-auto">
          {aside}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-mono font-bold text-accent">
              {String(active + 1).padStart(2, "0")}
            </span>
            <h2 className="text-fg font-bold">{sections[active].title}</h2>
            <div className="text-sm text-fg-muted leading-relaxed">
              {sections[active].content}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
