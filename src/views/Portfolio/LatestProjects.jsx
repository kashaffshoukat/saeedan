import { useEffect, useState } from "react";
import { ShowPortfolio } from "../../utils/_Portfolio";

const LatestProjects = ({ onFetch }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [portFolios, setPortFolios] = useState([]);

  const getAllPortfoliosProjects = async () => {
    try {
      setIsLoading(true);
      const res = await ShowPortfolio();
      const {
        data: { success, message, payload },
      } = res;
      if (success) {
        setPortFolios(payload);
        onFetch(payload);
      } else {
        console.error(message);
      }
    } catch (error) {
      console.error("Error fetching portfolios:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllPortfoliosProjects();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-6 xl:gap-10 p-10  md:p-16 xl:p-20">
      <h1 className="text-primary text-xl md:text-2xl lg:text-3xl font-bold">
        Our Latest Projects
      </h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {
          isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                role="status"
                className="w-full p-4 border border-gray-200 rounded shadow duration-500 transition-all animate-pulse md:p-6 dark:border-gray-700"
              >
                <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                  <svg
                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                <div className="flex items-center mt-4">
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                    <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  </div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>
            ))
            : portFolios.map((portFolio) => (
              <div
                key={portFolio.id}
                className="flex flex-col bg-white border-[1.5px] border-problemBorder rounded-lg duration-500 transition-all"
              >
                {/* image */}
                <img
                  src={`https://test.saeedantechpvt.com/${portFolio.first_content_image}`}
                  alt={portFolio.portfolio_title || "Portfolio Image"}
                  className="w-full h-full object-cover rounded-lg"
                />


                {/* title and description */}
                <div className="flex flex-col items-start justify-between p-5 gap-2">
                  <h1 className="font-semibold text-lg md:text-xl lg:text-2xl">
                    {portFolio?.portfolio_title}
                  </h1>
                  <p className="text-md md:text-[1rem] text-black/55">
                    {portFolio?.portfolio_description}
                  </p>
                </div>

                {/* button */}
                <div className="p-5">
                 
                  <a
                  className="text-white bg-primary rounded-md  px-5 py-2 max-w-max"
                        href={`https://test.saeedantechpvt.com/${portFolio.banner_image}`}
                        target="_blank" // This makes the link open in a new tab
                        rel="noopener noreferrer" // Recommended for security
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Look it up
                      </a>
                
                </div>
              </div>
            ))
          // Skeleton Loader
        }
      </div>
    </div>
  );
};

export default LatestProjects;
