
function AboutPage() {
    return (
        <div className="lg:flex block items-start justify-evenly border-b-4 pb-9">
            {/* Relevant Experience Section */}
            <div className="lg:w-1/2 lg:ml-10">
                <h1 className={"font-bold"} style={{ fontSize: "30px" }}>Relevant Experience</h1>
                <ul className={"mt-5 flex flex-col gap-5"}>
                <li>DubHacks - Hackaton<br /><span className="font-light">October of 2023</span></li>
                <li>
                  CSULB Programming Team<br /><span className="font-light">January - June of
                  2023</span>
                </li>
                <li>UCLA - Hackaton<br /><span className="font-light">April of 2023</span></li>
                <li>CSULB - Hackaton<br /><span className="font-light">February of 2023</span></li>
              </ul>
            </div>

            {/* About Page Section */}
            <div className="lg:w-1/2 ">
                <h1 className={"font-bold"} style={{ fontSize: "30px" }}>About Page</h1>
                <p className={"mt-5 font-light"} style={{ fontSize: "20px" }}>
                Hello 🙋

                I am an undergraduate with a degree in computer science. 
                I am passionate about using technology to solve complex problems and make a positive impact on the world.

                With experience as a full-stack developer or software developer, 
                I have developed a strong foundation in programming languages such as Python, C++, JavaScript, HTML, CSS, Flask, MongoDB, and SQL. 
                I am also interested in machine learning and AI, which is why I am currently learning it. 
                As a creative problem solver and team player, I am committed to delivering high-quality work and exceeding expectations. 
                I am always eager to learn, connect with other technologies and tools, and explore new opportunities for growth and development. 
                </p>
                <button className="mt-5">Download CV</button>
            </div>
        </div>
    );
}

 
export default AboutPage;