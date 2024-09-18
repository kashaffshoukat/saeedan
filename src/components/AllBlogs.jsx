import React from 'react';
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const AllBlogs = ({ blogs }) => {
    const imageUrl = 'https://test.saeedantechpvt.com/';

    return (
        <>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-5">
                <div className="flex-1">
                    <h2 className="text-2xl sm:text-4xl font-bold">Latest Blog Posts</h2>
                </div>
                <div className="flex-shrink-0">
                    <div className="flex items-center bg-white rounded-full border border-gray-400">
                        <input
                            placeholder="Search..."
                            type="text"
                            className="p-2 text-gray-600 rounded-full focus:outline-none flex-grow"
                        />
                        <div className="p-2">
                            <FaSearch className="text-gray-400" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:py-8">
                {blogs.map((blog, index) => (
                    <Link key={index} to={`/blog/${blog.slug_url}`}>
                        <div className="bg-white p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <img
                                src={`${imageUrl}${blog.img}`}
                                alt={blog.img_alt_text}
                                className="h-40 w-full object-cover rounded-lg mb-4"
                            />
                            <p className="text-lg font-semibold text-left mb-2">{blog.title}</p>
                            <div
                                className="text-sm text-gray-600 font-medium text-left mb-4 line-clamp-2"
                                dangerouslySetInnerHTML={{ __html: blog.description }}
                            />
                            <hr className="my-2" />
                            <div className="flex items-center gap-3 mt-3">
                                <img
                                    src={blog.authors.length > 0 ? `${imageUrl}${blog.authors[0].img}` : ''}
                                    alt={blog.authors.length > 0 ? blog.authors[0].name : 'No Author'}
                                    className="h-12 w-12 object-cover rounded-full"
                                />
                                <div className="flex flex-col cursor-pointer">
                                    <span className="font-semibold">
                                        {blog.authors.length > 0 ? blog.authors[0].name : 'No Author Found'}
                                    </span>
                                    <span className="text-xs text-gray-500">
                                        {blog.authors.length > 0 ? blog.authors[0].position : ''}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default AllBlogs;