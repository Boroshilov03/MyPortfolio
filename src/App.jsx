import React, { createContext, useState } from "react";
import { createRoot } from "react-dom/client";
import NavBar from "./components/NavBarComp/NavBar";
import MainTitle from "./components/PageComp/HomeComp/MainTitle";
import AboutPage from "./components/PageComp/HomeComp/AboutPage";
import WorkSection from "./components/PageComp/HomeComp/WorkSection";
import Service from "./components/PageComp/Service";
import Contact from "./components/NavBarComp/Contact";
import SkillSet from "./components/PageComp/HomeComp/SkillSet";
import FooterNav from "./components/FooterNav/FooterNav";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`min-h-screen ${theme} transition-all duration-500`}>
        <NavBar toggleTheme={toggleTheme} />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <MainTitle />
          <AboutPage />
          <SkillSet />
          <WorkSection />
          <Service />
          <Contact />
        </main>
        <FooterNav />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
