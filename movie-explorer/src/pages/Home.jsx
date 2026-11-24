import { useEffect, useState } from "react";
import { discoverMovies, getGenres, searchMovies } from "../api/tmdb";
import useFetch from "../hooks/useFetch";
import useDebounce from "../hooks/useDebounce";
import SearchBar from "../components/SearchBar";
import GenreFilter from "../components/GenreFilter";
import MovieGrid from "../components/MovieGrid";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const SORTS = [
  { value: "popularity.desc", label: "Most Popular" },
  { value: "vote_average.desc", label: "Top Rated" },
  { value: "primary_release_date.desc", label: "Newest" },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("");
  const [sort, setSort] = useState("popularity.desc");
  const [page, setPage] = useState(1);
  const [retry, setRetry] = useState(0);
  const debouncedQuery = useDebounce(query.trim());

  // Reset to page 1 whenever filters change
  useEffect(() => setPage(1), [debouncedQuery, genre, sort]);

  const genres = useFetch((signal) => getGenres(signal), []);

  const movies = useFetch(
    (signal) =>
      debouncedQuery
        ? searchMovies(debouncedQuery, page, signal)
        : discoverMovies({ genre, sort, page }, signal),
    [debouncedQuery, genre, sort, page, retry]
  );

  // TMDB search has no genre param, so filter search results client-side
  let results = movies.data?.results ?? [];
  if (debouncedQuery && genre) {
    results = results.filter((m) => m.genre_ids?.includes(Number(genre)));
  }

  return (
    <main className="container">
      <div className="toolbar">
        <SearchBar value={query} onChange={setQuery} />
        <select value={sort} onChange={(e) => setSort(e.target.value)} disabled={!!debouncedQuery} aria-label="Sort movies">
          {SORTS.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
        </select>
      </div>

      {genres.data && (
        <GenreFilter genres={genres.data.genres} selected={genre} onSelect={setGenre} />
      )}

      {movies.loading && <Loader label="Fetching movies..." />}
      {movies.error && <ErrorMessage message={movies.error} onRetry={() => setRetry((r) => r + 1)} />}
      {!movies.loading && !movies.error && (
        <>
          <MovieGrid movies={results} />
          <Pagination page={page} totalPages={movies.data?.total_pages ?? 1} onChange={setPage} />
        </>
      )}
    </main>
  );
}
