import { Link } from "@nextui-org/react";

const Keyskill = () => {
  return (
    <>
      <div className="relative overflow-hidden h-screen">
        {/* Background image */}
        <div
          className="h-screen bg-cover bg-center px-5 md:px-20 relative"
          style={{ backgroundImage: "url('/bg2.jpg')" }}>
          {/* Gradient overlay */}
          <div className="absolute inset-0 h-full bg-gradient-to-t from-[#010807] via-transparent to-[#010807] flex flex-col justify-center items-center md:px-20 px-6 py-10">
            <div className="text-center text-white mb-6">
              <h2 className="md:text-3xl text-md">
                My <span className="font-bold">Key Skill</span>
              </h2>
            </div>

            <div className="flex flex-col justify-center items-center space-y-8">
              <div className="grid grid-cols-4 md:grid-cols-8 gap-8">
                {/* Responsive Icons */}
                {[
                  "icon1.png",
                  "icon2.png",
                  "icon3.png",
                  "icon4.png",
                  "icon5.png",
                  "icon6.png",
                  "icon7.png",
                  "icon8.png",
                  "icon9.png",
                  "icon10.png",
                  "icon11.png",
                  "icon12.png",
                  "icon13.png",
                  "icon14.png",
                  "icon15.png",
                  "icon16.png",
                ].map((icon, index) => (
                  <div
                    key={index}
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-[110px] lg:h-[110px] border-2 border-[#FF8000] rounded-xl md:rounded-3xl flex justify-center items-center hover:shadow-lg hover:shadow-[#FF8000] cursor-pointer transition-shadow duration-300 ease-in-out">
                    <img src={icon} className="w-2/4 h-2/4 " />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Keyskill;
