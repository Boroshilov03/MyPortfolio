
import './App.css'
import NavBar from "./components/NavBarComp/NavBar.jsx";
import MainTitle from "./components/PageComp/HomeComp/MainTitle.jsx";
import AboutPage from './components/PageComp/HomeComp/AboutPage.jsx';
import WorkSection from "./components/PageComp/HomeComp/WorkSection.jsx";
import Service from './components/PageComp/Service.jsx';
import Contact from "./components/NavBarComp/Contact.jsx"
import SkillSet from './components/PageComp/HomeComp/SkillSet.jsx';


function App() {

    return (
        <div className={"flex flex-col gap-7 p-5 "}>
            <NavBar />
            <MainTitle />
            <AboutPage />
            {/* <SkillSet /> */}
            <WorkSection />
            <Service />
            <Contact />
        </div>
    )

}

export default App
