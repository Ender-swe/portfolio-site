import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router";
import { GITHUB_USERNAME } from "~/load-context";
import { projects } from "~/data/projects";
import { Projects } from "./Projects";

/** Wrap with MemoryRouter because Projects uses react-router <Link>. */
function renderProjects() {
  return render(
    <MemoryRouter>
      <Projects />
    </MemoryRouter>,
  );
}

describe("Projects", () => {
  it("renders the section with id='projects'", () => {
    renderProjects();
    expect(document.getElementById("projects")).toBeInTheDocument();
  });

  it("renders a heading for the section", () => {
    renderProjects();
    expect(
      screen.getByRole("heading", { name: /projects/i, level: 2 }),
    ).toBeInTheDocument();
  });

  it("renders a card for every project", () => {
    renderProjects();
    for (const project of projects) {
      expect(screen.getByText(project.name)).toBeInTheDocument();
    }
  });

  it("renders all bullet points for each project", () => {
    renderProjects();
    for (const project of projects) {
      for (const bullet of project.bullets) {
        expect(screen.getByText(bullet)).toBeInTheDocument();
      }
    }
  });

  it("renders a GitHub link for each project", () => {
    renderProjects();
    for (const project of projects) {
      const expectedHref = `https://github.com/${GITHUB_USERNAME}/${project.githubRepo}`;
      // Find the GitHub anchor whose href matches
      const links = screen
        .getAllByRole("link")
        .filter((el) => el.getAttribute("href") === expectedHref);
      expect(links.length).toBeGreaterThan(0);
    }
  });

  it("GitHub links open in a new tab with noopener noreferrer", () => {
    renderProjects();
    for (const project of projects) {
      const expectedHref = `https://github.com/${GITHUB_USERNAME}/${project.githubRepo}`;
      const link = screen
        .getAllByRole("link")
        .find((el) => el.getAttribute("href") === expectedHref);
      expect(link).toBeDefined();
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });

  it("project name links to /projects/:slug when hasAbout is true", () => {
    const hasAboutProject = projects.find((p) => p.hasAbout);
    if (!hasAboutProject) return; // All placeholders — skip until hasAbout is used
    renderProjects();
    const nameLink = screen
      .getAllByRole("link")
      .find(
        (el) => el.getAttribute("href") === `/projects/${hasAboutProject.slug}`,
      );
    expect(nameLink).toBeDefined();
    expect(nameLink).toHaveTextContent(hasAboutProject.name);
  });

  it("project name is NOT a detail-page link when hasAbout is false", () => {
    renderProjects();
    for (const project of projects.filter((p) => !p.hasAbout)) {
      const detailLink = screen
        .queryAllByRole("link")
        .find((el) => el.getAttribute("href") === `/projects/${project.slug}`);
      expect(detailLink).toBeUndefined();
    }
  });

  it("renders tech tags for each project", () => {
    renderProjects();
    // Spot-check a tech tag per project (each tech string appears at least once)
    for (const project of projects) {
      const firstTech = project.tech[0];
      expect(screen.getAllByText(firstTech).length).toBeGreaterThan(0);
    }
  });
});
