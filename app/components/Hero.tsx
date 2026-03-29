/**
 * @copyright 2026 Eduardo Turcios. All rights reserved.
 * Unauthorized use, reproduction, or distribution of this file is strictly prohibited.
 */
import { motion } from 'framer-motion';
import { GITHUB_USERNAME, NAME, LINKEDIN_SLUG } from '~/load-context';
import { fadeUpVariants, staggerContainer } from '~/lib/animations';
import { GitHubIcon, LinkedInIcon } from '~/components/icons';
import { Link } from 'react-router';

export function Hero() {
  const githubUrl = `https://github.com/${GITHUB_USERNAME}`;

  return (
    <section
      id='hero'
      className='mt-14 flex min-h-[calc(100vh-56px)] items-center justify-center px-4'
    >
      <motion.div
        className='mx-auto flex w-full max-w-5xl flex-col gap-8 py-16'
        variants={staggerContainer}
        initial='hidden'
        animate='visible'
      >
        {/* Greeting tag */}
        <motion.span
          variants={fadeUpVariants}
          className='font-mono text-sm tracking-widest text-[var(--color-accent)] uppercase'
        >
          Hello, world
        </motion.span>

        {/* Name */}
        <motion.h1
          variants={fadeUpVariants}
          className='text-5xl leading-tight font-bold text-[var(--color-text)] sm:text-6xl md:text-7xl'
        >
          {NAME || 'Your Name'}
        </motion.h1>

        {/* Divider accent */}
        <motion.div
          variants={fadeUpVariants}
          className='h-1 w-16 rounded-full bg-[var(--color-accent)]'
        />

        {/* Short bio */}
        <motion.p
          variants={fadeUpVariants}
          className='max-w-xl text-lg leading-relaxed text-[var(--color-muted)] sm:text-xl'
        >
          Computer Science student, USMC veteran, software developer.
        </motion.p>

        {/* Social / contact links */}
        <motion.div variants={fadeUpVariants} className='mt-2 flex flex-wrap gap-4'>
          {GITHUB_USERNAME && (
            <Link
              to={githubUrl}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
              className='inline-flex items-center gap-2 rounded-md border border-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-[var(--color-accent)] shadow-[0_2px_8px_rgba(0,212,255,0.2)] transition-all hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] hover:shadow-[0_2px_14px_rgba(0,212,255,0.45)]'
            >
              <GitHubIcon />
              GitHub
            </Link>
          )}
          {LINKEDIN_SLUG && (
            <Link
              to={`https://www.linkedin.com/in/${LINKEDIN_SLUG}`}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
              className='inline-flex items-center gap-2 rounded-md border border-[var(--color-muted)] px-5 py-2.5 text-sm font-medium text-[var(--color-muted)] shadow-[0_2px_8px_rgba(74,85,104,0.2)] transition-all hover:border-[var(--color-text)] hover:text-[var(--color-text)] hover:shadow-[0_2px_14px_rgba(226,232,240,0.2)]'
            >
              <LinkedInIcon />
              LinkedIn
            </Link>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
