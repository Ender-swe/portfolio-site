import { motion } from "framer-motion";
import { Link } from "react-router";
import { GITHUB_USERNAME } from "~/load-context";
import { projects } from "~/data/projects";
import type { Project } from "~/data/projects";
import { fadeUpVariants, staggerContainer } from "~/lib/animations";

// ---------------------------------------------------------------------------
// Sub-component: ProjectCard
// ---------------------------------------------------------------------------

/** Props for {@link ProjectCard}. */
interface ProjectCardProps {
  /** Project data to render. */
  project: Project;
}

/**
 * Card representing a single portfolio project.
 *
 * Renders the project name (linked to the detail page when `hasAbout` is
 * `true`), a short description, bullet-point highlights, tech-stack tags, and
 * a GitHub link.
 */
function ProjectCard({ project }: ProjectCardProps) {
  const { slug, name, description, bullets, tech, githubRepo, hasAbout } =
    project;

  const githubUrl = `https://github.com/${GITHUB_USERNAME}/${githubRepo}`;

  return (
    <article className="flex flex-col gap-4 rounded-lg border border-[var(--color-surface)] bg-[var(--color-surface)] p-6 hover:border-[var(--color-accent)] transition-colors">
      {/* Project name — link to detail page only when hasAbout is true */}
      {hasAbout ? (
        <Link
          to={`/projects/${slug}`}
          className="text-xl font-semibold text-[var(--color-text)] hover:text-[var(--color-accent)] transition-all hover:drop-shadow-[0_0_6px_rgba(0,212,255,0.4)]"
        >
          {name}
        </Link>
      ) : (
        <h3 className="text-xl font-semibold text-[var(--color-text)]">
          {name}
        </h3>
      )}

      {/* Description */}
      <p className="text-sm text-[var(--color-muted)] leading-relaxed">
        {description}
      </p>

      {/* Bullet points */}
      <ul className="flex flex-col gap-1.5 pl-4 list-disc marker:text-[var(--color-accent)]">
        {bullets.map((bullet) => (
          <li
            key={bullet}
            className="text-sm text-[var(--color-muted)] leading-relaxed"
          >
            {bullet}
          </li>
        ))}
      </ul>

      {/* Tech-stack tags */}
      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {tech.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded text-xs font-medium border border-[var(--color-accent)] text-[var(--color-accent)]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* GitHub link */}
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${name} on GitHub`}
        className="inline-flex items-center gap-1.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-all hover:drop-shadow-[0_0_6px_rgba(0,212,255,0.4)] w-fit"
      >
        GitHub →
      </a>
    </article>
  );
}

// ---------------------------------------------------------------------------
// Section: Projects
// ---------------------------------------------------------------------------

/**
 * Projects section component.
 *
 * Renders all portfolio projects as a responsive grid of {@link ProjectCard}
 * elements. The section is anchored at `#projects` for in-page navigation.
 *
 * @example
 * ```tsx
 * <Projects />
 * ```
 */
export function Projects() {
  return (
    <section id="projects" className="px-4 py-20">
      <motion.div
        className="max-w-5xl mx-auto flex flex-col gap-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.h2
          variants={fadeUpVariants}
          className="text-3xl sm:text-4xl font-bold text-[var(--color-text)]"
        >
          Projects
        </motion.h2>

        {/* Card grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <motion.div key={project.slug} variants={fadeUpVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
