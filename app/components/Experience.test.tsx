/**
 * @copyright 2026 Eduardo Turcios. All rights reserved.
 * Unauthorized use, reproduction, or distribution of this file is strictly prohibited.
 */
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { experience } from '~/data/experience';
import { Experience } from './Experience';

describe('Experience', () => {
  it("renders the section with id='experience'", () => {
    render(<Experience />);
    expect(document.getElementById('experience')).toBeInTheDocument();
  });

  it('renders a level-2 heading for the section', () => {
    render(<Experience />);
    expect(screen.getByRole('heading', { name: /experience/i, level: 2 })).toBeInTheDocument();
  });

  it('renders an entry for every experience item', () => {
    render(<Experience />);
    for (const entry of experience) {
      expect(screen.getByText(entry.organisation)).toBeInTheDocument();
    }
  });

  it('renders the role for each entry', () => {
    render(<Experience />);
    for (const entry of experience) {
      expect(screen.getByText(entry.role)).toBeInTheDocument();
    }
  });

  it('renders the location for each entry', () => {
    render(<Experience />);
    for (const entry of experience) {
      expect(screen.getByText(entry.location)).toBeInTheDocument();
    }
  });

  it('renders the date range for each entry', () => {
    render(<Experience />);
    for (const entry of experience) {
      expect(screen.getByText(`${entry.startDate} – ${entry.endDate}`)).toBeInTheDocument();
    }
  });

  it('renders all bullet points for each entry', () => {
    render(<Experience />);
    for (const entry of experience) {
      for (const bullet of entry.bullets) {
        expect(screen.getByText(bullet)).toBeInTheDocument();
      }
    }
  });
});
