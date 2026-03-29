import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { GITHUB_USERNAME } from "~/load-context";
import { NavBar } from "./NavBar";

describe("NavBar", () => {
  it("renders the site name", () => {
    render(<NavBar />);
    expect(screen.getByText("Ender")).toBeInTheDocument();
  });

  it("renders a GitHub profile link using GITHUB_USERNAME from env", () => {
    render(<NavBar />);
    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toHaveAttribute(
      "href",
      `https://github.com/${GITHUB_USERNAME}`,
    );
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders all section anchor links", () => {
    render(<NavBar />);
    const expectedAnchors = [
      { label: "Hero", href: "#hero" },
      { label: "Projects", href: "#projects" },
      { label: "Education", href: "#education" },
      { label: "Experience", href: "#experience" },
    ];
    for (const { label, href } of expectedAnchors) {
      const link = screen.getByRole("link", { name: label });
      expect(link).toHaveAttribute("href", href);
    }
  });

  it("hamburger button toggles mobile menu visibility", () => {
    render(<NavBar />);
    const toggle = screen.getByRole("button", { name: /toggle navigation/i });

    // When hidden, aria-label name is not computed — query by id instead
    const mobileNav = document.getElementById("mobile-nav")!;
    expect(mobileNav).not.toBeVisible();

    fireEvent.click(toggle);
    expect(mobileNav).toBeVisible();

    fireEvent.click(toggle);
    expect(mobileNav).not.toBeVisible();
  });

  it("mobile menu contains all section links", () => {
    render(<NavBar />);
    const toggle = screen.getByRole("button", { name: /toggle navigation/i });
    fireEvent.click(toggle);

    const mobileNav = screen.getByRole("navigation", { name: /mobile/i });
    const hrefs = Array.from(mobileNav.querySelectorAll("a")).map((a) =>
      a.getAttribute("href"),
    );
    expect(hrefs).toContain("#hero");
    expect(hrefs).toContain("#projects");
    expect(hrefs).toContain("#education");
    expect(hrefs).toContain("#experience");
  });
});
