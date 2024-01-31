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
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`flex flex-col gap-7 p-5 ${theme}`}>
        <NavBar toggleTheme={toggleTheme} />
        <MainTitle />
        <AboutPage />
        <SkillSet />
        <WorkSection />
        <Service />
        <Contact />
        <FooterNav />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
