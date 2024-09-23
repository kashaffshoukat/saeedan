import React, { useState, useEffect } from 'react';
import AllBlogs from '../../components/AllBlogs';
import { GetAllBlog } from '../../utils/_BLOG';
import CustomTopComponent from '../../components/CustomTopComponent';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await GetAllBlog();  
        setBlogs(response.data.payload);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <CustomTopComponent title1={'Saeedan Technology Blog'} description={'Blog about Technology, Business, Programming, Development, Marketing, and Artificial Intelligence'} btnLabel={'Contact Us'} />
      <div className='p-4'>
        <AllBlogs blogs={blogs} />
      </div>
    </>
  );
};

export default Blogs;
