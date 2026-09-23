import type { ReactNode } from "react";
import { Copy, Terminal } from "lucide-react";

interface CodeBlockProps {
  filename: string;
  children: ReactNode;
}

/**
 * Kitty Theme developer-friendly Kotlin code block.
 * Solid dark berry surface with cute Kitty window controls.
 */
export function CodeBlock({ filename, children }: CodeBlockProps) {
  return (
    <figure className="overflow-hidden rounded-xl border border-pink-500/20 bg-[#12091a] shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
      <figcaption className="flex items-center gap-2 border-b border-pink-500/10 bg-pink-500/[0.04] px-4 py-2.5">
        <span aria-hidden className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-[#ff758f]/80" />
          <span className="size-2.5 rounded-full bg-[#ffa6c1]/80" />
          <span className="size-2.5 rounded-full bg-[#c77dff]/80" />
        </span>
        <span className="ml-1.5 flex items-center gap-1.5 font-mono text-[11px] text-pink-200/70">
          <span>🐾</span> {filename}
        </span>
        <Copy aria-hidden className="ml-auto size-3.5 text-pink-300/40" />
      </figcaption>
      <div
        role="region"
        aria-label={`Kotlin code — ${filename}`}
        tabIndex={0}
        className="overflow-x-auto"
      >
        <pre className="min-w-max px-4 py-4 font-mono text-[13px] leading-[1.85] text-pink-100/90 sm:px-5">
          <code>{children}</code>
        </pre>
      </div>
    </figure>
  );
}

interface CodeOutputProps {
  children: ReactNode;
  label?: string;
}

export function CodeOutput({ children, label = "KITTY OUTPUT" }: CodeOutputProps) {
  return (
    <figure className="overflow-hidden rounded-xl border border-pink-500/20 bg-[#0d0614]">
      <figcaption className="flex items-center gap-2 border-b border-pink-500/10 bg-pink-500/[0.03] px-4 py-2.5">
        <Terminal aria-hidden className="size-3.5 text-[#ff758f]" />
        <span className="font-mono text-[10px] tracking-[0.22em] text-pink-300/60">
          {label}
        </span>
        <span className="ml-auto text-xs opacity-60">✨</span>
      </figcaption>
      <div className="overflow-x-auto px-4 py-4 sm:px-5">
        <div className="flex min-w-max items-start gap-2.5 font-mono text-[13px] leading-relaxed text-pink-100">
          <span aria-hidden className="text-xs text-[#ff758f] mt-0.5">❯</span>
          <div className="space-y-0.5">{children}</div>
        </div>
      </div>
    </figure>
  );
}
