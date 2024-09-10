import React from "react";
import { teamAll, teampic } from "../assets";

const TopSectionComponent = () => {
  return (
    <>
     
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
          <div className="flex flex-col gap-6 md:gap-10 mt-4 md:ml-5">
            <h1 className="text-3xl md:text-3xl font-medium">Team</h1>
            <h2 className="text-5xl md:text-5xl font-bold">
              About Our <span className="text-[#0A6EB7]">Team</span>
            </h2>
            <p className="text-2xl md:text-3xl">
              We're a team of makers, thinkers, and explorers. We approach
              work and play with curiosity and experimentation, using what we
              learn to create meaningful digital products that connect with
              people, just like you.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -right-4 md:-right-7 top-4 lg:top-8 bg-red-500 w-10 md:w-14 h-10 md:h-14 rounded-full"></div>
            <img
              src={teampic}
              alt="Team"
              className="w-full rounded-3xl object-cover h-[60vh] md:h-[80vh]"
            />
            <div className="absolute bottom-4 md:bottom-7 -left-4 md:-left-7 bg-blue-950 w-10 md:w-14 h-10 md:h-14 rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-12">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Our <span className="text-[#0A6EB7]">Team</span>
          </h1>
          <h2 className="text-lg md:text-2xl text-center">
            This is our team, a lot of smiling happy people who work hard to
            empower your teams.
          </h2>
          <div className="border-b-4 text-[#0A6EB7] h-2 md:h-3 w-[40%] md:w-[15%]"></div>
          <img src={teamAll} alt="Team All" className="w-full md:w-auto" />
        </div>
     
    </>
  );
};

export default TopSectionComponent;
