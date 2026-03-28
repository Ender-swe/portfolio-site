import {
  GITHUB_USERNAME,
  PORTFOLIO_NAME,
  PORTFOLIO_LINKEDIN_URL,
} from "~/load-context";

/**
 * Hero section component.
 *
 * Renders the introductory section at the top of the home page, including
 * the developer's name, a short bio, and social/contact links (GitHub,
 * LinkedIn). All personal data is sourced from environment variables via
 * {@link ~/load-context}.
 *
 * @example
 * ```tsx
 * <Hero />
 * ```
 */
export function Hero() {
  const githubUrl = `https://github.com/${GITHUB_USERNAME}`;

  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-56px)] mt-14 flex items-center justify-center px-4"
    >
      <div className="max-w-5xl w-full mx-auto py-16 flex flex-col gap-6">
        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--color-text)] leading-tight">
          {PORTFOLIO_NAME || "Your Name"}
        </h1>

        {/* Short bio */}
        <p className="text-lg sm:text-xl text-[var(--color-muted)] max-w-xl leading-relaxed">
          Computer Science student, USMC veteran, software developer.
        </p>

        {/* Social / contact links */}
        <div className="flex flex-wrap gap-4 mt-2">
          {GITHUB_USERNAME && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="px-5 py-2.5 rounded-md border border-[var(--color-accent)] text-[var(--color-accent)] text-sm font-medium hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] transition-colors"
            >
              GitHub
            </a>
          )}
          {PORTFOLIO_LINKEDIN_URL && (
            <a
              href={PORTFOLIO_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="px-5 py-2.5 rounded-md border border-[var(--color-muted)] text-[var(--color-muted)] text-sm font-medium hover:border-[var(--color-text)] hover:text-[var(--color-text)] transition-colors"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
