import Link from "next/link";
import { useState } from "react";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState<
    "UI" | "Web" | "Graphic"
  >("UI");
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // State to store the clicked image URL

  const handleProjectClick = (projectType: "UI" | "Web" | "Graphic") => {
    setSelectedProject(projectType);
  };

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc); // Set the clicked image to be displayed in the modal
  };

  const closeModal = () => {
    setSelectedImage(null); // Close the modal by resetting the selected image
  };

  const projectImages = {
    UI: [
      { src: "ui (1).jpg", alt: "UI Project 1" },
      { src: "ui (1).png", alt: "UI Project 2" },
      { src: "ui (2).jpg", alt: "UI Project 3" },
      { src: "ui (2).png", alt: "UI Project 4" },
      { src: "ui (3).jpg", alt: "UI Project 5" },
      { src: "ui (4).jpg", alt: "UI Project 6" },
    ],
    Web: [
      {
        Link: "https://landingsky.netlify.app/",
        src: "web (1).png",
        alt: "Web Project 1",
      },
      {
        Link: "https://colorfull-blue.vercel.app/",
        src: "web (2).png",
        alt: "Web Project 2",
      },
      {
        Link: "/",
        src: "web (3).png",
        alt: "Web Project 3",
      },
      {
        Link: "https://ujjwalsofahub.com/",
        src: "web (4).png",
        alt: "Web Project 3",
      },
      {
        Link: "https://lissome.netlify.app/",
        src: "web (5).png",
        alt: "Web Project 3",
      },
      {
        Link: "https://movie-web99.netlify.app/",
        src: "web (6).png",
        alt: "Web Project 3",
      },
    ],
    Graphic: [
      { src: "graph (1).jpg", alt: "Graphic Design 1" },
      { src: "graph (2).jpg", alt: "Graphic Design 2" },
      { src: "graph (3).jpg", alt: "Graphic Design 3" },
      { src: "graph (4).jpg", alt: "Graphic Design 1" },
      { src: "graph (5).jpg", alt: "Graphic Design 2" },
      { src: "graph (6).jpg", alt: "Graphic Design 3" },
    ],
  };

  return (
    <>
      <div className="h-auto bg-[#010807] px-5 md:px-20" id="projects">
        <div className="text-center text-white mb-6">
          <h2 className="lg:text-3xl text-md font-bold pt-16">My Projects</h2>
          <hr className="md:w-48 w-24 mx-auto border-t-2 border-white" />
        </div>

        <div className="h-full flex flex-col items-center">
          <div className="md:w-1/2 w-2/3 h-16 border-2 border-[#FF8000] rounded-xl mt-8 flex justify-between items-center text-white">
            <div
              onClick={() => handleProjectClick("UI")}
              className={`text-sm md:text-base cursor-pointer h-full w-1/3 flex justify-center items-center text-center ${
                selectedProject === "UI" ? "bg-[#FF8000]" : ""
              } rounded-md transition-all duration-300 ease-in-out`}>
              UI Projects
            </div>
            <div
              onClick={() => handleProjectClick("Web")}
              className={`text-sm md:text-base cursor-pointer h-full w-1/3 flex justify-center items-center text-center ${
                selectedProject === "Web" ? "bg-[#FF8000]" : ""
              } rounded-md transition-all duration-300 ease-in-out`}>
              Web Projects
            </div>
            <div
              onClick={() => handleProjectClick("Graphic")}
              className={`text-sm md:text-base cursor-pointer h-full w-1/3 flex justify-center items-center text-center ${
                selectedProject === "Graphic" ? "bg-[#FF8000]" : ""
              } rounded-md transition-all duration-300 ease-in-out`}>
              Graphic Designs
            </div>
          </div>

          <div className="mt-8 space-y-5 w-full mb-5 lg:h-auto">
            {/* Flexbox layout to align images */}
            <div className="flex flex-wrap justify-center gap-5 transition-transform duration-500 ease-in-out">
              {projectImages[selectedProject].map((image, index) => (
                <div
                  key={index}
                  className="bg-white w-[300px] h-[200px] flex justify-center items-center rounded-md overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                  onClick={() =>
                    !("Link" in image) && handleImageClick(image.src)
                  }>
                  {"Link" in image ? (
                    <Link href={image.Link}>
                      <img
                        src={image.src}
                        className="w-[100%] h-full object-cover p-2"
                        alt={image.alt}
                      />
                    </Link>
                  ) : (
                    <img
                      src={image.src}
                      className="w-full h-full object-cover"
                      alt={image.alt}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#010807] px-5 md:px-20 text-white h-auto md:h-screen md:py-0 py-10 flex justify-center items-center">
        <div className="hidden md:block w-full">
          <div className="flex justify-center items-center w-full gap-20">
            <div className="w-full md:w-1/2 md:text-left">
              <h1 className="text-3xl italic font-serif">
                {" "}
                _"As a front-end designer, I merge beauty and function to craft
                engaging digital experiences."_
              </h1>
            </div>

            <div className="w-full md:w-1/2 flex  justify-center items-center">
              <img src="/tagline.png" className="md:w-[400px]" alt="" />
            </div>
          </div>
        </div>
        <div className="visible md:hidden">
          <div className="flex flex-col justify-center items-center w-full gap-20">
            <div className="w-full md:w-1/2 flex  justify-center items-center">
              <img src="/tagline.png" className="md:w-full w-[300px]" alt="" />
            </div>

            <div className="w-full md:w-1/2 md:px-0 px-5">
              <h1 className="md:text-3xl text-xl italic font-serif">
                {" "}
                _"As a front-end designer, I merge beauty and function to craft
                engaging digital experiences."_
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for displaying the large image */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          onClick={closeModal}>
          <div
            className="relative bg-white p-4 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <button
              className="absolute top-2 right-2 text-xl font-bold text-black cursor-pointer"
              onClick={closeModal}>
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Large Project"
              className="w-full max-w-[90vw] max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
