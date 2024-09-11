import React from 'react';
import { blogpic2 } from '../assets'; // Removed blogpic import as it's not used
import Button from './Button';

const BlogDetail = () => {
    return (
        <div className='grid grid-cols-12 px-20 py-12'>
            <div className='col-span-6 my-auto flex flex-col gap-5 items-start justify-start'>
                <h1 className='text-2xl font-semibold text-[#2e76bf]'>Transform Your Vision into Reality</h1>
                <p className='text-md mb-6'>
                    Skip the local setup headaches. Let our expert team develop your website from start to finish,
                    using cutting-edge tools and best practices. Get your professional site up and running faster!
                </p>
                {/* <div className='flex flex-col'>
              <Button>Talk to Expert Now</Button>
              <Button>Review Web Development Services</Button>
                </div> */}
            </div>
            <div className='col-span-6'>
                <img src={blogpic2} alt='' className='mx-auto w-auto h-auto' />
            </div>
        </div>
    );
};

export default BlogDetail;
