import type { Project } from "@/types/content";

const validUrl = (value: string | null): string | null => {
  if (!value) return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
};

export function ProjectActions({ project }: { project: Project }) {
  const live = validUrl(project.liveUrl);
  const repository = validUrl(project.repositoryUrl);

  if (!live && !repository) return null;

  return (
    <div
      aria-label={`${project.title} links`}
      className="flex flex-wrap items-center gap-4"
    >
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-[var(--green,#2fae63)] hover:text-[var(--green-hover,#258c50)] font-semibold transition-colors min-h-[44px] py-2"
        >
          <span>LIVE SITE</span>
          <span className="material-symbols-outlined text-sm" aria-hidden>
            open_in_new
          </span>
        </a>
      )}
      {repository && (
        <a
          href={repository}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-[var(--plum,#231d2b)] hover:text-[var(--green,#2fae63)] font-semibold transition-colors min-h-[44px] py-2"
        >
          <span>REPOSITORY</span>
          <span className="material-symbols-outlined text-sm" aria-hidden>
            open_in_new
          </span>
        </a>
      )}
    </div>
  );
}
