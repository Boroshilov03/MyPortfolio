
const ListCard = ({dataItem}) => {

    const { title, description, index } = dataItem

    return (
        <li className="border-l-2 p-8">
            <h1 className="text-[40px] text-gray-300">0{index+1}</h1>
            <div>
                <p className="text-[30px]">{title}</p>
                <p className="font-light w-48 text-justify">{description}</p>
            </div>
        </li>
    )
}


const Service = () => {
     const data = [
        {
            title: 'Design',
            description: 'I make web designs that engage your audience and create the user experience you want.'
        },
        {
            title: 'Development',
            description: 'Bringing visuals to life through developing highly functional web solutions.'
        },
        {
            title: 'The Full Package',
            description: 'Get the best of both worlds for your website, capture your brand identity and get fully functional features.'
        },
     ]


    return ( 
        <div className="lg:ml-6 my-8">
            <h1 className="lg:text-[40px] text-[35px] font-light" >I can help you with ... </h1>
            <ul className="lg:flex justify-between mt-5">
                {
                    data.map((item, index) => (
                        <ListCard dataItem={{...item, index}} key={index}/>    
                    ))
                }
            </ul>
        </div>
     );
}
 
export default Service;