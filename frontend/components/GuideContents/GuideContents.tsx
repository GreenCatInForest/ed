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

export default function GuideContents({ sections, aside }: GuideContentsProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
      {/* TOC */}
      <div className="flex flex-col overflow-y-auto">
        <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium mb-4">In this guide</p>
        <ol className="flex flex-col">
          {sections.map((section, i) => (
            <li key={i}>
              <button
                onClick={() => setActive(i)}
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
      </div>

      {/* Content panel */}
      <div className="flex flex-col gap-6 overflow-y-auto">
        {aside}
        <div className="flex flex-col gap-3">
          <span className="text-[11px] font-mono font-bold text-accent">01</span>
          <h2 className=" text-fg font-bold">
            {sections[active].title}
          </h2>
          <div className="text-sm text-fg-muted leading-relaxed">
            {sections[active].content}
          </div>
        </div>
      </div>
    </div>
  );
}
