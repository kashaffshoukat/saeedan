import React from 'react';

const BenefitsCard = ({ icon, title, description }) => {
    return (
        <div className="border border-gray-300 rounded-lg p-4 shadow-md flex items-start space-x-4">
            <div className="text-3xl text-blue-500">
                {icon}
            </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="text-sm text-gray-600 mt-1">{description}</p>
            </div>
        </div>
    );
};

export default BenefitsCard;
