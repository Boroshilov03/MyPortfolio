import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBarComp/NavBar";
import AboutPage from "./components/PageComp/HomeComp/AboutPage";
import WorkSection from "./components/PageComp/HomeComp/WorkSection";
import Service from "./components/PageComp/Service";
import Contact from "./components/NavBarComp/Contact";
import GraphHome from "./pages/GraphHome";
import PageLayout from "./layouts/PageLayout";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`min-h-screen ${theme} transition-all duration-500`}>
        <NavBar toggleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<GraphHome />} />
          <Route
            path="/about"
            element={
              <PageLayout>
                <AboutPage />
              </PageLayout>
            }
          />
          <Route
            path="/projects"
            element={
              <PageLayout>
                <WorkSection />
              </PageLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <PageLayout>
                <Contact />
              </PageLayout>
            }
          />
          <Route
            path="/services"
            element={
              <PageLayout>
                <Service />
              </PageLayout>
            }
          />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
