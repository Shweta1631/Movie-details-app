// Generated poster: a gradient from the movie id, with the title on top.
export default function Poster({ movie, className = "" }) {
  const hue = (movie.id * 47) % 360;
  const style = {
    background: `linear-gradient(160deg, hsl(${hue} 60% 38%), hsl(${(hue + 50) % 360} 55% 16%))`,
  };
  return (
    <div className={`poster-art ${className}`} style={style} role="img" aria-label={`${movie.title} poster`}>
      <span>{movie.title}</span>
      <small>{movie.release_date?.slice(0, 4)}</small>
    </div>
  );
}
