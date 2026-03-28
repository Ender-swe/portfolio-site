import { motion } from "framer-motion";
import {
  GITHUB_USERNAME,
  PORTFOLIO_NAME,
  PORTFOLIO_LINKEDIN_URL,
} from "~/load-context";
import { fadeUpVariants, staggerContainer } from "~/lib/animations";
import { GitHubIcon, LinkedInIcon } from "~/components/icons";

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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[var(--color-accent)] text-[var(--color-accent)] text-sm font-medium hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] transition-all shadow-[0_2px_8px_rgba(0,212,255,0.2)] hover:shadow-[0_2px_14px_rgba(0,212,255,0.45)]"
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[var(--color-muted)] text-[var(--color-muted)] text-sm font-medium hover:border-[var(--color-text)] hover:text-[var(--color-text)] transition-all shadow-[0_2px_8px_rgba(74,85,104,0.2)] hover:shadow-[0_2px_14px_rgba(226,232,240,0.2)]"
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
