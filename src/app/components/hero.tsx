"use client";
import image from "./assests/hero-bg.jpg";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SmoothAnimatedSection from "./animation"

function Hero() {
  return (
    <SmoothAnimatedSection>
    <div
      className="h-screen bg-no-repeat bg-cover bg-fixed brightness-90 grid lg:grid-cols-2 grid-cols-1 place-items-center"
      style={{ backgroundImage: `url(${image.src})` }}
    >
      
      <div className="text-center lg:text-left px-4 lg:px-10">
        <span className="text-green-500 font-bold text-xl md:text-2xl font-poppins mt-5">
          Welcome to Glint
        </span>
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl mt-4 font-poppins leading-tight px-4 lg:px-0">
          We are a creative group of   
          people who design <br className="hidden lg:block" />
          influential brands and <br className="hidden lg:block" />
          digital experiences.
        </h1>

        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4 lg:justify-start">
          <button className="bg-transparent font-poppins border-2 text-white font-bold px-8 py-3 rounded shadow transition duration-200 hover:bg-green-500 hover:text-black hover:font-semibold focus:outline-none focus:ring-2 focus:ring-white">
            Start a Project
          </button>
          <button className="bg-transparent font-poppins border-2 text-white font-bold px-8 py-3 rounded shadow transition duration-200 hover:bg-green-500 hover:text-black hover:font-semibold focus:outline-none focus:ring-2 focus:ring-white">
            More About Us
          </button>
        </div>
      </div>

      {/* Icons section, hidden on smaller screens */}
      <div className="hidden lg:flex flex-col items-center space-y-5 mt-8 lg:mt-0 lg:justify-center p-4">
        <div>
          <FacebookOutlinedIcon className="text-white text-4xl sm:text-5xl transition duration-200 hover:text-blue-500" />
        </div>
        <div>
          <GitHubIcon className="text-white text-4xl sm:text-5xl transition duration-200 hover:text-gray-400" />
        </div>
        <div>
          <TwitterIcon className="text-white text-4xl sm:text-5xl transition duration-200 hover:text-blue-400" />
        </div>
        <div>
          <InstagramIcon className="text-white text-4xl sm:text-5xl transition duration-200 hover:text-pink-500" />
        </div>
      </div>
      
    </div>
    </SmoothAnimatedSection>
  );
}

export default Hero;
