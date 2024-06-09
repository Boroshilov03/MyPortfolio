import BudgetPal from "/src/assets/Projects/BudjetPal.png";
import J4J from "/src/assets/Projects/J4Jpic2.png";
import MovieLand from "/src/assets/Projects/MovieLand.png";
import QuoteGen from "/src/assets/Projects/QuoteGen.png";
import GPT from "/src/assets/Projects/GPT-3.png";
import FoodTruck from "/src/assets/Projects/FoodTruck1.png";

const ProjectCard = ({ dataItem }) => {
  const { link, title, website } = dataItem;

  const imageClass = title === "MovieLand"
    ? "object-cover hover:scale-105 transform transition-transform duration-500 w-full h-full rounded-lg"
    : "object-contain hover:scale-105 transform transition-transform duration-500 w-full h-full rounded-lg";

  return (
    <li className="lg:w-[47%] mb-10 relative">
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        style={{ position: "relative", display: "block" }}
      >
        <img
          className={imageClass}
          src={link}
          alt={title}
          style={{ height: "450px" }}
        />
        <h2 className="lg:text-[40px] text-[35px] font-light">{title}</h2>
      </a>
    </li>
  );
};

function WorkSection() {
  const data = [
    {
      title: "GPT3- UI/UX",
      website: "https://github.com/Boroshilov03/GPT3-UI-UX",
      link: GPT,
    },
    {
      title: "Food Truck Finder",
      website: "https://github.com/Boroshilov03/GPT3-UI-UX",
      link: FoodTruck,
    },
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
