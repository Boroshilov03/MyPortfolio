import Logo from "./Logo";
import CSULBLogo from "/src/assets/csulb.png";
import LaHacks from "/src/assets/lahacks1.png";
import BeachHacks from "/src/assets/large-removebg-preview.png";
function AboutPage() {
  return (
    <div
      id="aboutSection"
      className="lg:flex block items-start justify-evenly border-b-4 pb-9"
    >
      {/* Relevant Experience Section */}
      <div className="lg:w-1/2 lg:ml-10">
        <h1 className={"lg:text-[40px] text-[35px] font-bold"}>
          Relevant Experience
        </h1>
        <ul className={"mt-5 flex flex-col gap-5"}>
          <div className="flex gap-3">
            <Logo />
            <li>
              DubHacks - Hackaton
              <br />
              <span className="font-light">October of 2023</span>
            </li>
          </div>
          <div className="flex gap-3">
            <img className="w-12" src={CSULBLogo} alt="" />
            <li>
              CSULB Programming Team
              <br />
              <span className="font-light">January - June of 2023</span>
            </li>
          </div>
          <div className="flex gap-3">
            <img className="w-12" src={LaHacks} alt="" />
            <li>
              LA HACKS - UCLA Hackaton
              <br />
              <span className="font-light">April of 2023</span>
            </li>
          </div>
          <div className="flex gap-3">
            <img className="w-12" src={BeachHacks} alt="" />
            <li>
              BeachHacks 7.0 - CSULB Hackaton
              <br />
              <span className="font-light">February of 2023</span>
            </li>
          </div>
        </ul>
      </div>

      {/* About Page Section */}
      <div className="lg:w-1/2 lg:mx-10">
        <h1 className={"lg:text-[40px] text-[35px] font-bold"}>About Page</h1>
        <p
          className={"mt-5 font-light text-justify"}
          style={{ fontSize: "20px" }}
        >
          Hey there 👋! I'm an aspiring Computer Science undergrad on a mission
          to harness the power of technology for positive change. With a knack
          for full-stack development and a growing interest in AI and machine
          learning, I'm committed to crafting innovative solutions that make a
          difference. From Python to MongoDB, I'm fluent in various languages
          and tools, constantly seeking new challenges to fuel my passion for
          problem-solving. Let's code our way to a brighter tomorrow!
        </p>
        {/* <a href="/assets/to/your/resume.pdf" download className="font-light">Download Resume</a> */}
      </div>
    </div>
  );
}

export default AboutPage;
