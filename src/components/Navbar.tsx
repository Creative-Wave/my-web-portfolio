import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust the scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative">
        <nav
          className={`md:bg-transparent bg-[#111d1c] fixed left-0 w-full z-30 px- md:px-12 transition-all duration-300 ${
            isScrolled
              ? "lg:bg-[#111d1ce1]/50 backdrop-blur-md backdrop-filter"
              : "lg:bg-transparent"
          }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0 text-white text-lg font-bold">
                <img src="logo.png" className="w-[180px] lg:w-[250px]" alt="" />
              </div>

              {/* Hamburger Icon */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white focus:outline-none">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={
                        isOpen
                          ? "M6 18L18 6M6 6l12 12"
                          : "M4 6h16M4 12h16M4 18h16"
                      }
                    />
                  </svg>
                </button>
              </div>

              {/* Menu Items */}
              <div className="hidden md:flex justify-center items-center space-x-4">
                <div className="relative group">
                  <a
                    href="#"
                    className="text-white px-3  text-sm  rounded-md  font-medium transition duration-300">
                    Home
                  </a>
                  <div className="absolute left-0 bottom-0 w-0 h-[2px] translate-y-2 bg-[#FF8000] transition-all duration-300 group-hover:w-full"></div>
                </div>
                <div className="relative group">
                  <a
                    href="#about"
                    className="text-white px-3 text-sm  rounded-md  font-medium transition duration-300">
                    About
                  </a>
                  <div className="absolute left-0 bottom-0 w-0 h-[2px] translate-y-2 bg-[#FF8000] transition-all duration-300 group-hover:w-full"></div>
                </div>
                <div className="relative group">
                  <a
                    href="#projects"
                    className="text-white px-3 text-sm  rounded-md  font-medium transition duration-300">
                    My Projects
                  </a>
                  <div className="absolute left-0 bottom-0 w-0 h-[2px] translate-y-2 bg-[#FF8000] transition-all duration-300 group-hover:w-full"></div>
                </div>
                <div className="relative group">
                  <a
                    href="#contactme"
                    className="text-white px-3 text-sm  rounded-md  font-medium transition duration-300">
                    Contact
                  </a>
                  <div className="absolute left-0 bottom-0 w-0 h-[2px] translate-y-2 bg-[#FF8000] transition-all duration-300 group-hover:w-full"></div>
                </div>
                <div className="relative group">
                  <a
                    href="https://drive.google.com/drive/folders/1nue96b9uyha7AK_freQmlY9N6g0zm0Xk?usp=sharing"
                    className="text-white px-3 text-sm  rounded-md  font-medium transition duration-300">
                    My Cv
                  </a>
                  <div className="absolute left-0 bottom-0 w-0 h-[2px] translate-y-2 bg-[#FF8000] transition-all duration-300 group-hover:w-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  onClick={closeMenu} // Close menu when clicked
                  className="text-white block px-3 py-2 rounded-md text-base font-medium">
                  Home
                </a>
                <a
                  href="#about"
                  onClick={closeMenu} // Close menu when clicked
                  className="text-white block px-3 py-2 rounded-md text-base font-medium">
                  About
                </a>
                <a
                  href="#projects"
                  onClick={closeMenu} // Close menu when clicked
                  className="text-white block px-3 py-2 rounded-md text-base font-medium">
                  My Projects
                </a>
                <a
                  href="#contactme"
                  onClick={closeMenu} // Close menu when clicked
                  className="text-white block px-3 py-2 rounded-md text-base font-medium">
                  Contact
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1nue96b9uyha7AK_freQmlY9N6g0zm0Xk?usp=sharing"
                  onClick={closeMenu} // Close menu when clicked
                  className="text-white block px-3 py-2 rounded-md text-base font-medium">
                  My Cv
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* Push content down to avoid being hidden under the fixed navbar */}
        <div className="pt-16">{/* Other page content */}</div>
      </div>
    </>
  );
};

export default Navbar;
