import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import {
  GITHUB_USERNAME,
  PORTFOLIO_NAME,
  PORTFOLIO_LINKEDIN_URL,
} from "~/load-context";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders the section with id='hero'", () => {
    render(<Hero />);
    expect(document.getElementById("hero")).toBeInTheDocument();
  });

  it("renders the name from PORTFOLIO_NAME env var", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", { level: 1 });
    const expectedName = PORTFOLIO_NAME || "Your Name";
    expect(heading).toHaveTextContent(expectedName);
  });

  it("renders the short bio", () => {
    render(<Hero />);
    const bio = screen.getByText(/computer science student/i);
    expect(bio).toBeInTheDocument();
    expect(bio.textContent).toMatch(/usmc veteran/i);
    expect(bio.textContent).toMatch(/software developer/i);
  });

  it("renders a GitHub link when GITHUB_USERNAME is set", () => {
    if (!GITHUB_USERNAME) return;
    render(<Hero />);
    const link = screen.getByRole("link", { name: /github/i });
    expect(link).toHaveAttribute("href", `https://github.com/${GITHUB_USERNAME}`);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders a LinkedIn link when PORTFOLIO_LINKEDIN_URL is set", () => {
    if (!PORTFOLIO_LINKEDIN_URL) return;
    render(<Hero />);
    const link = screen.getByRole("link", { name: /linkedin/i });
    expect(link).toHaveAttribute("href", PORTFOLIO_LINKEDIN_URL);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("does not render GitHub link when GITHUB_USERNAME is empty", () => {
    if (GITHUB_USERNAME) return;
    render(<Hero />);
    expect(screen.queryByRole("link", { name: /github/i })).not.toBeInTheDocument();
  });

  it("does not render LinkedIn link when PORTFOLIO_LINKEDIN_URL is empty", () => {
    if (PORTFOLIO_LINKEDIN_URL) return;
    render(<Hero />);
    expect(screen.queryByRole("link", { name: /linkedin/i })).not.toBeInTheDocument();
  });
});
