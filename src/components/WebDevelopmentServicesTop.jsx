import React from 'react'
import { mads } from '../assets'
import { FaAngleRight, FaArrowRightLong } from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";
import { FaRegStar } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const WebDevelopmentServicesTop = () => {
  return (
    <>
      <div className='grid grid-cols-12 text-white bg-blue-950'>
        <div className='col-span-7 px-20 py-12'>
          <div className='flex flex-col gap-8'>
            <h2 className='flex gap-2 text-lg'>Home <FaAngleRight className='mt-1' /> Servcies <FaAngleRight className='mt-1' />Web Development</h2>
            <h1 className='text-4xl font-bold'>Web Development Services</h1>
            <h1>Professional Web Development Services for Your Project</h1>
            <p>We are providing Custom Website and Web App Development Services for Years, With a 100% Satisfaction Rate.</p>
            <button className="flex gap-2 w-80 font-semibold text-md capitalize border border-black-500 bg-white text-black hover:bg-primary hover:text-white transition-colors duration-300  items-center justify-center space-x-2  py-2 px-5">
              Request Development Services <FaArrowRightLong className='mt-1' /> </button>
            <div className='flex flex-row gap-8'>
              <div className='border-r-2'>
                <h1 className='text-3xl'>Fiverr.</h1>
                
                  <div className='flex flex-row'>
                    <FaRegStar className='text-2xl' />
                    <FaRegStar className='text-2xl' />
                    <FaRegStar className='text-2xl' />
                    <FaRegStar className='text-2xl' />
                    <FaRegStar className='text-2xl' />

                  </div>

              </div>
              <div className='border-r-2'>
               <h1 className='text-3xl'>Upwork</h1>
                <div className='flex flex-row'>
                  <FaRegStar className='text-2xl' />
                  <FaRegStar className='text-2xl' />
                  <FaRegStar className='text-2xl' />
                  <FaRegStar className='text-2xl' />
                </div>
              </div>
              <div>
                <h1 className='text-3xl'>Google</h1>
                <div className='flex flex-row'>
                  <FaRegStar className='text-2xl' />
                  <FaRegStar className='text-2xl' />
                  <FaRegStar className='text-2xl' />
                  <FaRegStar className='text-2xl' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-5'>
          <img src={mads} alt="" />
        </div>
      </div>
    </>
  )
}

export default WebDevelopmentServicesTop
