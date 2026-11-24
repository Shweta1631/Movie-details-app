export default function Rating({ value = 0, votes }) {
  const stars = Math.round(value / 2); // 10-point scale -> 5 stars
  return (
    <span className="rating" title={`${value.toFixed(1)} / 10`}>
      <span className="stars" aria-hidden="true">
        {"★".repeat(stars)}
        {"☆".repeat(5 - stars)}
      </span>{" "}
      <strong>{value ? value.toFixed(1) : "N/A"}</strong>
      {votes != null && <small> ({votes.toLocaleString()} votes)</small>}
    </span>
  );
}
