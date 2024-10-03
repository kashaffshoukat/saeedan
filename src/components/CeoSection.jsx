import React from 'react';
import { atif} from '../assets';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";


const CEO_Section = () => {
    return (
        <>
            {/* <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-12">
                <h1 className="text-3xl md:text-5xl font-semibold">
                    Our <span className="text-[#0A6EB7]">Team</span>
                </h1>
                <h2 className="text-lg md:text-2xl text-center">
                    This is our team, a lot of smiling happy people who work hard to
                    empower your teams.
                </h2>
                <div className="border-b-4 text-[#0A6EB7] h-2 md:h-3 w-[40%] md:w-[15%]"></div>
                <img src={teamAll} alt="Team All" className="w-full object-cover md:w-auto" />
            </div> */}
            <div className='grid grid-cols-1 md:grid-cols-2 pt-12 md:pt-20 m-3 border-2 shadow-lg border-primary rounded-lg relative'>
                <div className='absolute inset-x-0 top-0 md:h-1/2 h-full bg-primary z-0'></div>

                <div className='relative flex justify-center items-center'>
                    <div className="w-full w-md md:w-md relative">
                        <LazyLoadImage src={atif} alt="Muhammad Atif" className='flex object-cover mx-auto w-72 h-auto md:w-auto  md:h-[60vh]' />
                    </div>

                </div>

                <div className='flex flex-col justify-center p-4 md:p-8 z-40'>
                    <h2 className="text-xl md:text-3xl leading-tight font-semibold text-center md:text-left text-white mb-8">
                        Mr Atif<br /><span className='text-white'>CEO</span> - Saeedan Technology
                    </h2>
                    <h3 className="text-xl md:text-3xl font-semibold text-center md:text-left md:text-blue-800 text-white md:mt-8">
                        Our Vision
                    </h3>
                    <p className="text-md md:text-black text-white md:text-2xl italic text-center md:text-left text-gray-700">
                        We believe in the transformative power of technology, and
                        we're excited to share that passion with our clients,
                        inspiring them to embrace new possibilities.
                    </p>
                </div>
            </div>
        </>
    );
};

export default CEO_Section;
