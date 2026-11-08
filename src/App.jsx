import { Suspense } from "react";
import { Routes, Route } from "react-router";
import { NotFound } from "./pages/pages";
import { MainLayout } from "./components/components";

function App() {
  return (
    <>
      <Suspense fallback={<>Je charge</>}>
        <Routes>
          <Route path="/employees/">
            {/* <Route index element={<EmployeesList />} />
              <Route path="create" element={<CreateEmployee />} /> */}
          </Route>
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
