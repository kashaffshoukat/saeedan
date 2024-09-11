import React from 'react'

const OurProcessData = ({number,title,description}) => {
  return (
   
       <div className='flex gap-2'>
                        <h1 className='text-[#2e50ac] text-2xl mt-1'>{number}</h1>
                        <div className='border-l-2 border-[#2e50ac]'>
                            <h1 className='text-2xl ml-2'>{title}</h1>
                            <p className='ml-2'>{description}</p>
                        </div>
                    </div>
  )
}

export default OurProcessData
