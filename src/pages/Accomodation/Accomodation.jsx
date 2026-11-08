import { useEffect, useState } from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import { fetchData } from "../../utils/fetch";
import { Navigate, useParams } from "react-router";
import { Rating } from "../../components/components";

function Accomodation() {
  const { id } = useParams();
  const [accomodation, setAccomodation] = useState([]);

  console.log(accomodation);

  const { name } = accomodation.host || {};
  const firstLetter = name?.split(" ")[0].slice(0, 1);
  const secondLetter = name?.split(" ")[1].slice(0, 1);

  useEffect(() => {
    fetchData("/data/accomodations.json", "get").then((data) => {
      const acc = data.find((acc) => acc.id === id);

      if (acc) setAccomodation(acc);
      else Navigate("/404");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Accomodation-page">
      <Carrousel list={accomodation.pictures} />

      <div className="Accomodation-page__title-host">
        <div className="Accomodation-page__title-host__title">
          <h1>{accomodation.title}</h1>
          <p>{accomodation.location}</p>
        </div>
        <div className="Accomodation-page__title-host__host">
          <p>{accomodation.host?.name}</p>

          {accomodation.host?.picture ? (
            <img
              src={accomodation.host?.picture}
              alt={accomodation.host?.name}
            />
          ) : (
            <p className="Accomodation-page__title-host__host__initials">
              {firstLetter}
              {secondLetter}
            </p>
          )}
        </div>
      </div>

      <div className="Accomodation-page__tags-rating">
        <div className="Accomodation-page__tags-rating__tags">
          {accomodation.tags?.map((tag, index) => (
            <span
              key={index}
              className="Accomodation-page__tags-rating__tags__tag"
            >
              {tag}
            </span>
          ))}
        </div>
        <Rating rate={parseInt(accomodation.rating)} />
      </div>
    </div>
  );
}

export default Accomodation;
