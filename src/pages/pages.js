import { lazy } from "react";

const NotFound = lazy(() => import("./NotFound"));
const Accomodations = lazy(() => import("./Accomodations"));
const Accomodation = lazy(() => import("./Accomodation"));
const About = lazy(() => import("./About"));

export { NotFound, Accomodations, Accomodation, About };
