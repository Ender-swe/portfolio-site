/**
 * Augments the React Router `AppLoadContext` interface to include
 * server-side environment values injected via `getLoadContext`.
 *
 * @module load-context
 */

declare module "react-router" {
  /**
   * Values available to every server loader and action via the
   * `context` argument.
   */
  interface AppLoadContext {
    /** GitHub username read from the `GITHUB_USERNAME` environment variable. */
    githubUsername: string;
  }
}

/**
 * Builds the load context object from the current process environment.
 *
 * This function is called once per request by the server (both the Vite
 * dev server and the custom production server) and its return value is
 * forwarded to every loader / action as the `context` argument.
 *
 * @returns The populated {@link AppLoadContext}.
 */
export function getLoadContext() {
  return {
    githubUsername: process.env.GITHUB_USERNAME ?? "",
  };
}
