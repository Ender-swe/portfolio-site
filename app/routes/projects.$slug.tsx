/**
 * @copyright 2026 Eduardo Turcios. All rights reserved.
 * Unauthorized use, reproduction, or distribution of this file is strictly prohibited.
 */
/**
 * Project detail page.
 *
 * Fetches and renders the `ABOUT.md` file from the project's GitHub repository
 * at build time (SSG / pre-render). Returns a 404 when no `ABOUT.md` exists.
 *
 * Route: `/projects/:slug`
 *
 * @module routes/projects.$slug
 */

import { Link, useLoaderData } from 'react-router';
import Markdown from 'react-markdown';
import type { Route } from './+types/projects.$slug';
import { GITHUB_USERNAME } from '~/load-context';

// ---------------------------------------------------------------------------
// Loader
// ---------------------------------------------------------------------------

/** Shape of the data returned by {@link loader}. */
export interface ProjectDetailLoaderData {
  /** Raw markdown string from the project's ABOUT.md. */
  content: string;
  /** URL slug identifying the project. */
  slug: string;
}

/**
 * Loader for the project detail page.
 *
 * Fetches `ABOUT.md` from the GitHub raw-content CDN. Throws a 404 Response
 * when the file is absent or the upstream request fails.
 *
 * @param params - Route params containing `slug`.
 * @throws {Response} 404 when ABOUT.md cannot be found.
 */
export async function loader({ params }: Route.LoaderArgs): Promise<ProjectDetailLoaderData> {
  const { slug } = params;
  const url = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${slug}/main/ABOUT.md`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Response(null, { status: 404 });
  }

  const content = await response.text();
  return { content, slug };
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Converts a URL slug into a human-readable title.
 *
 * Replaces hyphens with spaces and title-cases each word.
 *
 * @param slug - URL-safe slug (e.g. `"heartbeat-detector"`).
 * @returns Human-readable title (e.g. `"Heartbeat Detector"`).
 */
function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Project detail page component.
 *
 * Renders the project title derived from the slug, the full ABOUT.md content
 * as formatted markdown, and a back link to the home page projects section.
 *
 * @example
 * ```tsx
 * // Rendered automatically by React Router at /projects/:slug
 * <ProjectDetail />
 * ```
 */
export function ProjectDetail() {
  const { content, slug } = useLoaderData<ProjectDetailLoaderData>();
  const title = slugToTitle(slug);

  return (
    <main className='mx-auto max-w-3xl px-4 py-24'>
      {/* Back navigation */}
      <Link
        to='/#projects'
        className='mb-10 inline-flex items-center gap-1.5 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]'
      >
        ← Back to Projects
      </Link>

      {/* Project title */}
      <h1 className='mb-8 text-3xl font-bold text-[var(--color-text)] sm:text-4xl'>{title}</h1>

      {/* Markdown body */}
      <div className='prose prose-invert max-w-none leading-relaxed text-[var(--color-muted)] [&_a]:text-[var(--color-accent)] [&_a]:underline [&_code]:text-[var(--color-accent)] [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-[var(--color-text)] [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-[var(--color-text)] [&_li]:mb-1 [&_pre]:overflow-x-auto [&_pre]:rounded [&_pre]:bg-[var(--color-surface)] [&_pre]:p-4 [&_ul]:list-disc [&_ul]:pl-4 [&_ul]:marker:text-[var(--color-accent)]'>
        <Markdown>{content}</Markdown>
      </div>
    </main>
  );
}

export default ProjectDetail;
