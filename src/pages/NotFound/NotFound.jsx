import { Link } from "react-router";

function NotFound() {
  return (
    <div className="NotFound">
      <p className="NotFound__404">404</p>
      <h1 className="NotFound__title">
        Oups ! La page que vous demandez n'existe pas.
      </h1>
      <Link className="NotFound__redirect" to={"/logements"}>
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default NotFound;
