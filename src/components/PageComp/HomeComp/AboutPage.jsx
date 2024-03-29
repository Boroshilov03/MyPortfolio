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
        <h1 className={"lg:text-[40px] text-[35px] font-bold"}>Hello World👋</h1>
        <p
          className={"mt-5 font-light text-justify"}
          style={{ fontSize: "20px" }}
        >
          As a Computer Science enthusiast, I thrive on utilizing technology to
          drive positive change. With expertise in both front-end and back-end
          development, I craft seamless user interfaces and robust server
          systems. Engaging in numerous hackathons, I've honed my coding and
          problem-solving skills, delving deep into languages like Python and
          tools such as MongoDB. Eager for fresh challenges, I'm committed to
          pioneering innovative solutions. Let's collaborate and leverage our
          coding expertise to create a brighter tomorrow!
        </p>
        {/* <div className="mt-5">
          <button class="cursor-pointer group relative flex gap-1 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              height="24px"
              width="24px"
            >
              <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                id="SVGRepo_tracerCarrier"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="Interface / Download">
                  {" "}
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    stroke="#f1f1f1"
                    d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                    id="Vector"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
            <a
              href="/src/assets/MirlanBoroshilovResume.pdf"
              download
              className=""
            >
              Download Resume
            </a>
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default AboutPage;
