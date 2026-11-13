function Loader() {
  return (
    <div className="Loader" role="status" aria-live="polite">
      <div className="Loader__spinner" />
      <span className="Loader__label">Chargement…</span>
    </div>
  );
}

export default Loader;
