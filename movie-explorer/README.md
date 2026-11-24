# 🎬 Movie Explorer

React + Vite app to search and browse movies. Uses a built-in dataset behind an API-style module (`src/api/tmdb.js`), so it needs **no API key**. To use a real API (e.g. TMDB), reimplement the 4 functions in that file.

## Features
Search (debounced) · Movie details · Ratings · Genre filters · Sorting · Pagination · Responsive layout · Loading indicators · Error handling · Routing (React Router)

## Setup
```bash
npm install
npm run dev
```

## Deploy (Vercel / Netlify)
Import the GitHub repo (no env vars needed), build command `npm run build`, output `dist`.

## Project structure
`src/api` (TMDB calls) · `src/hooks` (useFetch, useDebounce) · `src/components` (reusable UI) · `src/pages` (routes)

## AI-Assisted Activity
Document here: components generated with AI, how you refactored them for reusability (e.g. extracting `Rating`, `GenreFilter`, `useFetch`), and a state bug AI helped you fix.
