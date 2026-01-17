import { useEffect, useState } from "react";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Academics from "./components/Academics";
import Experiences from "./components/Experiences";
import Achievements from "./components/Achievements";
import News from "./components/News";
import Footer from "./components/Footer";

// Experience Details
import TeaResearch from "./components/experiences/TeaResearch";
import TestJig from "./components/experiences/TestJig";
import RoboticGen from "./components/experiences/RoboticGen";
import ProjectDispatcher from "./components/projects/ProjectDispatcher";

function App() {
  const routes = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Academics", path: "/academics" },
    { label: "Achievements", path: "/achievements" },
    { label: "Experiences", path: "/experiences" },
    { label: "Other", path: "/news" },
  ];

  const getRouteFromHash = () => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) {
      return "/";
    }
    const validRoutes = [
      ...routes.map((r) => r.path),
      "/experience/tea",
      "/experience/test-jig",
      "/experience/robotic-gen",
    ];

    if (validRoutes.includes(hash)) return hash;
    if (hash.startsWith("/project/")) return hash;

    return "/";
  };

  const [route, setRoute] = useState(() => getRouteFromHash());
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRouteFromHash());
      setNavOpen(false);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="page">
      <Navbar
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        route={route}
        routes={routes}
      />

      <main>
        {route === "/" && <Home />}
        {route === "/projects" && <Projects />}
        {route === "/academics" && <Academics />}
        {route === "/experiences" && <Experiences />}
        {route === "/achievements" && <Achievements />}
        {route === "/news" && <News />}
        {route === "/experience/tea" && <TeaResearch />}
        {route === "/experience/test-jig" && <TestJig />}
        {route === "/experience/robotic-gen" && <RoboticGen />}
        {route.startsWith("/project/") && <ProjectDispatcher route={route} />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
