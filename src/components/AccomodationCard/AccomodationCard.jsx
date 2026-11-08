function AccomodationCard({ title, image }) {
  return (
    <div
      className="AccomodationCard"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <h2>{title}</h2>
    </div>
  );
}

export default AccomodationCard;
