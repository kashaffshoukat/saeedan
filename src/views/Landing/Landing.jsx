import React from "react";
import Spinner from "../../components/Spinner";
import BenefitsCard from "../../components/BenifitsCart";
import { FaCode, FaComputer } from "react-icons/fa6";
import ServiceHomeCard from "../../components/ServiceHomeCard";

const Landing = () => {
  const webDevStacks = [
    "React.js",
    "Node.js",
    "Laravel",
    "MongoDB",
    "Tailwind CSS",
  ];
  return (
    <section className="bg-white py-5">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-5xl text-blue-700 mb-4 font-bold">
            Web and App Development
          </h1>
          <h2 className="text-5xl mb-6 font-bold">Services Agency</h2>
          <p className="text-lg text-gray-800 mb-6">
            Saeedan Technology -{" "}
            <span className="text-blue-500">
              Custom Software Development Company
            </span>
          </p>
          <p className="text-md text-gray-600 mb-6 font-semibold">
            Want to see your app idea shine?
          </p>
          <p className="text-md text-gray-600 mb-6">
            Our expert developers transform your vision into stunning,
            user-friendly apps. Click now to turn your dreams into reality!
          </p>

          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-md transition duration-300 ease-in-out">
            Schedule Free Consultation <span className="ml-2">→</span>
          </button>
        </div>

        <div className="lg:w-1/2">
          <img
            src="/assets/homepage.webp"
            alt="Web and App Development Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
