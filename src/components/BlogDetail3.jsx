import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogDetail3 = () => {
  const navigate = useNavigate()

  const gointouch=()=>{
    navigate('/GetInTouch')
  }
  return (
    <div className='flex items-center justify-center text-center h-[40vh] md:h-[50vh] lg:h-[60vh] my-12 bg-[#2e5090] px-4 md:px-8'>
      <div>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-white'>
          Your Website, Our Expertise
        </h1>
        <p className='text-sm md:text-base lg:text-lg text-white mt-3'>
          Why struggle with development environments? Our skilled developers will bring your website to life, handling everything from design to deployment. Contact us for a free consultation!
        </p>
        <div className='flex flex-col items-center justify-center mt-3 md:flex-row gap-4 md:gap-6'>
          <button onClick={gointouch} className='p-2 text-sm md:text-base bg-[#2e5090] text-white rounded-md shadow-lg cursor-pointer'>
            Talk to Expert Now
          </button>
          <button className='p-2 text-sm md:text-base border border-[#2e5090] bg-white font-light text-[#2e5090] rounded-md shadow-lg cursor-pointer'>
            Review Web Development Services
          </button>
        </div>
      </div>
    </div>
  )
}

export default BlogDetail3
