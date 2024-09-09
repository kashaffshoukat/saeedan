import React from "react";
import Spinner from "../../components/Spinner";
import BenefitsCard from "../../components/BenifitsCart";
import { FaCode, FaComputer } from "react-icons/fa6";
import ServiceHomeCard from "../../components/ServiceHomeCard";
import Button from "../../components/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import Benefits from "./Benefits";
import Service from "./Service";
import Testimonial from "./Testimonial";
import TechnologyStack from "./TechnologyStack";
import FAQs from "./FAQS";

const Landing = () => {
  const webDevStacks = [
    "React.js",
    "Node.js",
    "Laravel",
    "MongoDB",
    "Tailwind CSS",
  ];
  return (
    <>
      <div className="px-20 py-12">
        <section className="bg-white">
          <div className="mx-auto flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 flex flex-col items-start justify-start">
              <h1 className="text-4xl text-primary mb-4 font-bold">
                Web and App Development
              </h1>
              <h2 className="text-3xl mb-6 font-bold">Services Agency</h2>
              <p className="text-3xl text-gray-800 mb-6">
                Saeedan Technology -{" "}
                <span className="text-primary">
                  Custom Software Development Company
                </span>
              </p>
              <p className="text-2xl text-gray-600 mb-6 font-semibold">
                Want to see your app idea shine?
              </p>
              <p className="text-xl text-gray-600 mb-6">
                Our expert developers transform your vision into stunning,
                user-friendly apps. Click now to turn your dreams into reality!
              </p>
              <div>

                <Button icon={<FaArrowRightLong />}>Schedule Free Consultation</Button>
              </div>
            </div>

            <div className="lg:w-1/2">
              <img
                src="/assets/homepage.webp"
                alt="Web and App Development Illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
          <Benefits />
          <Service />
          <Testimonial />
          <TechnologyStack />
          <FAQs />
        </section>
      </div>
    </>
  );
};

export default Landing;
