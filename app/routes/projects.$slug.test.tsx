/**
 * @copyright 2026 Eduardo Turcios. All rights reserved.
 * Unauthorized use, reproduction, or distribution of this file is strictly prohibited.
 */
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router';

// ---------------------------------------------------------------------------
// Mocks
// ---------------------------------------------------------------------------

/** Mock useLoaderData so the component can be tested in isolation. */
vi.mock('react-router', async (importOriginal) => {
  const actual = await importOriginal<typeof import('react-router')>();
  return {
    ...actual,
    useLoaderData: vi.fn(),
  };
});

import { useLoaderData } from 'react-router';
import { loader, ProjectDetail } from './projects.$slug';
import type { Route as SlugRoute } from './+types/projects.$slug';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Build a minimal Request for the loader. */
function makeRequest(slug: string) {
  return new Request(`http://localhost/projects/${slug}`);
}

/** Build the params object the loader receives. */
function makeParams(slug: string) {
  return { slug };
}

// ---------------------------------------------------------------------------
// Loader tests
// ---------------------------------------------------------------------------

describe('loader', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('returns markdown content when ABOUT.md is found (200)', async () => {
    const markdown = '# Hello\n\nSome content.';
    vi.mocked(fetch).mockResolvedValueOnce(new Response(markdown, { status: 200 }));

    const result = await loader({
      params: makeParams('heartbeat-detector'),
      request: makeRequest('heartbeat-detector'),
    } as unknown as SlugRoute.LoaderArgs);

    expect(result).toEqual({ content: markdown, slug: 'heartbeat-detector' });
  });

  it('throws a 404 Response when ABOUT.md is not found (404)', async () => {
    vi.mocked(fetch).mockResolvedValueOnce(new Response('Not Found', { status: 404 }));

    await expect(
      loader({
        params: makeParams('unknown-slug'),
        request: makeRequest('unknown-slug'),
      } as unknown as SlugRoute.LoaderArgs),
    ).rejects.toMatchObject({ status: 404 });
  });

  it('throws a 404 Response for any non-200 response', async () => {
    vi.mocked(fetch).mockResolvedValueOnce(new Response('Server Error', { status: 500 }));

    await expect(
      loader({
        params: makeParams('some-slug'),
        request: makeRequest('some-slug'),
      } as unknown as SlugRoute.LoaderArgs),
    ).rejects.toMatchObject({ status: 404 });
  });
});

// ---------------------------------------------------------------------------
// Component tests
// ---------------------------------------------------------------------------

describe('ProjectDetail', () => {
  it('renders a heading derived from the slug', () => {
    vi.mocked(useLoaderData).mockReturnValue({
      content: '## Features\n\n- Feature one\n- Feature two',
      slug: 'heartbeat-detector',
    });

    render(
      <MemoryRouter initialEntries={['/projects/heartbeat-detector']}>
        <Routes>
          <Route path='/projects/:slug' element={<ProjectDetail />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: /heartbeat.detector/i })).toBeInTheDocument();
  });

  it('renders markdown content', () => {
    vi.mocked(useLoaderData).mockReturnValue({
      content: '## Features\n\n- Feature one\n- Feature two',
      slug: 'heartbeat-detector',
    });

    render(
      <MemoryRouter initialEntries={['/projects/heartbeat-detector']}>
        <Routes>
          <Route path='/projects/:slug' element={<ProjectDetail />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText('Feature one')).toBeInTheDocument();
    expect(screen.getByText('Feature two')).toBeInTheDocument();
  });

  it('renders a back link to the home projects section', () => {
    vi.mocked(useLoaderData).mockReturnValue({
      content: '# Title',
      slug: 'heartbeat-detector',
    });

    render(
      <MemoryRouter initialEntries={['/projects/heartbeat-detector']}>
        <Routes>
          <Route path='/projects/:slug' element={<ProjectDetail />} />
        </Routes>
      </MemoryRouter>,
    );

    const backLink = screen.getByRole('link', { name: /back/i });
    expect(backLink).toBeInTheDocument();
    expect(backLink).toHaveAttribute('href', '/#projects');
  });
});
