import MovieCard from "./MovieCard";

export default function MovieGrid({ movies }) {
  if (!movies.length) return <p className="center">No movies found.</p>;
  return (
    <div className="grid">
      {movies.map((m) => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </div>
  );
}
