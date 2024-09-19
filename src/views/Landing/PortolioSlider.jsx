import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { ShowPortfolio } from '../../utils/_Portfolio'; // Import your API call

const PortolioSlider = () => {
  const sliderRef = useRef(null);
  const [portFolios, setPortFolios] = useState([]);

  useEffect(() => {
    const getAllPortfoliosProjects = async () => {
      try {
        const res = await ShowPortfolio();
        const {
          data: { success, payload },
        } = res;
        if (success) {
          setPortFolios(payload);
        } else {
          console.error("Failed to fetch portfolios");
        }
      } catch (error) {
        console.error("Error fetching portfolios:", error);
      }
    };

    getAllPortfoliosProjects();
  }, []);

  const getSliderSettings = () => {
    return {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  };

  const settings = getSliderSettings();

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className=' py-12'>
      <div className='flex flex-col gap-2 items-center justify-center py-4'>
        <h1 className='text-2xl sm:text-3xl text-[#2e5090] lg:text-4xl font-semibold'>Portfolio</h1>
        <h1 className='text-xl font-semibold'> Our Latest Projects</h1>
      </div>

      <div className="relative">
        <Slider {...settings} ref={sliderRef}>
          {portFolios.map((portFolio, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg transition-all duration-500" // Added margin
            >
              <img
                src={`https://test.saeedantechpvt.com/${portFolio.first_content_image}`}
                alt={portFolio.portfolio_title || "Portfolio Image"}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="flex flex-col items-start justify-between p-5">
                <h1 className="font-semibold text-lg md:text-xl lg:text-2xl">
                  {portFolio?.portfolio_title}
                </h1>
                <p className="text-md md:text-[1rem] text-black/55">
                  {portFolio?.portfolio_description}
                </p>
              </div>
              <div className="p-5">
                <button className="text-white bg-primary rounded-md px-5 py-2 max-w-max">
                  See MORE
                </button>
              </div>
            </div>
          ))}

        </Slider>

        <button
          onClick={handlePrev}
          className="absolute cursor-pointer p-3 bg-white md:top-1/3 top-1/4 text-primary rounded-full text-lg transform -translate-y-1/2"
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute cursor-pointer bg-white md:top-1/3 top-1/4 text-primary right-0 p-3 bg-gray-800 rounded-full text-lg  transform -translate-y-1/2"
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default PortolioSlider;
