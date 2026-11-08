import StarFilled from "/public/star-filled.svg";
import Star from "/public/star.svg";

function Rating({ rate = 0 }) {
  return (
    <div className="Rating">
      {Array.from({ length: rate }).map((_, i) => (
        <img src={StarFilled} key={i} />
      ))}
      {Array.from({ length: 5 - rate }).map((_, i) => (
        <img src={Star} key={i} />
      ))}
    </div>
  );
}

export default Rating;
