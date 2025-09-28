import Csharp from "/src/assets/c-sharp-c.svg";
import JS from "/src/assets/javascript.png";
import REACT from "/src/assets/react.png";
import PYTHON from "/src/assets/python.png";
import MONGODB from "/src/assets/leaf.png";
import GIT from "/src/assets/Git.png";
import NODEJS from "/src/assets/NodeJS.png";
import POSTGRESQL from "/src/assets/PostgreSQL.png";

const SkillSet = () => {
  const skills = [
    {
      src: Csharp,
      alt: "C#",
      name: "C#",
      category: "Backend",
      color: "from-purple-500 to-purple-700",
      shadow: "rgba(180, 100, 255, 0.4)",
    },
    {
      src: JS,
      alt: "JavaScript",
      name: "JavaScript",
      category: "Frontend",
      color: "from-yellow-500 to-yellow-700",
      shadow: "rgba(255, 255, 0, 0.5)",
    },
    {
      src: REACT,
      alt: "React",
      name: "React",
      category: "Frontend",
      color: "from-cyan-500 to-cyan-700",
      shadow: "rgba(173, 216, 230, 0.8)",
    },
    {
      src: PYTHON,
      alt: "Python",
      name: "Python",
      category: "Backend",
      color: "from-green-500 to-green-700",
      shadow: "rgba(255, 255, 0, 0.5)",
    },
    {
      src: MONGODB,
      alt: "MongoDB",
      name: "MongoDB",
      category: "Database",
      color: "from-green-400 to-green-600",
      shadow: "rgba(144, 238, 144, 0.8)",
    },
    {
      src: GIT,
      alt: "Git",
      name: "Git",
      category: "Tools",
      color: "from-gray-500 to-gray-700",
      shadow: "rgba(211, 211, 211, 0.8)",
    },
    {
      src: NODEJS,
      alt: "Node.js",
      name: "Node.js",
      category: "Backend",
      color: "from-green-400 to-green-600",
      shadow: "rgba(144, 238, 144, 0.3)",
    },
    {
      src: POSTGRESQL,
      alt: "PostgreSQL",
      name: "PostgreSQL",
      category: "Database",
      color: "from-blue-500 to-blue-700",
      shadow: "rgba(0, 128, 255, 0.5)",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use
            to build exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${
                    skill.color.split(" ")[1]
                  }, ${skill.color.split(" ")[3]})`,
                }}
              ></div>

              <div className="relative z-10 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <img
                    className="w-full h-full object-contain filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{
                      filter: `drop-shadow(0 0 15px ${skill.shadow})`,
                    }}
                    src={skill.src}
                    alt={skill.alt}
                  />
                </div>

                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300 mb-2">
                  {skill.name}
                </h3>

                <span
                  className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${skill.color} text-white`}
                >
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-700 mb-8">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Agile Development",
              "Machine Learning",
              "API Development",
              "Database Design",
              "Version Control",
              "Problem Solving",
              "Team Collaboration",
              "Code Review",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSet;
