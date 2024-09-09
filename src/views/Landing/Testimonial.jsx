import React from 'react';
import Slider from 'react-slick';
import { FaQuoteLeft, FaStar } from 'react-icons/fa'; // Import icons from react-icons

// Import Slick Carousel CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Tailwind CSS Classes
const sliderSettings = {
    dots: true,
    pauseOnHover: false,
    infinite: true,
    speed: 500,
    arrows: true,
    prevArrow: <div className="slick-arrow slick-prev text-2xl">◀</div>,
    nextArrow: <div className="slick-arrow slick-next text-2xl">▶</div>,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "30px",
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: false,
            },
        },
    ],
};

const Testimonial = () => {
    const testimonials = [
        {
            author: "Lucypiix",
            icon: "src/assets/testiminials_avatar.png",
            description: '"I have to say I am very pleased, project done in a timely manner with detail, I asked for, but above all, they are on top of communicating with the client and for me that is super important. Great job. Highly recommended."',
            rating: 5,
        },
        {
            author: "Danobi",
            icon: "src/assets/testiminials_avatar.png",
            description: '"I am very satisfied with my work. Communication is great. Was patient with me. Highly recommended."',
            rating: 5,
        },
        {
            author: "Patrick Stewart",
            icon: "src/assets/testiminials_avatar.png",
            description: '"This company was excellent. I will use them again and again. Saeedan technology team communicates well and is very detailed. Thank you for the amazing work."',
            rating: 5,
        },
        {
            author: "Infrontus",
            icon: "src/assets/testiminials_avatar.png",
            description: '"Saeedan Technology Team are simply superb. Working and communicating with them was a pure pleasure. They understood my issue and helped me resolve it very fast. I would definitely recommend them to everyone."',
            rating: 5,
        },
    ];

    return (
        <div className="relative bg-lightblue py-12">
            <div className='flex flex-col items-center gap-4'>
                <h3 className='text-4xl font-bold text-primary'>Testimonials</h3>
                <p className='text-2xl font-thin'>What People Talk About Us</p>
            </div>
            <div className="flex flex-col md:flex-row gap-2 justify-center items-center mt-8">
                <div className="w-full md:w-[100vw] md:h-[50vh]">
                    <iframe
                        className="w-full h-full"
                        src="https://player.vimeo.com/video/941184818?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                        title="Testimonial - Saeedan Technology"
                    ></iframe>
                </div>
                <div className="w-full md:w-[100vw] md:h-[50vh]">
                    <iframe
                        className="w-full h-full"
                        src="https://player.vimeo.com/video/941189736?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                        title="Testimonial 2"
                    ></iframe>
                </div>
            </div>
            <Slider {...sliderSettings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="flex justify-center mt-8 mb-8">
                        <div className="bg-gray-100 p-4 rounded-lg shadow-lg w-full max-w-md mx-4">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <img
                                        src={testimonial.icon}
                                        alt={testimonial.author}
                                        className="w-12 h-12 rounded-full mr-4"
                                    />
                                    <p className="font-bold text-lg text-primary">
                                        {testimonial.author}
                                    </p>
                                </div>
                                <FaQuoteLeft className="text-primary text-3xl" />
                            </div>
                            <p className="text-base mb-4">
                                {testimonial.description}
                            </p>
                            <div className="flex items-center">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <FaStar
                                        key={i}
                                        className={`text-yellow-400 ${i < testimonial.rating ? 'text-yellow-500' : ''}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Testimonial;
