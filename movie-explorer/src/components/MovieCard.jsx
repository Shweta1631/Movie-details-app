import { Link } from "react-router-dom";
import Poster from "./Poster";
import Rating from "./Rating";

export default function MovieCard({ movie }) {
  const year = movie.release_date?.slice(0, 4) || "—";
  return (
    <Link to={`/movie/${movie.id}`} className="card">
      <Poster movie={movie} />
      <div className="card-body">
        <h3>{movie.title}</h3>
        <p className="muted">{year}</p>
        <Rating value={movie.vote_average} />
      </div>
    </Link>
  );
}
