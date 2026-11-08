import { useState } from "react";
import Chevron from "/public/chevron.png";

function Carrousel({ list = [] }) {
  const [current, setCurrent] = useState(0);

  return (
    <div className="Carrousel">
      {list.length > 1 && (
        <>
          <button
            name="prev"
            onClick={() =>
              current === 0
                ? setCurrent(list.length - 1)
                : setCurrent(current - 1)
            }
          >
            <img src={Chevron} alt="Précédent" />
          </button>
          <button
            name="next"
            onClick={() =>
              current === list.length - 1
                ? setCurrent(0)
                : setCurrent(current + 1)
            }
          >
            <img
              src={Chevron}
              alt="Suivant"
              style={{
                rotate: "180deg",
              }}
            />
          </button>
          <p className="Carrousel__count">
            {current + 1} / {list.length}
          </p>
        </>
      )}

      <img src={list[current]} alt="Illustration" />
    </div>
  );
}

export default Carrousel;
