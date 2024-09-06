import React from 'react';

const ServiceHomeCard = ({ icon, mainHeading, subHeadings }) => {
    return (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-gray-200 rounded-xl p-8 shadow-2xl max-w-md hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white transition duration-100">
            {/* Icon */}
            <div className="text-6xl text-blue-600 mb-6 hover:text-white">
                {icon}
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl font-semibold mb-4 text-gray-800  hover:text-white">
                {mainHeading}
            </h2>

            {/* Subheadings */}
            <ul className="space-y-3">
                {subHeadings.map((subHeading, index) => (
                    <li key={index} className="text-gray-600 text-base  hover:text-gray-100">
                        {subHeading}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServiceHomeCard;
