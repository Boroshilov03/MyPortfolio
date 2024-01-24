import HTML from "/src/assets/HTML5.png";
import CSS from "/src/assets/CSS3.png";
import REACT from "/src/assets/react.png";
import PYTHON from "/src/assets/python.png";
import MONGODB from "/src/assets/leaf.png";
import GIT from "/src/assets/Git.png";
import NODEJS from "/src/assets/NodeJS.png";
import POSTGRESQL from "/src/assets/PostgreSQL.png";

const SkillSet = () => {
  return (
    <>
      <h1 className={"lg:ml-10 lg:text-[40px] text-[35px] font-bold mb-4"}>
        Professional Skillset
      </h1>
      <div className="flex justify-evenly h-40 border-b-4">
        <div className="pt-1.5 box w-32 h-10 hover:scale-105 transform transition-transform duration-500">
          <img
            style={{ filter: "drop-shadow(0 0 15px rgba(255, 100, 0, 0.6))" }}
            width={90}
            height={90}
            src={HTML}
            alt=""
          />
        </div>
        <div className="box w-32 h-10 hover:scale-105 transform transition-transform duration-500">
          <img
            style={{ filter: "drop-shadow(0 0 15px rgba(0, 200, 200, 0.6))" }}
            width={100}
            height={100}
            src={CSS}
            alt=""
          />
        </div>
        <div className="box w-32 h-10 hover:scale-105 transform transition-transform duration-500">
          <img
            style={{ filter: "drop-shadow(0 0 15px rgba(173, 216, 230, 0.8))" }}
            width={100}
            height={100}
            src={REACT}
            alt=""
          />
        </div>
        <div className="box w-32 h-10 hover:scale-105 transform transition-transform duration-500">
          <img
            // style={{ filter: "drop-shadow(0 0 15px rgba(255, 255, 0, 0.5))" }}
            width={100}
            height={100}
            src={PYTHON}
            alt=""
          />
        </div>
        <div className="box w-32 h-10 hover:scale-105 transform transition-transform duration-500">
          <img
            style={{ filter: "drop-shadow(0 0 15px rgba(144, 238, 144, 0.8))" }}
            width={100}
            height={100}
            src={MONGODB}
            alt=""
          />
        </div>
        <div className="pt-2 box w-32 h-10 hover:scale-105 transform transition-transform duration-500">
          <img
            style={{ filter: "drop-shadow(0 0 15px rgba(211, 211, 211, 0.8))" }}
            width={90}
            height={95}
            src={GIT}
            alt=""
          />
        </div>
        <div className="box w-32 h-10 hover:scale-105 transform transition-transform duration-500">
          <img
            // style={{ filter: "drop-shadow(0 0 15px rgba(144, 238, 144, 0.8))" }}
            width={100}
            height={100}
            src={NODEJS}
            alt=""
          />
        </div>
        <div className="box w-32 h-10 hover:scale-105 transform transition-transform duration-500">
          <img
            style={{ filter: "drop-shadow(0 0 15px rgba(0, 128, 255, 0.5))" }}
            width={100}
            height={100}
            src={POSTGRESQL}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default SkillSet;
