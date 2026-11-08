import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router";
import { About, Accomodation, Accomodations, NotFound } from "./pages/pages";
import { MainLayout } from "./components/components";

function App() {
  return (
    <>
      <Suspense fallback={<>Je charge</>}>
        <Routes>
          <Route path="/" element={<Navigate to="/logements" />} />
          <Route path="/logements/">
            <Route
              index
              element={
                <MainLayout>
                  <Accomodations />
                </MainLayout>
              }
            />
            <Route
              path=":id"
              element={
                <MainLayout>
                  <Accomodation />
                </MainLayout>
              }
            />
          </Route>
          <Route
            path="a-propos"
            element={
              <MainLayout>
                <About />
              </MainLayout>
            }
          />
          <Route
            path="*"
            element={
              <MainLayout>
                <NotFound />
              </MainLayout>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
