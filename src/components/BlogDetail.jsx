import React from 'react';
import { blogpic2 } from '../assets'; // Removed blogpic import as it's not used
import Button from './Button'; // Assuming you might want to use this later
import { RiH1 } from 'react-icons/ri'; // Not used in this code
import { Link } from 'react-router-dom';

const BlogDetail = ({blogs}) => {

    return (
        <div className="p-12 mt-20">
            {blogs &&
                blogs.c_t_a &&
                blogs.c_t_a.cta_bottom_title &&
                blogs.c_t_a.cta_bottom_description &&
                blogs.c_t_a.cta_top_image &&
                blogs.c_t_a.cta_top_link &&
                blogs.c_t_a.button_one_title &&
                blogs.c_t_a.button_two_title && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-6">
                                {blogs.c_t_a.cta_top_title}
                            </h2>
                            <p className="mb-6">{blogs.c_t_a.cta_top_description}</p>
                            <div className="flex gap-4">
                                <button
                                    className="bg-blue-600 text-white py-2 px-4 rounded text-base transition duration-200 hover:bg-blue-700 focus:outline-none"
                                    // onClick={S   crollToContact}
                                >
                                    {blogs.c_t_a.button_one_title}
                                </button>
                                <Link to={blogs.c_t_a.cta_top_link} target="_blank">
                                    <button
                                        className="border border-blue-600 text-blue-600 py-2 px-4 rounded text-base transition duration-200 hover:bg-blue-600 hover:text-white focus:outline-none"
                                        onClick={() => window.open(blogs.c_t_a.cta_top_link, "_blank")}
                                    >
                                        {blogs.c_t_a.button_two_title}
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <img
                                src={`https://test.saeedantechpvt.com/${blogs.c_t_a.cta_top_image}`}
                                alt="CTA Image"
                                className="w-72 sm:w-96 md:w-[430px] lg:w-[430px] xl:w-[430px] h-auto"
                            />
                        </div>
                    </div>
                )}
        </div>
    )
};

export default BlogDetail;
