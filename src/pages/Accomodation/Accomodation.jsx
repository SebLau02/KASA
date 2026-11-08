import { useEffect, useState } from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import { fetchData } from "../../utils/fetch";
import { Navigate, useParams } from "react-router";
import { Rating } from "../../components/components";
import Collapse from "../../components/Collapse/Collapse";

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

      <div className="Accomodation-page__main">
        <div className="Accomodation-page__title-tags">
          <div className="Accomodation-page__title-tags__title">
            <h1>{accomodation.title}</h1>
            <p>{accomodation.location}</p>
          </div>
          <div className="Accomodation-page__title-tags__tags">
            {accomodation.tags?.map((tag, index) => (
              <span
                key={index}
                className="Accomodation-page__title-tags__tags__tag"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="Accomodation-page__rating-host">
          <div className="Accomodation-page__rating-host__host">
            <p>{accomodation.host?.name}</p>

            {accomodation.host?.picture ? (
              <img
                src={accomodation.host?.picture}
                alt={accomodation.host?.name}
              />
            ) : (
              <p className="Accomodation-page__rating-host__host__initials">
                {firstLetter}
                {secondLetter}
              </p>
            )}
          </div>
          <Rating rate={parseInt(accomodation.rating)} />
        </div>
      </div>

      <div className="Accomodation-page__collapse">
        <Collapse
          label={"Description"}
          content={accomodation.description}
          style={{
            width: "582px",
          }}
        />
        <Collapse
          label={"Description"}
          content={accomodation.description}
          style={{
            width: "582px",
          }}
        />
      </div>
    </div>
  );
}

export default Accomodation;
