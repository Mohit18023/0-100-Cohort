import "./App.css";
import { Suspense } from "react";
import { lazy } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// const Home = React.lazy(() => import('./Home'));
import Home from "./Home";
// Import About and NotFound using React.lazy
const About = lazy(() => import("./About"));
const NotFound = lazy(() => import("./NotFound"));
function App() {
  // suspense ApI
  //
  return (
    <>
      <BrowserRouter>
        <Appbr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <Suspense fallback={"Loading..."}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={"Loading..."}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Appbr() {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };

  const goToAbout = () => {
    navigate("/about");
  };

  const goToNotFound = () => {
    navigate("/notfound");
  };

  return (
    <div>
      <h1>This is Landing page</h1>
      <button onClick={goToHome}>Go to Home</button>
      <button onClick={goToAbout}>Go to About</button>
      <button onClick={goToNotFound}>Go to Page not NotFound</button>
    </div>
  );
}

export default App;
