/**
 * Custom Express production server.
 *
 * Replaces `@react-router/serve` so that `getLoadContext` can inject
 * server-side environment values (e.g. `GITHUB_USERNAME`) into every
 * React Router loader and action via the `context` argument.
 *
 * Build output must already exist (`npm run build`) before starting.
 *
 * @module server
 */

import { createRequestHandler } from "@react-router/express";
import express from "express";
import { getLoadContext } from "./app/load-context";

const BUILD_PATH = "./build/server/index.js";
const PORT = Number(process.env.PORT ?? 3000);

const app = express();

/** Serve the client-side assets produced by `npm run build`. */
app.use(express.static("build/client"));

app.use(
  createRequestHandler({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    build: () => import(BUILD_PATH) as any,
    getLoadContext,
  })
);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
