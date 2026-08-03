"use client";

import { Fragment, type ReactNode } from "react";

type Token =
  | { kind: "text"; text: string }
  | { kind: "bold"; text: string }
  | { kind: "link"; label: string; href: string }
  | { kind: "email"; address: string };

const INLINE_PATTERN =
  /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)|(https?:\/\/[^\s<>()[\]]+)|([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})|\*\*([^*]+)\*\*/g;

const TRAILING_PUNCTUATION = /[.,;:!?]+$/;

function shortenUrl(href: string): string {
  const bare = href.replace(/^https?:\/\//i, "").replace(/\/+$/, "");
  if (bare.length <= 44) return bare;
  const [host] = bare.split("/");
  return `${host}/…`;
}

function tokenize(line: string): Token[] {
  const tokens: Token[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null;

  INLINE_PATTERN.lastIndex = 0;
  while ((match = INLINE_PATTERN.exec(line)) !== null) {
    if (match.index > cursor) {
      tokens.push({ kind: "text", text: line.slice(cursor, match.index) });
    }

    const [full, mdLabel, mdHref, bareUrl, email, bold] = match;

    if (mdLabel && mdHref) {
      tokens.push({ kind: "link", label: mdLabel, href: mdHref });
    } else if (bareUrl) {
      const href = bareUrl.replace(TRAILING_PUNCTUATION, "");
      tokens.push({ kind: "link", label: shortenUrl(href), href });
      const dropped = bareUrl.slice(href.length);
      if (dropped) tokens.push({ kind: "text", text: dropped });
    } else if (email) {
      tokens.push({ kind: "email", address: email });
    } else if (bold) {
      tokens.push({ kind: "bold", text: bold });
    }

    cursor = match.index + full.length;
  }

  if (cursor < line.length) {
    tokens.push({ kind: "text", text: line.slice(cursor) });
  }

  return tokens;
}

const linkClass =
  "text-accent-light underline underline-offset-2 decoration-accent/40 hover:text-accent break-words";

function renderInline(line: string): ReactNode {
  return tokenize(line).map((token, i) => {
    switch (token.kind) {
      case "link":
        return (
          <a
            key={i}
            href={token.href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            {token.label}
          </a>
        );
      case "email":
        return (
          <a key={i} href={`mailto:${token.address}`} className={linkClass}>
            {token.address}
          </a>
        );
      case "bold":
        return (
          <strong key={i} className="font-semibold text-foreground">
            {token.text}
          </strong>
        );
      default:
        return <Fragment key={i}>{token.text}</Fragment>;
    }
  });
}

type Block =
  | { kind: "paragraph"; lines: string[] }
  | { kind: "list"; items: string[] };

const BULLET_PATTERN = /^\s*(?:[-*•]|\d+[.)])\s+/;

function parseBlocks(text: string): Block[] {
  const blocks: Block[] = [];

  for (const raw of text.split("\n")) {
    const line = raw.replace(/^#{1,6}\s+/, "").trimEnd();

    if (!line.trim()) continue;

    if (BULLET_PATTERN.test(line)) {
      const item = line.replace(BULLET_PATTERN, "");
      const last = blocks[blocks.length - 1];
      if (last?.kind === "list") last.items.push(item);
      else blocks.push({ kind: "list", items: [item] });
      continue;
    }

    const last = blocks[blocks.length - 1];
    if (last?.kind === "paragraph") last.lines.push(line);
    else blocks.push({ kind: "paragraph", lines: [line] });
  }

  return blocks;
}

export function MessageContent({ text }: { text: string }) {
  const blocks = parseBlocks(text);

  return (
    <div className="space-y-2">
      {blocks.map((block, i) =>
        block.kind === "list" ? (
          <ul key={i} className="space-y-1.5">
            {block.items.map((item, j) => (
              <li key={j} className="flex gap-2">
                <span
                  className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-current opacity-50"
                  aria-hidden
                />
                <span className="min-w-0">{renderInline(item)}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p key={i} className="break-words">
            {block.lines.map((line, j) => (
              <Fragment key={j}>
                {j > 0 && <br />}
                {renderInline(line)}
              </Fragment>
            ))}
          </p>
        )
      )}
    </div>
  );
}
