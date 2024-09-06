import React from 'react';

const Card = ({ title, image, description }) => {
    return (
        <>
            <article className='p-4 bg-white rounded-lg shadow-lg'>
                <div className="w-full h-42 md:h-36 mb-3">
                    <img src={image} alt="card-img" className='rounded w-full h-full object-cover' />
                </div>
                <h4 className='text-lg font-semibold text-gray-900 mb-2 truncate'>{title}</h4>
                <p className='text-sm text-gray-700 leading-relaxed'>{description}</p>
            </article>
        </>
    );
};

export default Card;
