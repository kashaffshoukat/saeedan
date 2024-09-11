import React from "react";

const TopSectionComponent = ({ head1, head2, head3, description, picture, buttonComponent }) => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
        <div className="flex flex-col gap-6 md:gap-8 mt-4 md:ml-5 items-start justify-start">
          <h1 className="text-3xl md:text-3xl font-medium">{head1}</h1>
          <div>
            <h2 className="text-4xl md:text-4xl font-bold">
              {head2} <span className="text-[#0A6EB7]">{head3}</span>
            </h2>
          </div>
          <div>
            <p className="text-2xl md:text-2xl">{description}</p>
          </div>

          <div>
            {buttonComponent}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-4 md:-right-7 top-4 lg:top-8 bg-red-500 w-10 md:w-14 h-10 md:h-14 rounded-full"></div>
          <img
            src={picture}
            alt="Team"
            className="w-full rounded-3xl object-cover h-[60vh] md:h-[80vh]"
          />
          <div className="absolute bottom-4 md:bottom-7 -left-4 md:-left-7 bg-blue-950 w-10 md:w-14 h-10 md:h-14 rounded-full"></div>
        </div>
      </div>
    </>
  );
};

export default TopSectionComponent;
