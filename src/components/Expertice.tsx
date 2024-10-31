import { ChartBarDecreasingIcon, Code, Monitor } from "lucide-react"; // Assuming you're using Lucide icons

const Expertice = () => {
  return (
    <div
      className="bg-[#010807] flex flex-col justify-center items-center md:px-20 px-6 py-10"
      id="expertise">
      <div className="text-center text-white mb-6">
        <h2 className="md:text-3xl text-md">
          My <span className="font-bold">Expertise</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Card 1 */}
        <div className="border-2 border-[#FF8000] flex flex-col justify-center p-8 rounded-xl text-white shadow-lg hover:shadow-2xl transition-all duration-300 w-full">
          <div className="mb-4">
            <img
              src="exp3.png"
              className="text-[#FF8000] w-12 h-12 md:w-20 md:h-20"
            />
          </div>
          <h3 className="text-xl font-bold mb-3 mt-3">Graphic Designer</h3>
          <p className="text-sm">
            As a skilled Graphic Designer with a strong foundation in visual
            communication, I specialize in creating compelling and impactful
            designs that elevate brand identity and engage audiences. With a
            keen eye for detail and a deep understanding of design principles, I
            bring concepts to life through a variety of mediums, including
            digital and print.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border-2 border-[#FF8000] flex flex-col justify-center p-8 rounded-xl text-white shadow-lg hover:shadow-2xl transition-all duration-300 w-full">
          <div className="mb-4">
            <img
              src="exp1.png"
              className="text-[#FF8000] w-12 h-12 md:w-20 md:h-20"
            />
          </div>
          <h3 className="text-xl font-bold mb-3 mt-3">UI/UX Design</h3>
          <p className="text-sm">
            As a seasoned UI/UX Designer, I specialize in creating intuitive and
            visually compelling digital experiences that seamlessly blend
            functionality and aesthetics. I excel in user research, wireframing,
            prototyping, and user interface design, ensuring every project is
            user-centered and aligns with business objectives.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border-2 border-[#FF8000] flex flex-col justify-center p-8 rounded-xl text-white shadow-lg hover:shadow-2xl transition-all duration-300 w-full">
          <div className="mb-4">
            <img
              src="exp2.png"
              className="text-[#FF8000] w-12 h-12 md:w-20 md:h-20"
            />
          </div>
          <h3 className="text-xl font-bold mt-3 mb-3">
            Web Application Development
          </h3>
          <p className="text-sm">
            As a Web Designer with extensive experience, I specialize in
            creating visually captivating and user-centric websites. My
            expertise lies in designing intuitive interfaces that prioritize
            both aesthetics and functionality. I am skilled in translating
            complex requirements into seamless digital experiences, ensuring
            consistency across devices and platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expertice;
