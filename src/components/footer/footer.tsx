export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="w-full border-t border-[var(--border,#ddd6e3)] bg-[var(--pearl,#f7f4fa)] py-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex items-center gap-2 font-mono text-sm font-bold tracking-tight text-[var(--plum,#231d2b)]">
          <span
            className="material-symbols-outlined text-[var(--green,#2fae63)]"
            aria-hidden
          >
            terminal
          </span>
          <span>DULAN.</span>
          <span className="ml-3 font-normal text-xs text-[var(--lavender-gray,#8b8295)]">
            Designed &amp; built with care.
          </span>
        </div>

        {/* Copyright */}
        <p className="font-mono text-xs text-[var(--lavender-gray,#8b8295)]">
          © 2026 Dulan Prabashwara
        </p>

        {/* Back to top link */}
        <a
          href="#top"
          className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-[var(--muted-plum,#655d6f)] hover:text-[var(--green,#2fae63)] transition-colors min-h-[44px] py-2"
        >
          <span>BACK TO TOP</span>
          <span className="material-symbols-outlined text-sm" aria-hidden>
            arrow_upward
          </span>
        </a>
      </div>
    </footer>
  );
}
