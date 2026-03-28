import { motion } from "framer-motion";
import {
  GITHUB_USERNAME,
  PORTFOLIO_NAME,
  PORTFOLIO_LINKEDIN_URL,
} from "~/load-context";
import { fadeUpVariants, staggerContainer } from "~/lib/animations";

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Hero() {
  const githubUrl = `https://github.com/${GITHUB_USERNAME}`;

  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-56px)] mt-14 flex items-center justify-center px-4"
    >
      <motion.div
        className="max-w-5xl w-full mx-auto py-16 flex flex-col gap-8"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting tag */}
        <motion.span
          variants={fadeUpVariants}
          className="text-sm font-mono text-[var(--color-accent)] tracking-widest uppercase"
        >
          Hello, world
        </motion.span>

        {/* Name */}
        <motion.h1
          variants={fadeUpVariants}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-[var(--color-text)] leading-tight"
        >
          {PORTFOLIO_NAME || "Your Name"}
        </motion.h1>

        {/* Divider accent */}
        <motion.div
          variants={fadeUpVariants}
          className="w-16 h-1 rounded-full bg-[var(--color-accent)]"
        />

        {/* Short bio */}
        <motion.p
          variants={fadeUpVariants}
          className="text-lg sm:text-xl text-[var(--color-muted)] max-w-xl leading-relaxed"
        >
          Computer Science student, USMC veteran, software developer.
        </motion.p>

        {/* Social / contact links */}
        <motion.div variants={fadeUpVariants} className="flex flex-wrap gap-4 mt-2">
          {GITHUB_USERNAME && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[var(--color-accent)] text-[var(--color-accent)] text-sm font-medium hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] transition-colors"
            >
              <GitHubIcon />
              GitHub
            </a>
          )}
          {PORTFOLIO_LINKEDIN_URL && (
            <a
              href={PORTFOLIO_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[var(--color-muted)] text-[var(--color-muted)] text-sm font-medium hover:border-[var(--color-text)] hover:text-[var(--color-text)] transition-colors"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
