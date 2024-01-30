import React from "react";
import Button from "./Button";

function NavBar({ toggleTheme }) {
  return (
    <div className={"flex justify-between font-light text-lg items-center"}>
      <h1 className="lg:ml-10 text-2xl">Mirlan Boroshilov</h1>
      <h1 className="flex">
        <Button toggleTheme={toggleTheme} />
      </h1>

      <span className=" items-center border-2 px-2.5 py-0.5 rounded-full gap-2 lg:inline-flex hidden">
        <span className="absolute inline-flex w-4 h-4 animate-pulse me-1 bg-green-500 rounded-full"></span>
        <span className="relative w-4 h-4 animate-ping me-1 bg-green-500 rounded-full"></span>
        Available for internship
      </span>
    </div>
  );
}

export default NavBar;
