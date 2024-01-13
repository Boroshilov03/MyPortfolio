
const ProjectCard = ({dataItem}) => {
    const {link} = dataItem
    return ( 
        <li className="lg:w-[47%]">
            <img className={'w-full h-full'} src={link} />
        </li>
     );
}


function WorkSection(){
    const data = [
        {
            link: 'https://media.discordapp.net/attachments/1030352196480540712/1186792818711207946/image.png?ex=65b03971&is=659dc471&hm=14568c232741c42144b5aca645c33f3857c15add44c8b0512afdc8a25dbe1083&=&format=webp&quality=lossless&width=834&height=554'
        },
        {
            link: 'https://media.discordapp.net/attachments/1030352196480540712/1194503083271667812/image.png?ex=65b096af&is=659e21af&hm=da880e976d5f259e0495190a2c645eee0669f342a434ef6edd86d4d56a032dfc&=&format=webp&quality=lossless&width=960&height=554'
        },
        {
            link: 'https://cdn.discordapp.com/attachments/1065774366551453728/1194464754547306537/original.png?ex=65b072fd&is=659dfdfd&hm=b156e9fad1b87cf7a1128e666bbc875e16568d68a05eae062f5c4255fe949cd3&'
        },
        {
            link: 'https://media.discordapp.net/attachments/1030352196480540712/1192324946509180938/image.png?ex=65a8aa23&is=65963523&hm=c94959caddd7f1214e0c95925c419de2b96b134a1753502be20882223e4fdab3&=&format=webp&quality=lossless&width=1162&height=554'
        }
    ]
    return (
        <div className={""}>
            <h1 className={"font-bold lg:ml-10"} style={{ fontSize: "30px" }}>Projects</h1>

            <ul className={"flex flex-wrap gap-10 justify-center mt-5"}>
                {
                data.map((item, index) => (
                    <ProjectCard dataItem={item} key={index} />
                ))
                }
            </ul>
           

        </div>
    )


}

export default WorkSection;
