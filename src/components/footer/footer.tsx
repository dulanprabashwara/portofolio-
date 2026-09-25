import { Terminal, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="w-full border-t border-[var(--border)] dark:border-[#2A2A2A] bg-[var(--pearl)] dark:bg-[#0A0A0A] py-12 transition-colors"
    >
      <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex items-center gap-2 font-mono text-sm font-bold tracking-tight text-[var(--plum)] dark:text-[#F5F5F5]">
          <Terminal
            className="w-4 h-4 text-[var(--green,#2fae63)]"
            aria-hidden="true"
          />
          <span>DULAN.</span>
          <span className="ml-3 font-normal text-xs text-[var(--lavender-gray)] dark:text-[#8A8A8A]">
            Designed &amp; built with care.
          </span>
        </div>

        {/* Copyright */}
        <p className="font-mono text-xs text-[var(--lavender-gray)] dark:text-[#8A8A8A]">
          © 2026 Dulan Prabashwara
        </p>

        {/* Back to top link */}
        <a
          href="#top"
          className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-[var(--muted-plum)] dark:text-[#C9C9C9] hover:text-[var(--green,#2fae63)] transition-colors min-h-[44px] py-2"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
