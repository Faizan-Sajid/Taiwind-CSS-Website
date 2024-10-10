import Image from "next/image";
import facebok from "./assests/Facebook-Logo-2015-present.jpg";
import apple from "./assests/apple logo.webp";
import youtube from "./assests/youtube.jpg";
import microsoft from "./assests/microsoft.jpg";
import Google from "./assests/google.webp";
import Marquee from "react-fast-marquee";
import SmoothAnimatedSection from "./animation"


function Client() {
  return (
    <div className="mt-9 text-center p-6 md:p-12 lg:p-20">
      <SmoothAnimatedSection>
      <h3 className="text-green-500 text-lg md:text-xl lg:text-2xl font-sans font-bold">
        Our Clients
      </h3>
      <h1 className="text-black text-3xl md:text-5xl lg:text-6xl font-sans font-bold">
        Glint has been honored to partner <br className="hidden md:block" />
        up with these clients
      </h1>

      <Marquee speed={50} pauseOnHover>
        <div className="flex items-center justify-center space-x-4 mt-10">
          <Image
            src={facebok}
            alt="facebook-logo"
            className="w-24 md:w-40 lg:w-56"
          />
          <Image
            src={apple}
            alt="apple-logo"
            className="w-24 md:w-40 lg:w-56"
          />
          <Image
            src={youtube}
            alt="youtube-logo"
            className="w-24 md:w-40 lg:w-56"
          />
          <Image
            src={microsoft}
            alt="microsoft-logo"
            className="w-24 md:w-40 lg:w-56"
          />
          <Image
            src={Google}
            alt="google-logo"
            className="w-24 md:w-40 lg:w-56"
          />
        </div>
        
      </Marquee>
      </SmoothAnimatedSection>


      
    </div>
  );
}

export default Client;
