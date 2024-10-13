"use client";
// import { useState } from "react";
import CountUp from "react-countup";
// import ScrollTrigger from "react-scroll-trigger";
import SmoothAnimatedSection from "./animation"

function About() {
    // const [couter,setcounter] = useState(false)
  return (
   
    <section className="bg-[#39b54a] py-24 px-4 md:px-8 lg:px-16">
      <SmoothAnimatedSection>
      

      <div className="text-center max-w-4xl mx-auto">
        <h2 className="font-mono text-[16px] sm:text-[20px] text-black font-bold">HELLO THERE</h2>

        <h1 className="text-[40px] sm:text-[60px] lg:text-[78px] text-white font-bold mt-4">
          We Are Glint
        </h1>
        <hr className="max-w-[150px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[500px] mx-auto mt-4 border-white" />
        
        <p className="text-white text-[18px] sm:text-[20px] md:text-[20px] lg:text-[24px] mt-8 text-justify" >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
        </p>

        {/* Count-up section with responsive layout */}
        {/* <ScrollTrigger onEnter={()=> setcounter(true)} onExit={()=>setcounter(false)}> */}
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mt-12">
       
          <div className="text-center border-r-2 lg:pr-6 border-white border-opacity-50">
            <CountUp start={0} end={127} duration={3} delay={0} className="text-[48px] sm:text-[60px] lg:text-[84px] font-bold text-white" />
            
            <span className="text-black text-[14px] sm:text-[16px] md:text-[18px] block font-bold mt-2">
              Award Received
            </span>
          </div>

          <div className="text-center border-r-2 lg:pr-6 border-white border-opacity-50">
             <CountUp start={0} end={900} duration={2} delay={0} className="text-[48px] sm:text-[60px] lg:text-[84px] font-bold text-white " />
            <span className="text-black text-[14px] sm:text-[16px] md:text-[18px] block font-bold mt-2">
              Cup of Coffee
            </span>
          </div>

          <div className="text-center border-r-2 lg:pr-6 border-white border-opacity-50">
            <CountUp start={0} end={109} duration={3} delay={0} className="text-[48px] sm:text-[60px] lg:text-[84px] font-bold text-white " />
            <span className="text-black text-[14px] sm:text-[16px] md:text-[18px] block font-bold mt-2">
              Projects Completed
            </span>
          </div>

          <div className="text-center">
             <CountUp start={0} end={900} duration={2} delay={0} className="text-[48px] sm:text-[60px] lg:text-[84px] font-bold text-white" />
            <span className="text-black text-[14px] sm:text-[16px] md:text-[18px] block font-bold mt-2">
              Happy Clients
            </span>
          </div>
         
        </div>
        {/* </ScrollTrigger> */}
        
      </div>
      </SmoothAnimatedSection>
    </section>
  );
}

export default About;
