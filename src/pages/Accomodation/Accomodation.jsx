import { useEffect, useState } from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import { fetchData } from "../../utils/fetch";
import { Navigate, useParams } from "react-router";

function Accomodation() {
  const { id } = useParams();
  const [accomodation, setAccomodation] = useState([]);

  useEffect(() => {
    fetchData("/data/accomodations.json", "get").then((data) => {
      const acc = data.find((acc) => acc.id === id);

      if (acc) setAccomodation(acc);
      else Navigate("/404");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Carrousel list={accomodation.pictures} />
    </div>
  );
}

export default Accomodation;
