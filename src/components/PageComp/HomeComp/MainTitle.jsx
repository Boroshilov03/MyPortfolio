import ProfilePic from "/src/assets/Projects/MirlanB.png";
function MainTitle() {
  return (
    <div className="lg:flex block items-end justify-evenly border-b-4 pb-9 lg:ml-5">
      <img
        className="w-96 align-bottom rounded-[27px]"
        src={ProfilePic}
        alt="Profile"
      />

      <h1 className="font-semibold lg:font-bold  lg:text-9xl text-5xl mt-8 ">
        Mirlan Boroshilov
      </h1>
    </div>
  );
}

export default MainTitle;
