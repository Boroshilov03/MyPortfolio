const ProjectCard = ({ dataItem }) => {
  const { link, title, website } = dataItem;

  return (
    <li className="lg:w-[47%] mb-10">
      {/* Use a regular anchor tag for external links */}
      <a href={website} target="_blank" rel="noopener noreferrer">
        <img
          className={
            "object-cover hover:scale-95 transform transition-transform duration-500 w-full h-full"
          }
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
      title: "BudjetPal",
      website: "https://github.com/Boroshilov03/BudgetPal",
      link: "https://media.discordapp.net/attachments/1030352196480540712/1199465254879498250/Dashboard.png?ex=65c2a411&is=65b02f11&hm=fabef57c7b5a85c0d543539e7fa63e95cc2c280bd8b1916f094861a72b762154&=&format=webp&quality=lossless&width=1020&height=662",
    },
    {
      title: "QuoteGenerator",
      website: "https://boroshilov03.github.io/QuoteGen/",
      link: "https://media.discordapp.net/attachments/1030352196480540712/1199467366812221570/image_1.png?ex=65c2a609&is=65b03109&hm=d77d2e364b57145f9562934ca8466db20ea4cf1732e7b7d351553a00e7560b6c&=&format=webp&quality=lossless&width=1020&height=662",
    },
    {
      title: "Job4Job",
      website: "https://github.com/Boroshilov03/Job4Job",
      link: "https://media.discordapp.net/attachments/1030352196480540712/1199580043094016070/image.png?ex=65c30ef9&is=65b099f9&hm=84bd10356e465770b079890fb516bd477b3f8509d8164af69c25eea4bcc5be1f&=&format=webp&quality=lossless&width=909&height=554",
    },
    {
      title: "MovieLand",
      website: "https://github.com/Boroshilov03/MovieLand",
      link: "https://media.discordapp.net/attachments/1030352196480540712/1199579301838864434/image.png?ex=65c30e48&is=65b09948&hm=733a42073a26d99379a56db004473297e9eefd740a562e772476ca8e0439d16e&=&format=webp&quality=lossless&width=1139&height=554",
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
