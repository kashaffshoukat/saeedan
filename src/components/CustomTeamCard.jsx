import React, { useState } from 'react';

const CustomTeamCard = ({ name, position, Image, backgroundColor,backgroundImage }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=''>
      <div 
        className='relative h-[50vh] flex justify-center items-center flex-col w-full shadow-md cursor-pointer transition-all duration-700 ease-in-out'
        style={{
          backgroundColor: backgroundColor || '#D03AE9',
          backgroundImage: isHovered ? `url(${backgroundImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          <img 
            src={Image} 
            alt={name} 
            className='h-full absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2'
          />
          <div className='bg-white py-2 px-0 w-full absolute bottom-0 right-0 left-0 text-center shadow-md'>
            <p className='text-lg font-semibold text-left pl-5'>{name}</p>
            <p className='text-base font-medium text-left pl-5 text-theme-primary'>{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomTeamCard;