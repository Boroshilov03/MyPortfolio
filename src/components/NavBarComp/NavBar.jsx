

function NavBar(){

    return (
        <div className={"flex justify-between font-light text-lg"}>
            <h1 className="lg:ml-5">Mirlan Boroshilov</h1>
            <h1>STUDENT - CSULB</h1>

            <span className=" items-center border-2 px-2.5 py-0.5 rounded-full gap-2 lg:inline-flex hidden">
                <span className="absolute inline-flex w-4 h-4 animate-pulse me-1 bg-green-500 rounded-full"></span>
                <span className="relative w-4 h-4 animate-ping me-1 bg-green-500 rounded-full"></span>
                Available for internship
            </span>


        </div>
    )


}

export default NavBar;