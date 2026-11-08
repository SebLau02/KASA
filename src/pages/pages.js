import { lazy } from "react";

const NotFound = lazy(() => import("./NotFound/NotFound"));
const Accomodations = lazy(() => import("./Accommodations/Accomodations"));
const Accomodation = lazy(() => import("./Accomodation/Accomodation"));
const About = lazy(() => import("./About/About"));

export { NotFound, Accomodations, Accomodation, About };
