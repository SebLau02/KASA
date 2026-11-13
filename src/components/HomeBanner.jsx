function HomeBanner({ url, title, overlay = true }) {
  return (
    <div
      className={`HomeBanner ${overlay ? "overlay" : ""}`}
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <h1>{title}</h1>
    </div>
  );
}

export default HomeBanner;
