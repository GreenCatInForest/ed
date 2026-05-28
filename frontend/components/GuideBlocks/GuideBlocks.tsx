import type { GuideBlock, GuideListItem } from "@/content/awaabs-law-guide";
import type { ReferenceId } from "@/content/references";

function Refs({ ids }: { ids: ReferenceId[] }) {
  return (
    <>
      {ids.map((id) => (
        <a
          key={id}
          href={`/references#ref-${id}`}
          className="font-mono text-[10px] text-fg-faint hover:text-accent transition-colors ml-0.5 no-underline"
          title={`Reference [${id}]`}
        >
          <sup>[{id}]</sup>
        </a>
      ))}
    </>
  );
}

function ListItem({ item }: { item: GuideListItem }) {
  return (
    <li className="flex items-baseline gap-2">
      <span className="text-fg-subtle shrink-0 mt-0.5">—</span>
      <span>
        {item.text}
        {item.refs && item.refs.length > 0 && <Refs ids={item.refs} />}
      </span>
    </li>
  );
}

export default function GuideBlocks({ blocks }: { blocks: GuideBlock[] }) {
  return (
    <div className="flex flex-col gap-4">
      {blocks.map((block, i) => {
        if (block.type === "para") {
          return (
            <p key={i}>
              {block.text}
              {block.refs && block.refs.length > 0 && <Refs ids={block.refs} />}
            </p>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote
              key={i}
              className="border-l-2 border-accent pl-4 flex flex-col gap-1.5"
            >
              <p className="text-fg italic leading-relaxed">&ldquo;{block.text}&rdquo;</p>
              <footer className="text-xs text-fg-subtle not-italic">
                {block.source}
                <Refs ids={[block.sourceRef]} />
              </footer>
            </blockquote>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={i} className="flex flex-col gap-2">
              {block.items.map((item, j) => (
                <ListItem key={j} item={item} />
              ))}
            </ul>
          );
        }

        if (block.type === "definition") {
          return (
            <div
              key={i}
              className="rounded-lg border border-(--color-border) bg-(--color-surface-2) p-4 flex flex-col gap-1.5"
            >
              <p className="text-xs font-semibold text-fg uppercase tracking-wider">
                {block.label}
              </p>
              <p className="text-fg-muted leading-relaxed">
                {block.body}
                {block.refs && block.refs.length > 0 && <Refs ids={block.refs} />}
              </p>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
