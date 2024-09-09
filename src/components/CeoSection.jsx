import React from 'react';
import { atif } from '../assets';

const CEO_Section = () => {
    return (
        <>
         <div className='grid grid-cols-12 pt-[6rem] my-12 border-2 shadow-lg mx-20 px-5 border-primary rounded-lg relative'>
    <div className='absolute inset-x-0 top-0 h-1/2 bg-primary z-0'></div>

    <div className='col-span-6 relative'>
        <div className="w-full h-[50vh] relative">
            <div className="absolute  w-4/5 max-w-md bottom-0 left-[160px]">
                <img src={atif} alt="Muhammad Atif" className='h-[60vh]' />
            </div>
        </div>
    </div>
    <div className='col-span-6 z-50'>
        <div>
            <h2 className="text-5xl leading-relaxed font-semibold text-center md:text-left text-white mb-4">
                Mr Atif<br /><span className='text-white'>CEO</span>- Saeedan Technology
            </h2>
            <h3 className="text-3xl font-semibold text-center md:text-left text-blue-800 mb-4">
                Our Vision
            </h3>
            <p className="text-2xl italic text-center md:text-left text-gray-700">
                We believe in the transformative power of technology, and
                we're excited to share that passion with our clients,
                inspiring them to embrace new possibilities.
            </p>
        </div>
    </div>
</div>

        </>
    );
};

export default CEO_Section;
