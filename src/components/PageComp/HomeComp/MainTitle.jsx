import ProfilePic from "/src/assets/Projects/MirlanB.png";

function MainTitle() {
  const headingStyle = {
    background: "linear-gradient( rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0))",
    WebkitBackgroundClip: "text", // For Webkit browsers like Chrome and Safari
    color: "transparent",
    fontSize: "12rem",
    opacity: "0.2",
  };

  return (
    <div className="lg:flex block items-end justify-evenly border-b-4 pb-9 lg:ml-5 relative">
      <img
        className="w-96 align-bottom rounded-[27px]"
        src={ProfilePic}
        alt="Profile"
      />

      <div className="relative">
        <h2
          className="contact_dark font-semibold lg:text-9xl text-2xl absolute top-[-13rem] left-0 z-10 hidden lg:block"
          style={headingStyle}
        >
          ABOUT ME
        </h2>
        <h1 className="font-semibold lg:font-bold lg:text-9xl text-5xl mt-8 relative z-0">
          Mirlan Boroshilov
        </h1>
      </div>
    </div>
  );
}

export default MainTitle;
