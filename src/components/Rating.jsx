import StarFilled from "/star-filled.svg";
import Star from "/star.svg";

function Rating({ rate = 0 }) {
  return (
    <div className="Rating">
      {Array.from({ length: rate }).map((_, i) => (
        <img src={StarFilled} key={i} alt="étoile" />
      ))}
      {Array.from({ length: 5 - rate }).map((_, i) => (
        <img src={Star} key={i} alt="étoile" />
      ))}
    </div>
  );
}

export default Rating;
