import { SpotlightCard } from "@/components/ui/spotlightcard";

const COURSES = [
  "Programming Fundamentals",
  "Data Structures and Algorithms",
  "Object-Oriented Programming",
  "Software Engineering",
  "Object-Oriented Analysis and Design",
  "Database Management Systems",
  "Operating Systems",
] as const;

export function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 border-b border-[var(--border)] dark:border-[#2A2A2A]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--muted-plum)] dark:text-[#8A8A8A]">
            01 / ABOUT
          </p>
          <h2
            id="about-title"
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--plum)] dark:text-[#F5F5F5]"
          >
            A little more than the resume.
          </h2>
        </div>

        {/* Right Column: Narrative, Academic Facts, and Foundations */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          {/* Narrative paragraphs */}
          <div className="space-y-4 text-base sm:text-lg text-[var(--muted-plum)] dark:text-[#C9C9C9] leading-relaxed">
            <p>
              I&apos;m Dulan Prabashwara, an Information Technology
              undergraduate at the University of Moratuwa with a strong interest
              in full-stack software engineering.
            </p>
            <p>
              I enjoy working across the complete application stack — from
              building responsive interfaces with Next.js and React to designing
              backend services, databases, authentication flows, real-time
              communication, and deployment pipelines.
            </p>
          </div>

          {/* Academic Credentials Card */}
          <SpotlightCard
            spotlightColor="47, 174, 99"
            className="rounded-xl border border-[var(--border)] bg-white p-6 sm:p-8 shadow-xl hover:border-black/20 dark:border-[#2A2A2A] dark:bg-[#151515] dark:hover:border-white/20 transition-all"
            contentClassName="w-full"
          >
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-[var(--lavender-gray)] dark:text-[#8A8A8A]">
                  University
                </dt>
                <dd className="mt-1 font-mono text-base font-semibold text-[var(--plum)] dark:text-[#F5F5F5]">
                  University of Moratuwa
                </dd>
              </div>

              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-[var(--lavender-gray)] dark:text-[#8A8A8A]">
                  Academic Standing
                </dt>
                <dd className="mt-1 font-mono text-base font-semibold text-[var(--green,#2fae63)]">
                  CGPA: 3.70 / 4.00
                </dd>
              </div>

              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-[var(--lavender-gray)] dark:text-[#8A8A8A]">
                  Degree
                </dt>
                <dd className="mt-1 font-mono text-base font-semibold text-[var(--plum)] dark:text-[#F5F5F5]">
                  BSc. in Information Technology (Hons)
                </dd>
              </div>

              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-[var(--lavender-gray)] dark:text-[#8A8A8A]">
                  Period
                </dt>
                <dd className="mt-1 font-mono text-base font-semibold text-[var(--plum)] dark:text-[#F5F5F5]">
                  Apr 2024 — Present
                </dd>
              </div>
            </dl>
          </SpotlightCard>

          {/* Relevant Coursework (Exact 7 items) */}
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--muted-plum)] dark:text-[#8A8A8A]">
              Academic Foundations &amp; Relevant Coursework
            </h3>
            <ul
              aria-label="Relevant Coursework"
              className="flex flex-wrap gap-2.5"
            >
              {COURSES.map((course) => (
                <li
                  key={course}
                  className="rounded-md border border-[var(--border)] bg-[var(--mist)] px-3.5 py-1.5 font-mono text-xs sm:text-sm text-[var(--plum)] shadow-2xs hover:border-black/20 dark:border-[#2A2A2A] dark:bg-[#1A1A1A] dark:text-[#C9C9C9] dark:hover:border-white/20 transition-colors"
                >
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
