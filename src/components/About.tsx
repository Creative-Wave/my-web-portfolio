import Link from "next/link";
import Expertice from "./Expertice";
import Keyskill from "./Keyskill";
import { useEffect, useRef, useState } from "react";
import { Progress } from "@nextui-org/react";

const About = () => {
  const [animateProgress, setAnimateProgress] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setAnimateProgress(true);
          observer.disconnect(); // stop observing after animation starts
        }
      },
      {
        threshold: 0.5, // Adjust this value to trigger animation at different visibility levels
      }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        className="bg-[#010807]  flex flex-col justify-center items-center md:px-20 px-6 py-10"
        id="about">
        <div className="text-center text-white mb-6">
          <h2 className="md:text-3xl text-md font-bold pt-8">About Me</h2>
          <hr className="md:w-40 w-20 mx-auto border-t-2 border-white" />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 w-full h-full mb-8 md:mb-0">
            <div className="text-white text-xl">Hi there,</div>
            <div className="text-[#FF8000] text-3xl md:text-2xl font-bold">
              I'm Jayanta Debnath
            </div>
            <div className="mt-4 text-white text-[12px] md:text-[14px]">
              I am a skilled UI/UX Designer with 2 years of experience, bringing
              a combined focus on user-centric design and front-end development
              to create exceptional mobile applications. I excel at translating
              complex user needs into intuitive and visually engaging interfaces
              that prioritize user experience (UX) principles. My expertise lies
              in crafting user flows and information architecture to optimize
              the user journey, while ensuring a seamless and efficient
              interaction through strong front-end development skills. I'm a
              quick learner and eager to expand my knowledge in the
              ever-evolving field of UX design. I'm confident that my skills and
              enthusiasm would be a valuable asset to your team.
            </div>
            <div className="text-[#BC60FF] text-xl mt-5">Social links</div>
            <div className="flex justify-start items-center space-x-6 mt-5">
              <div className="relative group md:w-24 md:h-24 w-14 h-14 lg:w-32 lg:h-32 border-2 border-[#FF8000] rounded-xl md:rounded-3xl flex justify-center items-center hover:border-none transition-all duration-300">
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=100048386407006"
                  }
                  className="relative z-20">
                  <img src="fb.png" className="w-6 md:w-9 lg:w-auto" alt="" />
                </Link>
                <div className="absolute w-0 h-0 bg-[#FF8000] transition-all duration-300 group-hover:w-full group-hover:h-full rounded-xl md:rounded-3xl"></div>
              </div>
              <div className="relative group md:w-24 md:h-24 w-14 h-14 lg:w-32 lg:h-32 border-2 border-[#FF8000] rounded-xl md:rounded-3xl flex justify-center items-center hover:border-none transition-all duration-300">
                <Link
                  href={
                    "https://www.linkedin.com/in/jayanta-debnath-622a7b316/"
                  }
                  className="relative z-20">
                  <img src="link.png" className="w-6 md:w-9 lg:w-auto" alt="" />
                </Link>
                <div className="absolute w-0 h-0 bg-[#FF8000] transition-all duration-300 group-hover:w-full group-hover:h-full rounded-xl md:rounded-3xl"></div>
              </div>
              <div className="relative group md:w-24 md:h-24 w-14 h-14 lg:w-32 lg:h-32 border-2 border-[#FF8000] rounded-xl md:rounded-3xl flex justify-center items-center hover:border-none transition-all duration-300">
                <Link
                  href={"https://github.com/Creative-Wave"}
                  className="relative z-20">
                  <img src="git.png" className="w-6 md:w-9 lg:w-auto" alt="" />
                </Link>
                <div className="absolute w-0 h-0 bg-[#FF8000] transition-all duration-300 group-hover:w-full group-hover:h-full rounded-xl md:rounded-3xl"></div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full h-full flex justify-center">
            <img
              src="/myimage.png"
              alt="Jayanta Debnath"
              className="w-full h-auto  md:max-w-full rounded-full shadow-lg md:translate-x-40"
            />
          </div>
        </div>
      </div>
      <Expertice />
      <Keyskill />

      <div
        ref={progressRef}
        className="bg-[#010807] lg:h-screen h-auto md:px-20 px-6 text-white">
        <div className="lg:flex block justify-between items-center">
          <div className="lg:w-1/2 w-full">
            <h1 className="text-xl lg:text-2xl font-bold">
              <span className="">My</span> <br />
              Expertise
            </h1>
            <p className="mt-5 lg:text-md text-sm">
              Domain expertise in specific mobile application sectors (e.g.,
              e-commerce, education, gaming). Your design and development
              process (e.g., user research, wireframing, prototyping,
              development using specific frameworks). Quantifiable achievements
              from past projects showcasing the impact of your design and
              development solutions (e.g., increased user engagement, improved
              conversion rates, reduced development time).
            </p>

            {/* Progress Bars */}
            <div className="mt-5">
              <div className="font-bold mt-2">
                Creativity
                <Progress
                  aria-label="HTML Skill Level"
                  value={animateProgress ? 70 : 0}
                  className="max-w-md mt-3 transition-all duration-1000 ease-in-out h-2"
                />
              </div>
              <div className="font-bold mt-2">
                Designing
                <Progress
                  aria-label="CSS Skill Level"
                  value={animateProgress ? 85 : 0}
                  className="max-w-md mt-3 transition-all duration-1000 ease-in-out h-2"
                  color="success"
                />
              </div>
              <div className="font-bold mt-2">
                Concept
                <Progress
                  aria-label="JavaScript Skill Level"
                  value={animateProgress ? 75 : 0}
                  className="max-w-md mt-3 transition-all duration-1000 ease-in-out h-2"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full flex lg:justify-end justify-center">
            <img
              src="/about.png"
              className="mt-10 w-[350px] lg:w-[450px]"
              alt="About"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
