
const ProjectCard = ({ dataItem }) => {
    const { link, title, index, website } = dataItem;

    return (
        <li className="lg:w-[47%]">
            {/* Use a regular anchor tag for external links */}
            <a href={website} target="_blank" rel="noopener noreferrer">
                <img className={'w-full h-full'} src={link} alt={title} />
                <div className="flex items-start space-x-1 text-start">
                    <h1 className="text-xs text-gray-1000 pt-1">0{index + 1}</h1>
                    <h2 className="text-xl text-gray-1000">{title}</h2>
                </div>
            </a>
        </li>
    );
};

function WorkSection() {
    const data = [
        {
            title: 'BudjetPal',
            website: 'https://github.com/Boroshilov03/BudgetPal',
            link: 'https://media.discordapp.net/attachments/1030352196480540712/1186792818711207946/image.png?ex=65b03971&is=659dc471&hm=14568c232741c42144b5aca645c33f3857c15add44c8b0512afdc8a25dbe1083&=&format=webp&quality=lossless&width=834&height=554'

        },        
        {
            title: 'Job4Job',
            website: 'https://github.com/Boroshilov03/Job4Job',
            link: 'https://cdn.discordapp.com/attachments/1065774366551453728/1194464754547306537/original.png?ex=65b072fd&is=659dfdfd&hm=b156e9fad1b87cf7a1128e666bbc875e16568d68a05eae062f5c4255fe949cd3&'
        },
        {
            title: 'QuoteGenerator',
            website: 'boroshilov03.github.io/QuoteGen/',
            link: 'https://media.discordapp.net/attachments/1030352196480540712/1194503083271667812/image.png?ex=65b096af&is=659e21af&hm=da880e976d5f259e0495190a2c645eee0669f342a434ef6edd86d4d56a032dfc&=&format=webp&quality=lossless&width=960&height=554'
        },
        {
            title: 'MovieLand',
            website: 'https://github.com/Boroshilov03/MovieLand',
            link: 'https://media.discordapp.net/attachments/1030352196480540712/1196318816708329533/image.png?ex=65b731b8&is=65a4bcb8&hm=2730884bebc4d47e7a8f0114bff663769cdfeab331b99196b3622f16bc4bee3c&=&format=webp&quality=lossless&width=1145&height=554'
        }
    ];

    return (
        <div className={"border-b-4 pb-14"}>
            <h1 className={"font-bold lg:ml-10"} style={{ fontSize: "30px" }}>Projects</h1>

            <ul className={"flex flex-wrap gap-10 justify-center mt-5"}>
                {
                    data.map((item, index) => (
                        <ProjectCard dataItem={{ ...item, index }} key={index} />
                    ))
                }
            </ul>
        </div>
    );
}

export default WorkSection;
