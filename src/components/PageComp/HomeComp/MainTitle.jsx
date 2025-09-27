import ProfilePic from "/src/assets/pfp-main.png";

function MainTitle() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <img
              className="relative h-80 w-80 object-cover rounded-3xl shadow-2xl transform group-hover:scale-105 transition duration-500"
              src={ProfilePic}
              alt="Mirlan Boroshilov"
            />
          </div>
        </div>

        {/* Content */}
        <div className="text-center lg:text-left">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full mb-4">
              Software Developer
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Mirlan Boroshilov
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Full-Stack Developer & Computer Science Student
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-400 mb-8 leading-relaxed">
              Passionate about creating innovative solutions and building meaningful digital experiences. 
              Currently pursuing Computer Science at CSULB with hands-on experience in modern web technologies.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#workSection" 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition duration-300"
            >
              View My Work
            </a>
            <a 
              href="#aboutSection" 
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainTitle;
