'use client';

import { socials } from "@/data/socials";
import { StaggerButton } from "@/components/ui/stagger-button";
import { SpotlightCard } from "@/components/ui/spotlightcard";
import { ContactIcon } from "@/components/ui/contact-icon";
import { HandwrittenSignature } from "@/components/ui/handwritten-signature";

export function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 border-b border-[var(--border)] dark:border-[#2A2A2A]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & CTA */}
        <div className="lg:col-span-6 flex flex-col items-start gap-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--muted-plum)] dark:text-[#8A8A8A]">
            07 / CONTACT
          </p>
          <h2
            id="contact-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--plum)] dark:text-[#F5F5F5] leading-[1.08]"
          >
            Have something interesting in mind?
          </h2>
          <p className="text-base sm:text-lg text-[var(--muted-plum)] dark:text-[#C9C9C9] leading-relaxed max-w-lg">
            Whether you have an internship opportunity, an interesting project,
            or just want to connect, I&apos;d love to hear from you.
          </p>

          <StaggerButton asChild text="Let's talk">
            <a
              href="mailto:dulanprabashwara@gmail.com"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--green,#2fae63)] px-6 py-3.5 font-mono text-sm uppercase tracking-wider font-semibold text-white shadow-sm hover:bg-[var(--green-hover,#36c270)] hover:-translate-y-0.5 transition-all"
            >
              <span>Let&apos;s talk</span>
              <span className="material-symbols-outlined text-base" aria-hidden>
                arrow_forward
              </span>
            </a>
          </StaggerButton>
        </div>

        {/* Right Column: Contact Links List Card */}
        <SpotlightCard
          spotlightColor="47, 174, 99"
          className="lg:col-span-6 rounded-2xl border border-[var(--border)] bg-white shadow-xl hover:border-black/20 dark:border-[#2A2A2A] dark:bg-[#151515] dark:hover:border-white/20 transition-all overflow-hidden"
          contentClassName="p-4 sm:p-8 divide-y divide-[var(--border)] dark:divide-[#2A2A2A] w-full"
        >
          {socials.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between gap-3 py-4 first:pt-0 last:pb-0 group min-w-0"
            >
              <div className="flex items-center gap-3 sm:gap-3.5 min-w-0 flex-1">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--mist)] text-[var(--green,#2fae63)] shadow-2xs group-hover:border-[var(--green,#2fae63)]/40 dark:border-[#2A2A2A] dark:bg-[#1A1A1A] transition-colors">
                  <ContactIcon name={item.label} className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-xs uppercase tracking-wider text-[var(--lavender-gray)] dark:text-[#8A8A8A]">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.href.startsWith("http") ? "noreferrer" : undefined
                      }
                      className="mt-1 block font-mono text-sm sm:text-base font-medium text-[var(--plum)] dark:text-[#F5F5F5] hover:text-[var(--green,#2fae63)] transition-colors truncate"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 font-mono text-sm sm:text-base font-medium text-[var(--plum)] dark:text-[#F5F5F5] truncate">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>

              {item.href && (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={`Open ${item.label}`}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--mist)] text-[var(--muted-plum)] hover:border-[var(--green,#2fae63)] hover:text-[var(--green,#2fae63)] dark:border-[#2A2A2A] dark:bg-[#1A1A1A] dark:text-[#C9C9C9] transition-colors"
                >
                  <span
                    className="material-symbols-outlined text-sm"
                    aria-hidden
                  >
                    open_in_new
                  </span>
                </a>
              )}
            </div>
          ))}
        </SpotlightCard>
      </div>

      {/* Signature sign-off above footer */}
      <div className="mt-16 sm:mt-20 pt-8 border-t border-[var(--border)]/60 dark:border-[#2A2A2A]/60 flex flex-col items-center justify-center text-center">
        <HandwrittenSignature
          className="w-48 sm:w-60 h-auto opacity-95 hover:opacity-100 transition-opacity"
          duration={2.2}
          delay={0.2}
        />
      </div>
    </div>
  );
}
