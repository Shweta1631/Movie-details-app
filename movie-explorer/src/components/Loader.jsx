export default function Loader({ label = "Loading..." }) {
  return (
    <div className="center" role="status" aria-live="polite">
      <div className="spinner" />
      <p>{label}</p>
    </div>
  );
}
