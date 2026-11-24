export default function Pagination({ page, totalPages, onChange }) {
  const max = Math.min(totalPages, 500); // TMDB caps at 500 pages
  if (max <= 1) return null;
  return (
    <div className="pagination">
      <button disabled={page <= 1} onClick={() => onChange(page - 1)}>← Prev</button>
      <span>Page {page} of {max}</span>
      <button disabled={page >= max} onClick={() => onChange(page + 1)}>Next →</button>
    </div>
  );
}
