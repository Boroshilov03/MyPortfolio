import BudgetPal from "/src/assets/Projects/BudjetPal.png";
import J4J from "/src/assets/Projects/j4jpic2.png";
import MovieLand from "/src/assets/Projects/MovieLand.png";
import QuoteGen from "/src/assets/Projects/QuoteGen.png";
import GPT from "/src/assets/Projects/GPT-3.png";
import FoodTruck from "/src/assets/Projects/FoodTruck1.png";

const ProjectCard = ({ dataItem }) => {
  const { link, title, website, description, technologies } = dataItem;

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          src={link}
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition duration-300"
        >
          View Project
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
};

function WorkSection() {
  const data = [
    {
      title: "GPT-3 UI/UX",
      website: "https://github.com/Boroshilov03/GPT3-UI-UX",
      link: GPT,
      description: "Modern UI/UX design for GPT-3 integration with responsive layout and intuitive user experience.",
      technologies: ["React", "CSS3", "JavaScript", "UI/UX"]
    },
    {
      title: "Food Truck Finder",
      website: "https://github.com/Boroshilov03/GrubWheels",
      link: FoodTruck,
      description: "A comprehensive food truck discovery platform with location-based search and real-time updates.",
      technologies: ["React", "Node.js", "MongoDB", "Google Maps API"]
    },
    {
      title: "BudgetPal",
      website: "https://github.com/Boroshilov03/BudgetPal",
      link: BudgetPal,
      description: "Personal finance management application with expense tracking, budgeting tools, and financial insights.",
      technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"]
    },
    {
      title: "Quote Generator",
      website: "https://boroshilov03.github.io/QuoteGen/",
      link: QuoteGen,
      description: "Interactive quote generator with beautiful animations and social sharing capabilities.",
      technologies: ["JavaScript", "HTML5", "CSS3", "API Integration"]
    },
    {
      title: "Job4Job",
      website: "https://github.com/Boroshilov03/Job4Job",
      link: J4J,
      description: "Job marketplace platform connecting employers with skilled professionals in various industries.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"]
    },
    {
      title: "MovieLand",
      website: "https://github.com/Boroshilov03/MovieLand",
      link: MovieLand,
      description: "Movie discovery and recommendation platform with advanced filtering and user reviews.",
      technologies: ["React", "TMDB API", "JavaScript", "CSS3"]
    },
  ];

  return (
    <section id="workSection" className="py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack development and modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <ProjectCard dataItem={{ ...item, index }} key={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Boroshilov03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
