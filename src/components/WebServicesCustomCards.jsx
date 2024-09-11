import React from 'react';
import Webdevelopmenmtservice from '../views/WebDevelopmentServices/WebDevelopmentServices' 
import { FaArrowRight } from "react-icons/fa6";
const WebServicesCustomCards = ({program,para}) => {
  return (
    <div className='py-12'>
     <div className="relative w-44 h-72 perspective">
      <div className="card-inner h-[100%] w-[100%]">
        <div className="card-front bg-white text-start border rounded-xl py-20 pl-2 shadow-lg">
          <h2 className="text-xl font-extralight border-b-2 w-[95%] border-blue-700 ">{program}</h2>
        </div>
        <div className="card-back flex flex-col gap-4 text-start bg-blue-500 rounded-xl  text-white p-4 shadow-lg">
          <h2 className="text-lg font-bold">{program}</h2>
          <p className='text-sm '>{para}</p>
          <FaArrowRight className='text-2xl mx-auto'/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WebServicesCustomCards;
