import React, { useState, useRef, useEffect } from 'react';
import BlogsCustomSliderCard from './page/BlogsCustomSliderCard'; // Ensure this component is correctly imported

const BlogsSlider = () => {
    const cardData = [
        { heading1: 'XAMPP vs Laravel Herd: Choosing the Right Local Development Environment', heading2: 'Compare XAMPP and Laravel Herd for local PHP development. Learn the ke...' },
        { heading1: 'XAMPP vs Laravel Herd: Choosing the Right Local Development Environment', heading2: 'Compare XAMPP and Laravel Herd for local PHP development. Learn the ke...' },
        { heading1: 'XAMPP vs Laravel Herd: Choosing the Right Local Development Environment', heading2: 'Compare XAMPP and Laravel Herd for local PHP development. Learn the ke...' },
        { heading1: 'XAMPP vs Laravel Herd: Choosing the Right Local Development Environment', heading2: 'Compare XAMPP and Laravel Herd for local PHP development. Learn the ke...' },

      
        // Add more cards if needed
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);

    // Move to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        intervalRef.current = setInterval(nextSlide, 3000);
        return () => clearInterval(intervalRef.current);
    }, []);

    // Manually move to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
            <div className='px-20 py-12'>
                <h1 className='text-3xl font-semibold'>Recent Blogs</h1>
            </div>

            <div className="relative max-w-full overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${cardData.length * 100}%` }}
                >
                    {cardData.map((card, index) => (
                        <div key={index} className="flex-shrink-0 w-96 p-4 bg-white rounded-lg shadow-lg">
                            <BlogsCustomSliderCard
                                heading1={card.heading1}
                                heading2={card.heading2}
                            />
                        </div>
                    ))}
                </div>
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                >
                    &#10094;
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                >
                    &#10095;
                </button>
            </div>
        </>
    );
};

export default BlogsSlider;
