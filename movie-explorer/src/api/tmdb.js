// Local "API": works with no key and no internet. Same function names as a real
// API client, so you can swap in TMDB/OMDb later by changing only this file.
import { MOVIES, GENRES } from "../data/movies";

const DELAY = 500; // simulated network latency so loading indicators are visible
const PAGE_SIZE = 12;

export const img = () => null; // posters are generated in <Poster />

function respond(value, signal) {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => resolve(value), DELAY);
    signal?.addEventListener("abort", () => {
      clearTimeout(t);
      reject(new DOMException("Aborted", "AbortError"));
    });
  });
}

function paginate(list, page) {
  const total_pages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  return { results: list.slice(start, start + PAGE_SIZE), page, total_pages };
}

export const getGenres = (signal) => respond({ genres: GENRES }, signal);

export const searchMovies = (query, page = 1, signal) => {
  const q = query.toLowerCase();
  const list = MOVIES.filter(
    (m) =>
      m.title.toLowerCase().includes(q) ||
      m.credits.cast.some((c) => c.name.toLowerCase().includes(q)) ||
      m.credits.crew.some((c) => c.name.toLowerCase().includes(q))
  );
  return respond(paginate(list, page), signal);
};

export const discoverMovies = ({ genre, sort, page = 1 }, signal) => {
  let list = genre ? MOVIES.filter((m) => m.genre_ids.includes(Number(genre))) : [...MOVIES];
  const key = {
    "popularity.desc": (a, b) => b.vote_count - a.vote_count,
    "vote_average.desc": (a, b) => b.vote_average - a.vote_average,
    "primary_release_date.desc": (a, b) => b.release_date.localeCompare(a.release_date),
  }[sort];
  if (key) list.sort(key);
  return respond(paginate(list, page), signal);
};

export const getMovie = (id, signal) => {
  const movie = MOVIES.find((m) => String(m.id) === String(id));
  if (!movie) return new Promise((_, reject) => setTimeout(() => reject(new Error("Movie not found.")), DELAY));
  return respond(movie, signal);
};
