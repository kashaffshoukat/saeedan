import React from 'react'
import { useRef,useEffect } from 'react';
import {logo1, logo2, logo3, logo4, logo5, logo6} from '../assets';

const WebServicesSlider = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;

        if (slider) {
            const items = slider.children;
            const totalItems = items.length;
            const itemWidth = items[0].offsetWidth;

            slider.style.width = `${totalItems * itemWidth}px`;
            slider.style.animation = `slide ${totalItems * 1}s linear infinite`;

            for (let i = 0; i < totalItems; i++) {
                slider.appendChild(items[i].cloneNode(true));
            }
        }
    }, []);
    
  return (
      <div className='py-12'>
        <div className='text-3xl flex items-center justify-center'>
            <h1>BE AMONG THE 1% MOST PRODUCTIVE TEAMS IN THE WORLD</h1>
        </div>
       <div className="flex bg-[#052afb] h-24 mt-5 overflow-hidden">
            <div
                ref={sliderRef}
                className="flex items-center justify-center gap-14 whitespace-nowrap infinite-slider"
                >
                <div className="flex-shrink-0 p-2.5 text-xl font-bold">
                    <img src={logo1} className="h-10 flex items-center justify-center" alt="" />
                </div>
                <div className="flex-shrink-0 p-2.5 text-xl font-bold">
                    <img src={logo2} className="h-10" alt="" />
                </div>
                <div className="flex-shrink-0 p-2.5 text-xl font-bold">
                    <img src={logo3} className="h-10" alt="" />
                </div>
                <div className="flex-shrink-0 p-2.5 text-xl font-bold">
                    <img src={logo4} className="h-10" alt="" />
                </div>
                <div className="flex-shrink-0 p-2.5 text-xl font-bold">
                    <img src={logo5} className="h-10" alt="" />
                </div>
                <div className="flex-shrink-0 p-2.5 text-xl font-bold">
                    <img src={logo6} className="h-10" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default WebServicesSlider



