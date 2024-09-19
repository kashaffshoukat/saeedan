import React from 'react'
import { blogpic, zubairp } from '../../assets'

const BlogsCustomSliderCard = ({heading1,heading2,blogpic}) => {
  return (
      <div className='bg-[#d3d3d3] shadow-lg'>
        <img src={`https://test.saeedantechpvt.com/${blogpic}`} alt="" className=' w-full object-cover ' />
    <div className='bg-[#d3d3d3] p-4'>
    <p className='text-lg text-left mt-2'>{heading1}</p>
    <p className='text-base text-[#636266] font-medium text-left'>{heading2}</p>
    </div>
</div>
  )
}
 
export default BlogsCustomSliderCard
