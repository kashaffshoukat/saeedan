import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const MainFeaturesData = ({title,description,icon}) => {
  return (
    <div className='flex gap-2'>
     <h1 className='text-[#2e50ac] text-2xl mt-1'>{icon}</h1>
      <div>
        <h1 className='text-2xl'>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default MainFeaturesData