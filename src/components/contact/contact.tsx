import { socials } from '@/data/socials'

export function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 border-b border-[var(--border,#ddd6e3)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & CTA */}
        <div className="lg:col-span-6 flex flex-col items-start gap-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--muted-plum,#655d6f)]">
            07 / CONTACT
          </p>
          <h2
            id="contact-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--plum,#231d2b)] leading-tight"
          >
            Let&apos;s connect and build something together.
          </h2>
          <p className="text-base sm:text-lg text-[var(--muted-plum,#655d6f)] leading-relaxed max-w-lg">
            Whether you have an internship opportunity, an interesting project, or just want to
            connect, I&apos;d love to hear from you.
          </p>

          <a
            href="mailto:dulanprabashwara@gmail.com"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--green,#2fae63)] px-6 py-3.5 font-mono text-sm uppercase tracking-wider font-semibold text-white shadow-sm hover:bg-[var(--green-hover,#258c50)] transition-all hover:translate-y-[-1px]"
          >
            <span>Let&apos;s talk</span>
            <span className="material-symbols-outlined text-base" aria-hidden>
              arrow_forward
            </span>
          </a>
        </div>

        {/* Right Column: Contact Links List */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          {socials.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-xl border border-[var(--border,#ddd6e3)] bg-white p-5 sm:p-6 shadow-xs"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-[var(--lavender-gray,#8b8295)]">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="mt-1 block font-mono text-sm sm:text-base font-medium text-[var(--plum,#231d2b)] hover:text-[var(--green,#2fae63)] transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 font-mono text-sm sm:text-base font-medium text-[var(--plum,#231d2b)]">
                    {item.value}
                  </p>
                )}
              </div>

              {item.href && (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={`Open ${item.label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border,#ddd6e3)] text-[var(--plum,#231d2b)] hover:border-[var(--green,#2fae63)] hover:text-[var(--green,#2fae63)] transition-colors"
                >
                  <span className="material-symbols-outlined text-sm" aria-hidden>
                    open_in_new
                  </span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
