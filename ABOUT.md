## Overview

A full-stack personal portfolio site built with React Router 7 and server-side rendering. The site statically pre-renders at build time and is served via a lightweight Express adapter, making it fast to load with no client-side data fetching on first paint.

## Features

- Server-side rendering (SSR) with static pre-rendering via React Router 7
- Per-project detail pages that fetch and render `ABOUT.md` from each project's GitHub repository at build time
- Responsive navigation bar with smooth-scroll anchor links and a mobile hamburger menu
- Custom Tailwind CSS 4 design system with dark-mode color tokens
- Custom Gravity font family loaded via `@font-face`
- Environment-driven personal info (name, email, LinkedIn, GitHub username)
- Full TypeScript coverage with generated route types

## Tech Stack

- **React 19** — UI component model
- **React Router 7** — file-based routing, SSR, and static pre-rendering
- **TypeScript** — end-to-end type safety including generated route param types
- **Tailwind CSS 4** — utility-first styling with CSS custom property design tokens
- **Vite** — dev server with HMR and production bundling
- **Vitest + Testing Library** — component and loader unit tests
- **Docker** — multi-stage build served on port 3000 via `@react-router/serve`
