// import Image from "next/image";
import contact from "./assests/contact-bg.jpg"
import SmoothAnimatedSection from "./animation"


function Contact() {
  return (
    <SmoothAnimatedSection>
    <div
      className="h-auto min-h-screen bg-no-repeat bg-cover brightness-120 flex flex-col justify-center items-center p-5"
      style={{ backgroundImage: `url(${contact.src})` }}
    >
      
      {/* Heading */}
      <h4 className="text-center text-green-500 font-bold text-lg md:text-xl">
        Contact Us
      </h4>
      <h1 className="text-white text-2xl md:text-4xl lg:text-5xl text-center font-bold mb-8">
        Reach out for a new project or <br className="hidden md:block" /> just say hello
      </h1>

      {/* Form & Info Section */}
      <div className="flex flex-col md:flex-row justify-around items-center w-full max-w-5xl">
        
        {/* Form */}
        <div className="bg-transparent p-5 w-full md:w-1/2">
          <h2 className="text-white font-bold text-2xl mb-5">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="Name" className="block text-white">
                Your Name
              </label>
              <input
                type="text"
                id="Name"
                placeholder="Name"
                className="block rounded w-full h-[40px] bg-gray-500 outline-none border-none px-3 text-white placeholder:text-gray-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                className="block rounded w-full h-[40px] bg-gray-500 outline-none border-none px-3 text-white placeholder:text-gray-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message here"
                className="block rounded w-full h-[100px] bg-gray-500 outline-none border-none px-3 text-white placeholder:text-gray-300"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-black p-5 w-full md:w-1/2 mt-10 md:mt-0">
          <h2 className="text-white font-bold text-2xl text-center pb-5">
            CONTACT INFO
          </h2>
          <div className="space-y-5">
            <div>
              <h2 className="text-green-500 font-bold text-lg">
                Where to Find Us
              </h2>
              <p className="text-gray-400">
                1600 Amphitheatre Parkway
                <br />
                Mountain View, CA
                <br />
                94043 US
              </p>
            </div>
            <div>
              <h2 className="text-green-500 font-bold text-lg">Email Us At</h2>
              <p className="text-gray-400">
                contact@glintsite.com
                <br />
                info@glintsite.com
              </p>
            </div>
            <div>
              <h2 className="text-green-500 font-bold text-lg">Call Us At</h2>
              <p className="text-gray-400">
                Phone: (+63) 555 1212
                <br />
                Mobile: (+63) 555 0100
                <br />
                Fax: (+63) 555 0101
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </SmoothAnimatedSection>
  );
}

export default Contact;
