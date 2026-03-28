import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { education } from "~/data/education";
import { Education } from "./Education";

describe("Education", () => {
  it("renders the section with id='education'", () => {
    render(<Education />);
    expect(document.getElementById("education")).toBeInTheDocument();
  });

  it("renders a level-2 heading for the section", () => {
    render(<Education />);
    expect(
      screen.getByRole("heading", { name: /education/i, level: 2 })
    ).toBeInTheDocument();
  });

  it("renders an entry for every education item", () => {
    render(<Education />);
    for (const entry of education) {
      expect(screen.getByText(entry.institution)).toBeInTheDocument();
    }
  });

  it("renders the degree and field for each entry", () => {
    render(<Education />);
    for (const entry of education) {
      expect(
        screen.getByText(`${entry.degree} — ${entry.field}`)
      ).toBeInTheDocument();
    }
  });

  it("renders the graduation date for each entry", () => {
    render(<Education />);
    for (const entry of education) {
      expect(screen.getByText(entry.graduationDate)).toBeInTheDocument();
    }
  });
});
