import { useState } from "react";
import {
  PORTFOLIO_USERNAME,
  PORTFOLIO_LINKEDIN_URL,
  PORTFOLIO_NAME,
} from "~/load-context";
import { GitHubIcon, LinkedInIcon } from "~/components/icons";
import { Link } from "react-router";

/** Anchor links for each page section. */
const NAV_LINKS = [
  { label: "Hero" },
  { label: "Projects" },
  { label: "Education" },
  { label: "Experience" },
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
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Site name */}
        <Link
          to={{ pathname: "/" }}
          className="font-bold text-lg text-[var(--color-accent)] tracking-wide"
        >
          {PORTFOLIO_NAME}
        </Link>

        {/* Desktop nav */}
        <nav aria-label="primary" className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ label }) => (
            <Link
              key={label.toLowerCase()}
              to={{ pathname: "/", hash: `#${label.toLowerCase()}` }}
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-all hover:drop-shadow-[0_0_6px_rgba(226,232,240,0.4)]"
            >
              {label}
            </Link>
          ))}
          {PORTFOLIO_USERNAME && (
            <Link
              to={`https://github.com/${PORTFOLIO_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-all hover:drop-shadow-[0_0_6px_rgba(0,212,255,0.5)]"
            >
              <GitHubIcon />
            </Link>
          )}
          {PORTFOLIO_LINKEDIN_URL && (
            <Link
              to={PORTFOLIO_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-all hover:drop-shadow-[0_0_6px_rgba(0,212,255,0.5)]"
            >
              <LinkedInIcon />
            </Link>
          )}
        </nav>

        {/* Hamburger button (mobile) */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-6 bg-[var(--color-text)] transition-all" />
          <span className="block h-0.5 w-6 bg-[var(--color-text)] transition-all" />
          <span className="block h-0.5 w-6 bg-[var(--color-text)] transition-all" />
        </button>
      </div>

      {/* Mobile nav */}
      <nav
        id="mobile-nav"
        aria-label="mobile"
        hidden={!menuOpen}
        className="md:hidden backdrop-blur-md px-4 pb-4 flex flex-col gap-3"
      >
        {NAV_LINKS.map(({ label }) => (
          <Link
            key={label.toLowerCase()}
            to={{ pathname: "/", hash: `#${label.toLowerCase()}` }}
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-all hover:drop-shadow-[0_0_6px_rgba(226,232,240,0.4)]"
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
        {PORTFOLIO_USERNAME && (
          <Link
            to={`https://github.com/${PORTFOLIO_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-all hover:drop-shadow-[0_0_6px_rgba(0,212,255,0.5)]"
            onClick={() => setMenuOpen(false)}
          >
            GitHub
          </Link>
        )}
        {PORTFOLIO_LINKEDIN_URL && (
          <Link
            to={PORTFOLIO_LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-all hover:drop-shadow-[0_0_6px_rgba(0,212,255,0.5)]"
            onClick={() => setMenuOpen(false)}
          >
            LinkedIn
          </Link>
        )}
      </nav>
    </header>
  );
}
