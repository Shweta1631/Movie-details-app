export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="search"
      type="search"
      placeholder="Search movies..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Search movies"
    />
  );
}
