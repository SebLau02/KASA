import { useEffect, useState } from "react";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
const BannerImage = "/banner.png";
import { fetchData } from "../../utils/fetch";
import AccomodationCard from "../../components/AccomodationCard/AccomodationCard";
import { Link } from "react-router";

function Accomodations() {
  const [accomodations, setAccomodations] = useState([]);

  useEffect(() => {
    fetchData("/data/accomodations.json", "get").then((data) => {
      setAccomodations(data);
    });
  }, []);

  return (
    <div className="Accomodations">
      <HomeBanner url={BannerImage} title={"Chez vous, partout et ailleurs"} />

      <div className="AccomodationGrid">
        {accomodations.map((acc) => (
          <Link to={`${acc.id}`} key={acc.id}>
            <AccomodationCard title={acc.title} image={acc.cover} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Accomodations;
