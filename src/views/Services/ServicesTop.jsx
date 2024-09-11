import React from "react";
import TopSectionComponent from "../../components/TopSectionComponent";
import Button from "../../components/Button";
import { service } from "../../assets";
import { FaArrowRightLong } from "react-icons/fa6";


const ServicesTop = () => {
  return (
    <div className="px-4 md:px-20 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-6">
          <div className="p-6 rounded-lg mt-6 md:mt-20">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Services and Solutions at{" "}
              <span className="text-primary font-bold">Saeedan Technology</span>
            </h2>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary mt-4">
              We Engineer{" "}
              <span className="text-secondary font-semibold">
                Software Solutions
              </span>
            </h3>
            <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
              Imagine a tech-powered future for your business with our guidance
              and expertise. Unleash the potential of innovative solutions
              tailored just for you.
            </p>
            <a
              href="#"
              className="inline-block mt-6 px-4 py-2 md:px-6 md:py-3 bg-green-600 text-white text-base md:text-lg rounded-lg hover:bg-green-700 transition-all duration-300"
            >
              Explore Our Digital Solutions →
            </a>
          </div>
        </div>
        <div className="md:col-span-6 relative">
          <div className="absolute -right-6 md:-right-7 top-4 md:top-[8%] bg-red-500 w-12 md:w-14 h-12 md:h-14 rounded-full"></div>
          <img
            src="/assets/service.jpg"
            alt=""
            className="h-[50vh] md:h-[80vh] w-full rounded-3xl object-cover"
          />
          <div className="absolute bottom-4 md:bottom-7 -left-6 md:-left-7 bg-blue-950 w-12 md:w-14 h-12 md:h-14 rounded-full"></div>
        </div>
      </div>
      {/* <TopSectionComponent head1={'We Engineer Software Solutions'} head2={'Services and Solutions at'} head3={'Saeedan Technology'} description={'Imagine a tech-powered future for your business with our guidance and expertise. Unleash the potential of innovative solutions tailored just for you.'} buttonComponent={
        // <Button icon={<FaArrowRightLong />}>
        //   Explore Our Digital Solutions
        // </Button>
      } picture={service} /> */}
    </div>
  );
};

export default ServicesTop;
