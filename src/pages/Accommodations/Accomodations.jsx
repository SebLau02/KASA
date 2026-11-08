import HomeBanner from "../../components/HomeBanner/HomeBanner";
import BannerImage from "/public/banner.png";

function Accomodations() {
  return (
    <div className="Accomodations">
      <HomeBanner url={BannerImage} title={"Chez vous, partout et ailleurs"} />
    </div>
  );
}

export default Accomodations;
