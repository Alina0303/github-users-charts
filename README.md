# GitHub Users Search

A modern React + TypeScript app for searching GitHub user profiles and visualizing repository statistics. Built with Vite, Tailwind CSS, Apollo Client, and GraphQL.

## Live Demo

Check out the live application: [https://github-users-charts.netlify.app/](https://github-users-charts.netlify.app/)

## Features

- Search GitHub users by username
- Display user profile details, repositories, and stats
- Interactive charts for popular repositories, languages, and forks
- Loading states and responsive UI components
- Toast notifications for user feedback

## Tech stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Apollo Client
- GraphQL
- Recharts
- Radix UI
- ESLint
- PostCSS

## Project structure

- `src/`
  - `App.tsx` — main application component
  - `main.tsx` — app entry point
  - `apolloClient.ts` — Apollo Client setup
  - `queries.ts` — GraphQL queries
  - `types.ts` — TypeScript type definitions
  - `utils.ts` — helper utilities
  - `components/` — UI and feature components
    - `user/` — user profile, stats, loading state
    - `charts/` — data visualization components
    - `form/` — search form
    - `ui/` — design system primitives
