import React from 'react'
import { blogpic, zubairp } from '../assets';
import { useNavigate } from 'react-router-dom';

const BlogCustomCard = ({ heading1, heading2, name, position }) => {
    const navigate = useNavigate();

    const goblogdetail = () => {
        navigate("/BlogsDetailsComponent");
    }

    return (
        <div className='bg-white p-4 rounded-lg shadow-lg'>
            <img src={blogpic} alt="" className='h-1/2 w-full object-cover rounded-xl' />
            <p className='text-lg font-semibold text-left mt-2'>{heading1}</p>
            <p className='text-base text-[#636266] font-medium text-left'>{heading2}</p>
            <hr className='my-2' />
            <div className='flex items-center gap-2'>
                <img src={zubairp} alt="" className='h-12 w-12 object-cover rounded-full' />
                <div className='flex flex-col'>
                    <h1 onClick={goblogdetail} className='text-start cursor-pointer font-semibold'>{name}</h1>
                    <p>{position}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogCustomCard;
