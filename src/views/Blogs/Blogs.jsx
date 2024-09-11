import React from 'react'
import Blogstopsection from '../../components/Blogstopsection'
import AllBlogs from '../../components/AllBlogs'

const Blogs = () => {
  return (
   <>
   <Blogstopsection/>
   <div className='p-8'>
   <AllBlogs/>
   </div>
   </>
  
  )
}

export default Blogs