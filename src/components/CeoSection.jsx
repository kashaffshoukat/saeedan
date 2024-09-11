import React from 'react';
import { atif } from '../assets';

const CEO_Section = () => {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 pt-12 md:pt-20  border-2 shadow-lg border-primary rounded-lg relative'>
                <div className='absolute inset-x-0 top-0 md:h-1/2 h-full bg-primary z-0'></div>

                <div className='relative flex justify-center items-center'>
                    <div className="w-full w-md md:w-md relative">
                        <img src={atif} alt="Muhammad Atif" className='flex mx-auto w-auto h-auto  md:h-[60vh]' />
                    </div>

                </div>

                <div className='flex flex-col justify-center p-4 md:p-8 z-40'>
                    <h2 className="text-3xl md:text-3xl leading-tight font-semibold text-center md:text-left text-white mb-4">
                        Mr Atif<br /><span className='text-white'>CEO</span> - Saeedan Technology
                    </h2>
                    <h3 className="text-xl md:text-3xl font-semibold text-center md:text-left lg:text-blue-800 text-white mt-5">
                        Our Vision
                    </h3>
                    <p className="text-lg md:text-black text-white md:text-2xl italic text-center md:text-left text-gray-700">
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
