import { MoveRight } from "lucide-react";
import Navbar from "./Navbar";
import About from "./About";
import Project from "./Project";
import Contactme from "./Contactme";
import Footer from "./Footer";

const Display = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <div
          className="h-screen bg-cover bg-center px-5 md:px-20"
          style={{ backgroundImage: "url('/bg1.jpg')" }}>
          <div className="absolute">
            <Navbar />
          </div>
          <div className="h-full flex flex-col justify-center text-white">
            <p className="text-md md:text-xl text-left md:-mb- lg:mb-0">
              Hi there, I’m Jayanta
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight md:leading-none text-left">
              <span className="text-4xl md:text-5xl">Fullstack</span>{" "}
              <span className="heading">Developer</span>
            </h1>

            <div className="flex flex-wrap items-center gap-5 mt-10 md:mt-20">
              <div className="flex flex-wrap gap-5 md:gap-7">
                <a
                  href="#about"
                  className="md:py-3 md:px-7 py-2 px-4 border-2 border-white flex justify-center items-center text-sm md:text-base">
                  Explore My Portfolio{" "}
                  <MoveRight className="ml-2 text-[#FF8000] scroll-arrow" />
                </a>
                <a
                  href="#contactme"
                  className="md:py-3 md:px-7 py-2 px-4 border-2 border-white flex justify-center items-center text-sm md:text-base">
                  Contact with me{" "}
                  <MoveRight className="ml-2 text-[#FF8000] scroll-arrow" />
                </a>
              </div>
              <span className="text-sm md:text-base text-left mt- md:mt-0">
                You can explore more about my <br />
                portfolio and personal life experience here.
              </span>
            </div>
          </div>
        </div>

        <About />
        <Project />

        <Contactme />

        <Footer />
      </div>
    </>
  );
};

export default Display;
