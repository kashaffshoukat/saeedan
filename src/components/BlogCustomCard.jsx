import React from 'react'
import {blogpic, zubairp} from '../assets';


const BlogCustomCard = ({heading1,heading2,name,position}) => {
  return (
  <div>
     <div className='mt-4'>
      <div className='relative h-auto rounded-xl flex justify-center items-center flex-col w-[28vw]'>
        <img src={blogpic} alt="" className='h-[60vh] w-[30vw] rounded-xl' />
        <div>
          <div className='bg-white py-2 px-0 w-full absolute bottom-0 right-0 left-0 text-center shadow-md'>
            <p className='text-lg text-left pl-2'>{heading1}</p>
            <p className='text-base text-blue-500 font-medium text-left pl-2'>{heading2}</p>
          <hr/>
          <div className='flex gap-2'>
          <img src={zubairp} alt="" className='h-12 w-12 object-cover rounded-full mt-2 ml-1 ' /> 
          <div className='flex flex-col mt-2'>
          <h1 className='text-start font-semibold'>{name}</h1>
          <p>{position}</p>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BlogCustomCard

