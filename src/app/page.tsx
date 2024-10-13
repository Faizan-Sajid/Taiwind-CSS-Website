// import Image from "next/image";


import Head from "next/head";
import Nav from "./components/header";
import Hero from "./components/hero"
import About from "./components/about";
import Services from "./components/services";
import Client from "./components/client";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Head>
    {/* Meraki UI CSS */}
    <link
      href="https://cdn.jsdelivr.net/npm/@merakiui/core@1.2.3/dist/css/merakiui.min.css"
      rel="stylesheet"
    />
  </Head>
  <Nav/>
  <Hero/>
  <About/>
  <Services/>
  <Client/>
  <Contact/>
  <Footer/>
    </>
    
  );
}
