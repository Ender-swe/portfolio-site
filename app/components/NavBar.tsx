/**
 * @copyright 2026 Eduardo Turcios. All rights reserved.
 * Unauthorized use, reproduction, or distribution of this file is strictly prohibited.
 */
import { useState } from 'react';
import { GITHUB_USERNAME, LINKEDIN_SLUG, NAME } from '~/load-context';
import { GitHubIcon, LinkedInIcon } from '~/components/icons';
import { ThemeToggle } from '~/components/ThemeToggle';
import { Link } from 'react-router';

/** Anchor links for each page section. */
const NAV_LINKS = [
  { label: 'Hero' },
  { label: 'Projects' },
  { label: 'Education' },
  { label: 'Experience' },
] as const;

/**
 * Top navigation bar component.
 *
 * Renders the site name, section anchor links with smooth-scroll behaviour,
 * a GitHub profile link, and a hamburger menu for small viewports.
 */
export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='fixed inset-x-0 top-0 z-50 border-b border-white/5 backdrop-blur-md'>
      <div className='mx-auto flex h-14 max-w-5xl items-center justify-between px-4'>
        {/* Site name */}
        <Link
          to={{ pathname: '/' }}
          className='text-lg font-bold tracking-wide text-[var(--color-accent)]'
        >
          {NAME}
        </Link>

        {/* Desktop nav */}
        <nav aria-label='primary' className='hidden items-center gap-6 md:flex'>
          {NAV_LINKS.map(({ label }) => (
            <Link
              key={label.toLowerCase()}
              to={{ pathname: '/', hash: `#${label.toLowerCase()}` }}
              className='text-sm text-[var(--color-muted)] transition-all hover:text-[var(--color-text)] hover:drop-shadow-[0_0_6px_rgba(226,232,240,0.4)]'
            >
              {label}
            </Link>
          ))}
          <span className='h-4 w-px bg-[var(--color-muted)]/40' aria-hidden='true' />
          {GITHUB_USERNAME && (
            <Link
              to={`https://github.com/${GITHUB_USERNAME}`}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
              className='text-[var(--color-muted)] transition-all hover:text-[var(--color-accent)] hover:drop-shadow-[0_0_6px_rgba(0,212,255,0.5)]'
            >
              <GitHubIcon />
            </Link>
          )}
          {LINKEDIN_SLUG && (
            <Link
              to={`https://www.linkedin.com/in/${LINKEDIN_SLUG}`}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
              className='text-[var(--color-muted)] transition-all hover:text-[var(--color-accent)] hover:drop-shadow-[0_0_6px_rgba(0,212,255,0.5)]'
            >
              <LinkedInIcon />
            </Link>
          )}
          <ThemeToggle />
        </nav>

        {/* Hamburger button (mobile) */}
        <button
          type='button'
          aria-label='Toggle navigation'
          aria-expanded={menuOpen}
          aria-controls='mobile-nav'
          className='flex h-8 w-8 flex-col justify-center gap-1.5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] md:hidden'
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className='block h-0.5 w-6 bg-[var(--color-text)] transition-all' />
          <span className='block h-0.5 w-6 bg-[var(--color-text)] transition-all' />
          <span className='block h-0.5 w-6 bg-[var(--color-text)] transition-all' />
        </button>
      </div>

      {/* Mobile nav */}
      <nav
        id='mobile-nav'
        aria-label='mobile'
        hidden={!menuOpen}
        className='flex flex-col gap-3 px-4 pb-4 backdrop-blur-md md:hidden'
      >
        {NAV_LINKS.map(({ label }) => (
          <Link
            key={label.toLowerCase()}
            to={{ pathname: '/', hash: `#${label.toLowerCase()}` }}
            className='text-sm text-[var(--color-muted)] transition-all hover:text-[var(--color-text)] hover:drop-shadow-[0_0_6px_rgba(226,232,240,0.4)]'
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
        {GITHUB_USERNAME && (
          <Link
            to={`https://github.com/${GITHUB_USERNAME}`}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
            className='text-sm text-[var(--color-muted)] transition-all hover:text-[var(--color-accent)] hover:drop-shadow-[0_0_6px_rgba(0,212,255,0.5)]'
            onClick={() => setMenuOpen(false)}
          >
            GitHub
          </Link>
        )}
        {LINKEDIN_SLUG && (
          <Link
            to={`https://www.linkedin.com/in/${LINKEDIN_SLUG}`}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
            className='text-sm text-[var(--color-muted)] transition-all hover:text-[var(--color-accent)] hover:drop-shadow-[0_0_6px_rgba(0,212,255,0.5)]'
            onClick={() => setMenuOpen(false)}
          >
            LinkedIn
          </Link>
        )}
        <hr className='border-[var(--color-muted)]/30' aria-hidden='true' />
        <ThemeToggle />
      </nav>
    </header>
  );
}
