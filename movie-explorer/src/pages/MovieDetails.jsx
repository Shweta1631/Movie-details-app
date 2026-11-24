import { Link, useParams } from "react-router-dom";
import { getMovie } from "../api/tmdb";
import Poster from "../components/Poster";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import Rating from "../components/Rating";

export default function MovieDetails() {
  const { id } = useParams();
  const { data: m, loading, error } = useFetch((s) => getMovie(id, s), [id]);

  if (loading) return <Loader label="Loading details..." />;
  if (error) return <ErrorMessage message={error} />;

  const trailer = m.videos?.results.find((v) => v.site === "YouTube" && v.type === "Trailer");
  const cast = m.credits?.cast.slice(0, 8) ?? [];
  const director = m.credits?.crew.find((c) => c.job === "Director");

  return (
    <main className="container details">
      <Link to="/" className="back">← Back</Link>
      <div className="details-grid">
        <Poster movie={m} className="poster" />
        <div>
          <h1>{m.title} <span className="muted">({m.release_date?.slice(0, 4)})</span></h1>
          {m.tagline && <p className="muted"><em>{m.tagline}</em></p>}
          <Rating value={m.vote_average} votes={m.vote_count} />
          <div className="chips">
            {m.genres.map((g) => <span key={g.id} className="chip static">{g.name}</span>)}
          </div>
          <p>{m.overview || "No overview available."}</p>
          <ul className="facts">
            <li><strong>Runtime:</strong> {m.runtime ? `${m.runtime} min` : "N/A"}</li>
            <li><strong>Year:</strong> {m.release_date || "N/A"}</li>
            {director && <li><strong>Director:</strong> {director.name}</li>}
            {cast.length > 0 && <li><strong>Cast:</strong> {cast.map((c) => c.name).join(", ")}</li>}
          </ul>
          {trailer && (
            <a className="btn" href={`https://www.youtube.com/watch?v=${trailer.key}`} target="_blank" rel="noreferrer">
              ▶ Watch Trailer
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
