function HomeBanner({ url, title }) {
  return (
    <div
      className="HomeBanner"
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <h1>{title}</h1>
    </div>
  );
}

export default HomeBanner;
