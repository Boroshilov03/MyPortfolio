import Csharp from "/src/assets/c-sharp-c.svg";
import JS from "/src/assets/javascript.png";
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
        My Stack
      </h1>
      <div className="flex justify-evenly h-40 border-b-4">
        {[
          { src: Csharp, alt: "C#", shadow: "rgba(180, 100, 255, 0.4)" },
          { src: JS, alt: "JavaScript", shadow: "rgba(255, 255, 0, 0.5)" },
          { src: REACT, alt: "React", shadow: "rgba(173, 216, 230, 0.8)" },
          { src: PYTHON, alt: "Python", shadow: "rgba(255, 255, 0, 0.5)" },
          { src: MONGODB, alt: "MongoDB", shadow: "rgba(144, 238, 144, 0.8)" },
          { src: GIT, alt: "Git", shadow: "rgba(211, 211, 211, 0.8)" },
          { src: NODEJS, alt: "Node.js", shadow: "rgba(144, 238, 144, 0.3)" },
          {
            src: POSTGRESQL,
            alt: "PostgreSQL",
            shadow: "rgba(0, 128, 255, 0.5)",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="box w-32 h-32 flex items-center justify-center hover:scale-105 transform transition-transform duration-500"
          >
            <img
              style={{
                filter: `drop-shadow(0 0 15px ${item.shadow})`,
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
              src={item.src}
              alt={item.alt}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SkillSet;
