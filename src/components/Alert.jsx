import React from 'react';

const Alert = ({ type, message }) => {
    const baseStyle = 'p-4 rounded-md mb-4 text-sm';
    let alertStyle = '';

    switch (type) {
        case 'success':
            alertStyle = 'bg-green-100 text-green-700';
            break;
        case 'error':
            alertStyle = 'bg-red-100 text-red-700';
            break;
        case 'warning':
            alertStyle = 'bg-yellow-100 text-yellow-700';
            break;
        case 'info':
            alertStyle = 'bg-blue-100 text-blue-700';
            break;
        default:
            alertStyle = 'bg-gray-100 text-gray-700';
    }

    return (
        <div className={`${baseStyle} ${alertStyle}`}>
            {message}
        </div>
    );
};

export default Alert;
