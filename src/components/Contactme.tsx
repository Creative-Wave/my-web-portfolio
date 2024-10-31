import { FromType } from "@/util/dataType";
import { fromSchema } from "@/util/fromSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Textarea } from "@nextui-org/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Contactme = () => {
  const [formStatus, setFormStatus] = useState(false); // state for form submission status

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FromType>({ resolver: zodResolver(fromSchema) });

  const sendData = (fdata: FromType) => {
    console.log(fdata);
    reset();
    setFormStatus(true); // Show the success message when form is submitted

    // Optionally hide the message after 3 seconds
    setTimeout(() => {
      setFormStatus(false);
    }, 3000); // Adjust time as needed
  };

  return (
    <>
      <div className="relative">
        {/* Background Section */}
        <div
          className="bg-[#010807] lg:h-screen h-auto bg-cover bg-center px-5 md:px-20 md:py-0 py-10 flex flex-col items-center justify-center"
          id="contactme">
          {/* Contact Form Section */}
          <div className="w-[90%] bg-transparent border-2 border-[#FF8000] text-white rounded-lg shadow-lg p-8 lg:flex justify-start lg:space-x-10">
            {/* Contact Info */}
            <div className="lg:w-1/2 w-full text-left mb-8 lg:mb-0 flex flex-col justify-center ">
              <h2 className="text-3xl font-bold text-[#FF8000]">Contact Me</h2>
              <p className="mt-4">Feel free to reach out!</p>
              <div className="mt-8 space-y-4">
                <p className="flex items-center space-x-3 text-sm md:text-base">
                  <span className="material-icons text-[#FF8000]">phone :</span>
                  <span>+91 99036 83766</span>
                </p>
                <p className="flex items-center space-x-3 text-sm md:text-base">
                  <span className="material-icons text-[#FF8000]">email :</span>
                  <span>jayantadebnathwork7@gmail.com</span>
                </p>
                <p className="flex items-center space-x-3 text-sm md:text-base">
                  <span className="material-icons text-[#FF8000]">
                    location_on :
                  </span>
                  <span>North 24 Pgs, Kolkata, India</span>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-1/2 w-full">
              <form onSubmit={handleSubmit(sendData)}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="col-span-2 lg:col-span-1 space-y-3">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter Your Name"
                      {...register("YourName")}
                      errorMessage={errors.YourName?.message}
                      isInvalid={errors.YourName?.message ? true : false}
                    />
                  </div>

                  <div className="col-span-2 lg:col-span-1 space-y-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium">
                      Your Email
                    </label>
                    <Input
                      type="email"
                      placeholder="Enter Your Email"
                      {...register("YourEmail")}
                      errorMessage={errors.YourEmail?.message}
                      isInvalid={errors.YourEmail?.message ? true : false}
                    />
                  </div>

                  <div className="col-span-2 space-y-3">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      className="mt-1 block w-full text-black"
                      minRows={10}
                      placeholder="Your message..."
                      {...register("Message")}
                      isInvalid={!!errors.Message}
                      errorMessage={errors.Message?.message}
                    />
                  </div>
                </div>

                <div className="mt-6 text-center lg:text-right">
                  <button
                    type="submit"
                    className="bg-[#FF8000] text-white py-2 px-6 rounded-md hover:bg-[#e06b00] transition duration-300 ease-in-out">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Message (conditionally rendered) */}
      {formStatus && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-black p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Success!</h3>
            <p>Your message has been sent successfully.</p>
          </div>
        </div>
      )}
    </>
  );
};
export default Contactme;
