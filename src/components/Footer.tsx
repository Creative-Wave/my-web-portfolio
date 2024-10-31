import { Facebook, Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="relative overflow-hidden bg-[#010807f1] text-white">
        {/* Footer Content */}
        <div className="flex flex-col justify-center items-center py-12 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl w-full mx-auto flex flex-col justify-center items-center text-center">
            {/* About Section */}
            <div className="w-full mb-8">
              <h2 className="md:text-3xl text-xl font-semibold mb-4">
                {" "}
                Get in Touch
              </h2>
              <p className="text-center">
                I am a passionate web developer and designer dedicated to
                creating intuitive and dynamic user experiences. Let's connect
                and build something great together!
              </p>
            </div>

            {/* Contact & Social Media */}
            <div className="w-full">
              <h2 className="md:text-xl font-semibold mb-4 text-[#FF8000]">
                Social Handel
              </h2>
              <p className="mb-4">jayantaradebnath@gmail.com</p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/jayanta-debnath-622a7b316/"
                  aria-label="LinkedIn"
                  className="text-2xl transition-colors duration-200 w-12 h-12 bg-white flex justify-center items-center rounded-full">
                  <Linkedin className="text-[#FF8000]" />
                </a>
                <a
                  href="https://github.com/Creative-Wave"
                  aria-label="GitHub"
                  className="text-2xl transition-colors duration-200 w-12 h-12 bg-white flex justify-center items-center rounded-full">
                  <Github className="text-[#FF8000]" />
                </a>
                <a
                  href="https://twitter.com"
                  aria-label="Twitter"
                  className="text-2xl transition-colors duration-200 w-12 h-12 bg-white flex justify-center items-center rounded-full">
                  <Twitter className="text-[#FF8000]" />
                </a>
                <a
                  href="mailto:contact@example.com"
                  aria-label="Email"
                  className="text-2xl transition-colors duration-200 w-12 h-12 bg-white flex justify-center items-center rounded-full">
                  <Mail className="text-[#FF8000]" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100048386407006"
                  aria-label="Facebook"
                  className="text-2xl transition-colors duration-200 w-12 h-12 bg-white flex justify-center items-center rounded-full">
                  <Facebook className="text-[#FF8000]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section (Copyright) */}
        <div className="bg-[#00000054] text-center py-4 mt-10">
          <p className="text-sm">
            © {new Date().getFullYear()} Jayanta Debnath. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
