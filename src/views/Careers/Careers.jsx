import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Page from "../../components/page";
import { GetAllJobs } from "../../utils/_Showjobs";
import { ClipLoader } from 'react-spinners'; 
import CustomTopComponent from "../../components/CustomTopComponent";

const Careers = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [heights, setHeights] = useState({});
  const [jobss, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const contentRefs = useRef([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await GetAllJobs();
        setJobs(response.data.payload);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);
  
  useEffect(() => {
    const calculatedHeights = {};
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        calculatedHeights[index] = ref.scrollHeight;
      }
    });
    setHeights(calculatedHeights);
  }, [jobss]);

  const toggleJob = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleInterested = (jobId) => {
    navigate('/job-application', { state: { jobId } });
  };

  return (
    <Page title="Careers">
      <CustomTopComponent title2={'We are hiring'} description={'Join Our Team'} btnLabel={'Contact Us'} />

      <div className="px-10 mx-auto my-10">
        <h2 className="text-2xl font-bold mb-6">Job Openings</h2>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <ClipLoader color="#000" loading={loading} size={50} />
          </div>
        ) : (
          <div className="space-y-4">
            {jobss.map((job, index) => (
              <div
                key={index}
                className="border rounded-md overflow-hidden transition-all duration-500 ease-in-out"
              >
                <button
                  className={`w-full text-left py-2 px-3 focus:outline-none ${activeIndex === index ? "bg-blue-100" : "bg-white"} hover:bg-gray-100`}
                  onClick={() => toggleJob(index)}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-base">{job.job_title}</span>
                    <span>{activeIndex === index ? <FaAngleUp /> : <FaAngleDown />}</span>
                  </div>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out`}
                  style={{
                    maxHeight: activeIndex === index ? `${heights[index]}px` : "0px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="py-2 px-3 bg-gray-100"
                    ref={(el) => (contentRefs.current[index] = el)}
                  >
                    <p className="text-sm mb-6">{job.job_description}</p>
                    <button
                      onClick={() => handleInterested(job.id)}
                      className="mt-2 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                    >
                      I'm Interested
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Page>
  );
};

export default Careers;
