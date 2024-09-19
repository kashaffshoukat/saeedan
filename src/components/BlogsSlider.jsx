import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BlogsCustomSliderCard from './page/BlogsCustomSliderCard';
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { GetAllBlog } from '../utils/_BLOG';

const BlogsSlider = () => {

    const sliderRef = useRef(null);
    const [blogs, setBlogs] = useState([]);
    

    useEffect(() => {
      const fetchBlogs = async () => {
        try {
          const response = await GetAllBlog();
          setBlogs(response.data.payload);
        } catch (error) {
          console.error("Error fetching blogs:", error);
        }
      };
  
      fetchBlogs();
    }, []);

    const getSliderSettings = () => {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false
        };


        if (window.innerWidth < 700) {
            settings.slidesToShow = 1;
        } else if (window.innerWidth < 1100) {
            settings.slidesToShow = 2;
        } else {
            settings.slidesToShow = 3;
        }

        return settings;
    };

    const settings = getSliderSettings();


    const handlePrev = () => {
        sliderRef.current.slickPrev();
    };


    const handleNext = () => {
        sliderRef.current.slickNext();
    };

    return (
        <div className='px-4 sm:px-8 lg:px-20 py-12'>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl font-semibold'>Recent Blogs</h1>

            <div className="relative">
                <Slider {...settings} ref={sliderRef}>
                    {blogs.map((card, index) => (
                        <div key={index} className="p-4">
                            <BlogsCustomSliderCard
                                blogpic={card.img}
                                heading1={card.title}
                                heading2={card.description}
                            />
                        </div>
                    ))}
                </Slider>
                <h1
                    onClick={handlePrev}
                    className="absolute cursor-pointer left-0 p-3 bg-black  top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full text-lg"
                >
                    <FaAngleLeft />
                </h1>
                <h1
                    onClick={handleNext}
                    className="absolute cursor-pointer right-0 bg-black p-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full text-lg"
                >
                    <FaAngleRight />
                </h1>
            </div>
        </div>
    );
};

export default BlogsSlider;
