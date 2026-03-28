/**
 * Static project data for the portfolio.
 *
 * Each entry describes one portfolio project. Set `hasAbout` to `true` once a
 * corresponding `/projects/:slug` detail route exists; while `false` the card
 * renders without a detail-page link.
 *
 * @module data/projects
 */

/** A single portfolio project. */
export interface Project {
  /** URL-safe identifier used as the route param for the detail page. */
  slug: string;
  /** Display name shown as the card heading. */
  name: string;
  /** One-sentence summary of the project. */
  description: string;
  /** Short bullet points highlighting key features or contributions. */
  bullets: string[];
  /** Technologies / languages / frameworks used. */
  tech: string[];
  /** GitHub repository name (appended to the owner's GitHub URL). */
  githubRepo: string;
  /**
   * Whether a `/projects/:slug` detail page exists for this project.
   * When `false` the card title is not a navigable link.
   */
  hasAbout: boolean;
}

/** All portfolio projects, ordered for display on the home page. */
export const projects: Project[] = [
  {
    slug: "heartbeat-detector",
    name: "Heartbeat Detector",
    description:
      "Distributed health-monitoring service that tracks node liveness over gRPC.",
    bullets: [
      "Concurrent health checks via Go goroutines and channels",
      "Service contracts defined with Protocol Buffers",
      "Streaming gRPC for low-latency status propagation",
    ],
    tech: ["Go", "gRPC", "Protocol Buffers", "goroutines"],
    githubRepo: "heartbeat-detector",
    hasAbout: false,
  },
  {
    slug: "uber-dapp",
    name: "Uber Dapp",
    description:
      "Decentralized ride-sharing application running on the Ethereum blockchain.",
    bullets: [
      "Solidity smart contracts manage ride lifecycle on-chain",
      "Real-time driver/rider location sync with Socket.IO",
      "Firebase authentication and off-chain user profiles",
    ],
    tech: ["React.js", "ChakraUI", "Express", "Sequelize", "Firebase", "Solidity", "Socket.IO"],
    githubRepo: "uber-dapp",
    hasAbout: false,
  },
  {
    slug: "grace-shopper-lime",
    name: "Grace Shopper Lime",
    description:
      "Full-stack e-commerce platform with cart management and payment processing.",
    bullets: [
      "JWT-based authentication and role-based authorization",
      "PayPal API integration for secure checkout",
      "Persistent cart backed by Sequelize ORM",
    ],
    tech: ["React", "Material UI", "Express.js", "Node.js", "Sequelize", "JWT", "PayPal API"],
    githubRepo: "grace-shopper-lime",
    hasAbout: false,
  },
  {
    slug: "easy-go-list",
    name: "Easy Go List",
    description:
      "Collaborative task-management app with real-time updates across clients.",
    bullets: [
      "Firebase real-time database for live list synchronization",
      "REST API built with Express.js and Sequelize",
      "Responsive interface styled with Chakra UI",
    ],
    tech: ["React", "Express.js", "Node.js", "Sequelize", "Chakra UI", "Firebase"],
    githubRepo: "easy-go-list",
    hasAbout: false,
  },
];
