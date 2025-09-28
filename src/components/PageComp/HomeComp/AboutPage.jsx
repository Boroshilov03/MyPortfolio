import Logo from "./Logo";
import CSULBLogo from "/src/assets/csulb.png";
import LaHacks from "/src/assets/lahacks1.png";
import Bazalu from "/src/assets/BudgetP/Bazalu.jpg";

function AboutPage() {
  return (
    <section id="aboutSection" className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-700">
                Hello World! 👋
              </h3>
              <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-600 leading-relaxed">
                <p className="mb-6">
                  I'm{" "}
                  <strong className="text-blue-600">Mirlan Boroshilov</strong>,
                  a Computer Science student at California State University,
                  Long Beach, with a passion for full-stack development and
                  creating innovative solutions.
                </p>
                <p className="mb-6">
                  I specialize in modern web technologies including{" "}
                  <span className="text-green-500 font-semibold">Python</span>,{" "}
                  <span className="text-purple-500 font-semibold">C#</span>,{" "}
                  <span className="text-yellow-500 font-semibold">
                    JavaScript
                  </span>
                  , and{" "}
                  <span className="text-cyan-500 font-semibold">React</span>.
                </p>
                <p className="mb-6">
                  Recently, I won{" "}
                  <strong className="text-blue-600">LA Hacks 2024</strong> for
                  building an innovative heart disease predictor, showcasing my
                  ability to apply machine learning to solve real-world
                  problems.
                </p>
                <p>
                  Currently, I'm gaining hands-on experience as a Software
                  Developer Intern, working in an Agile development environment.
                  I'm always excited about the opportunity to create something
                  unique and meaningful.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/src/assets/MirlanBoroshilovResume.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition duration-300"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </a>
              <a
                href="#workSection"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-700 dark:border-gray-600 text-gray-700 dark:text-gray-600 font-semibold rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300"
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-700">
              Experience & Achievements
            </h3>
            {/* Centerfield Role */}
            <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  CF
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Software Engineer Intern
                </h4>
                <p className="text-blue-600 font-medium">Centerfield</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  March 2025 - Present
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  Built multi-agent systems and worked on microservices to
                  enhance scalability and performance.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Current Role */}
              <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                <div className="flex-shrink-0">
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    src={Bazalu}
                    alt="Bazalu"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Software Developer Intern
                  </h4>
                  <p className="text-blue-600 font-medium">Bazalu</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    April 2024 - July 2024
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    Gaining hands-on experience in Agile development, working on
                    real-world projects and contributing to team goals.
                  </p>
                </div>
              </div>

              {/* Hackathon Achievement */}
              <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                <div className="flex-shrink-0">
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    src={LaHacks}
                    alt="LA Hacks"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Winner - LA Hacks 2024
                  </h4>
                  <p className="text-blue-600 font-medium">
                    Heart Disease Predictor
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    April 2024
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    Built an innovative machine learning solution for heart
                    disease prediction, showcasing expertise in AI/ML
                    technologies.
                  </p>
                </div>
              </div>

              {/* Programming Team */}
              <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                <div className="flex-shrink-0">
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    src={CSULBLogo}
                    alt="CSULB"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Programming Team Member
                  </h4>
                  <p className="text-blue-600 font-medium">CSULB</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    January - June 2023
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    Participated in competitive programming, developing
                    problem-solving skills and algorithmic thinking.
                  </p>
                </div>
              </div>

              {/* DubHacks */}
              <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                <div className="flex-shrink-0">
                  <Logo />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Participant - DubHacks
                  </h4>
                  <p className="text-blue-600 font-medium">Hackathon</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    October 2023
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    Collaborated with team members to build innovative solutions
                    in a competitive hackathon environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
