import { Link } from "react-router";
import MainLogo from "/MainLogo.svg";

function TopBar() {
  return (
    <div className="TopBar">
      <img src={MainLogo} alt="Kasa logo" />

      <Link to="/logements">Accueil</Link>
      <Link to="/a-propos">À propos</Link>
    </div>
  );
}

export default TopBar;
