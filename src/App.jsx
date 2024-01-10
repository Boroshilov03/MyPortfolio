
import './App.css'
import NavBar from "./components/NavBarComp/NavBar.jsx";
import MainTitle from "./components/PageComp/HomeComp/MainTitle.jsx";
import WorkSection from "./components/PageComp/HomeComp/WorkSection.jsx";

function App() {

    return (
        <div className={"flex flex-col gap-7 p-5"}>
            <NavBar />
            <MainTitle />
            <WorkSection />
        </div>
    )

}

export default App
