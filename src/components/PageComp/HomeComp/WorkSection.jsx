import BudgetPal from "/src/assets/BudgetP/Sign Up.png";
import J4J from "/src/assets/Projects/J4J-Main.png";
import MovieLand from "/src/assets/Projects/MovieLand.png";
import QuoteGen from "/src/assets/Projects/QuoteGen.png";
import GPT from "/src/assets/Projects/GPT-3.png";
import Music from "/src/assets/Projects/Music.png";

const ProjectCard = ({ dataItem }) => {
  const { link, title, website } = dataItem;

  return (
    <li className="lg:w-[47%] mb-10 relative">
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        style={{ position: "relative", display: "block" }}
      >
        <img
          className={
            "object-cover hover:scale-95 transform transition-transform duration-500 w-full h-full rounded-lg"
          }
          src={link}
          alt={title}
          style={{ height: "450px" }}
        />

        {/* <i className="text-7xl text-gray-300  absolute bi bi-arrow-up-right-circle top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></i>{" "} */}
        {/* Position the arrow in the middle */}
        <h2 className="lg:text-[40px] text-[35px] font-light">{title}</h2>
      </a>
    </li>
  );
};

function WorkSection() {
  const data = [
    {
      title: "BudgetPal",
      website: "https://github.com/Boroshilov03/BudgetPal",
      link: BudgetPal,
    },
    {
      title: "QuoteGenerator",
      website: "https://boroshilov03.github.io/QuoteGen/",
      link: QuoteGen,
    },
    {
      title: "Job4Job",
      website: "https://github.com/Boroshilov03/Job4Job",
      link: J4J,
    },
    {
      title: "MovieLand",
      website: "https://github.com/Boroshilov03/MovieLand",
      link: MovieLand,
    },
    {
      title: "GPT3- UI/UX",
      website: "https://github.com/Boroshilov03/MovieLand",
      link: GPT,
    },
    // {
    //   title: "Music",
    //   website: "https://github.com/Boroshilov03/MovieLand",
    //   link: Music
    // }
  ];

  return (
    <div id="workSection" className={"border-b-4 pb-14"}>
      <h1 className={"lg:ml-10 lg:text-[40px] text-[35px] font-bold"}>
        Projects
      </h1>

      <ul className={"flex flex-wrap gap-10 justify-center mt-5"}>
        {data.map((item, index) => (
          <ProjectCard dataItem={{ ...item, index }} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default WorkSection;
