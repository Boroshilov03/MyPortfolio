const SkillSet = () => {
    return (  
        <>
        <h1 className={"lg:ml-10 lg:text-[40px] text-[35px] font-bold mb-4"}>Professional Skillset</h1>
        <div className="flex justify-evenly h-40 border-b-4">
            <div className="box w-32 h-10">
                <img src="src\assets\HTML5.png" alt="" />
            </div>
            <div className="box w-32 h-10">
                <img src="src\assets\CSS3.png" alt="" />
            </div>
            <div className="box w-32 h-10">
                <img src="src\assets\react.png" alt="" />
            </div>
            <div className="box w-32 h-10">
                <img src="src\assets\python.png" alt="" />
            </div>
            <div className="box w-32 h-10">
                <img src="src\assets\leaf.png" alt="" />
            </div>
            <div className="box w-32 h-10">
                <img src="src\assets\Git.png" alt="" />
            </div>
            <div className="box w-32 h-10">
                <img src="src\assets\NodeJS.png" alt="" />
            </div>
            <div className="box w-32 h-10">
                <img src="src\assets\PostgreSQL.png" alt="" />
            </div>
        </div>
        </>
    );
}
 
export default SkillSet;