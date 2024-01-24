import Logo from "./Logo";
import CSULBLogo from '/src/assets/csulb.png';
import LaHacks from "/src/assets/lahacks1.png"
import BeachHacks from "/src/assets/large-removebg-preview.png"
function AboutPage() {
    return (
        <div id="aboutSection" className="lg:flex block items-start justify-evenly border-b-4 pb-9">
            {/* Relevant Experience Section */}
            <div className="lg:w-1/2 lg:ml-10">
                <h1 className={"lg:text-[40px] text-[35px] font-bold"}>Relevant Experience</h1>
                <ul className={"mt-5 flex flex-col gap-5"}>
                <div className="flex gap-3">
                <Logo />
                <li>
                    DubHacks - Hackaton<br /><span className="font-light">October of 2023</span></li>
                </div>  
                <div className="flex gap-3">  
                <img className="w-12" src={CSULBLogo} alt="" />
                <li>
                  CSULB Programming Team<br /><span className="font-light">January - June of
                  2023</span>
                </li>
                </div> 
                <div className="flex gap-3">  
                <img className="w-12" src={LaHacks} alt="" />
                <li>LA HACKS - UCLA Hackaton<br /><span className="font-light">April of 2023</span></li>
                </div> 
                <div className="flex gap-3">  
                <img className="w-12" src={BeachHacks} alt="" />
                <li>BeachHacks 7.0 - CSULB Hackaton<br /><span className="font-light">February of 2023</span></li>
                </div> 
              </ul>
            </div>

            {/* About Page Section */}
            <div className="lg:w-1/2 ">
                <h1 className={"lg:text-[40px] text-[35px] font-bold"}>About Page</h1>
                <p className={"mt-5 font-light text-justify"} style={{ fontSize: "20px" }}>
                Hello 🙋, I'm an undergraduate with a degree in computer science. 
                My passion lies in utilizing technology to solve intricate problems and create a positive impact on the world.

                With experience as a full-stack developer or software developer, 
                I have developed a strong foundation in programming languages such as Python, C++, JavaScript, HTML, CSS, Flask, MongoDB, and SQL. 
                I am also interested in machine learning and AI, which is why I am currently learning it. 
                As a creative problem solver and team player, I am committed to delivering high-quality work and exceeding expectations. 
                I am always eager to learn, connect with other technologies and tools, and explore new opportunities for growth and development. 
                </p>
                {/* <a href="/assets/to/your/resume.pdf" download className="font-light">Download Resume</a> */}
            </div>
        </div>
    );
}

 
export default AboutPage;