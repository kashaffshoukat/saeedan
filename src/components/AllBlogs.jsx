import React from 'react'
import { FaSearch } from "react-icons/fa";
import BlogCustomCard from './BlogCustomCard';

const AllBlogs = () => {

    const blogsdata = [
        {
            heading1: 'XAMPP vs Laravel Herd: Choosing the Right Local Development Environment',
            heading2: 'Compare XAMPP and Laravel Herd for local PHP...',
            name: 'Abdul Basit Khan',
            position: 'Cheif Marketing Officer - CMO'
        },
        {
            heading1: 'XAMPP vs Laravel Herd: Choosing the Right Local Development Environment',
            heading2: 'Compare XAMPP and Laravel Herd for local PHP...',
            name: 'Abdul Basit Khan',
            position: 'Cheif Marketing Officer - CMO'
        },
        {
            heading1: 'XAMPP vs Laravel Herd: Choosing the Right Local Development Environment',
            heading2: 'Compare XAMPP and Laravel Herd for local PHP...',
            name: 'Abdul Basit Khan',
            position: 'Cheif Marketing Officer - CMO'
        },
    ]
    return (
        <>
            <div className="flex justify-between items-center gap-2 py-5">
                <div>
                    <h2 className="text-4xl font-bold">
                        Latest Blog Posts
                    </h2>
                </div>
                <div>
                    <div className="flex items-center bg-white rounded border ">
                        <input
                            placeholder="Search..."
                            type="text"
                            className="mr-2 p-2 text-gray-600"
                        />
                        <div className="p-2">
                            <FaSearch className="text-gray-600" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 md:gap-8 py-12 md:py-16">
                {blogsdata.map((data, index) => (
                    <div key={index}>
                        <BlogCustomCard
                            heading1={data.heading1}
                            heading2={data.heading2}
                            name={data.name}
                            position={data.position}
                        />
                    </div>
                ))}
            </div>

        </>

    )
}

export default AllBlogs