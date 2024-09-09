import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Page from "../../components/page";
const Careers = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [heights, setHeights] = useState({});

  const jobs = [
    {
      title: "Full Stack Developer",
      description: "Full Stack Developer Description",
    },
    { title: "Content Writer", description: "Content Writer Description" },
    { title: "Video Editor", description: "Video Editor Description" },
    {
      title: "Senior React.js Developer",
      description: "Senior React.js Developer Description",
    },
    { title: "SQA", description: "SQA Description" },
    {
      title: "Flutter Developer",
      description: "Flutter Developer Description",
    },
  ];

  const contentRefs = useRef([]);

  useEffect(() => {
    const calculatedHeights = {};
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        calculatedHeights[index] = ref.scrollHeight;
      }
    });
    setHeights(calculatedHeights);
  }, []);

  const toggleJob = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Page title="Careers">
      <div className="bg-primary h-[40vh] flex items-center justify-center text-white flex-col">
        <h1 className="text-6xl font-bold">We are hiring</h1>
        <h1 className="mt-4 text-2xl font-semibold">Join Our Team</h1>
      </div>

      <div className="px-10 mx-auto my-10">
        <h2 className="text-2xl font-bold mb-6">Job Openings</h2>
        <div className="space-y-4">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="border rounded-md overflow-hidden transition-all duration-500 ease-in-out"
            >
              <button
                className={`w-full text-left py-2 px-3 focus:outline-none ${
                  activeIndex === index ? "bg-blue-100" : "bg-white"
                } hover:bg-gray-100`}
                onClick={() => toggleJob(index)}
              >
                <div className="flex justify-between items-center">
                  <span className="text-base">{job.title}</span>
                  <span>
                    {activeIndex === index ? <FaAngleUp /> : <FaAngleDown />}
                  </span>
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out`}
                style={{
                  maxHeight:
                    activeIndex === index ? `${heights[index]}px` : "0px",
                  overflow: "hidden",
                }}
              >
                <div
                  className="py-2 px-3 bg-gray-100"
                  ref={(el) => (contentRefs.current[index] = el)}
                >
                  <p className="text-sm mb-6">{job.description}</p>
                  <Link
                    to="/job-application"
                    className="mt-2 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                  >
                    I'm Interested
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
};

export default Careers;
