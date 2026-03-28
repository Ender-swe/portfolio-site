import { useState } from "react";
import { GITHUB_USERNAME } from "~/load-context";

/** Anchor links for each page section. */
const NAV_LINKS = [
  { label: "Hero", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
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
    <header className="fixed top-0 inset-x-0 z-50 bg-[var(--color-bg)] border-b border-[var(--color-surface)]">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Site name */}
        <a
          href="#hero"
          className="font-bold text-lg text-[var(--color-accent)] tracking-wide"
        >
          Ender
        </a>

        {/* Desktop nav */}
        <nav aria-label="primary" className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
          >
            GitHub
          </a>
        </nav>

        {/* Hamburger button (mobile) */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
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
        className="md:hidden bg-[var(--color-surface)] px-4 pb-4 flex flex-col gap-3"
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}
