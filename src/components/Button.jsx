import React from 'react';

const Button = ({ type, className, onClick, children, icon }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full font-semibold text-md capitalize border border-black-500 bg-transparent hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center space-x-2  py-2 px-5  ${className}`}
    >
      <span className="">{children}</span>
      {icon && <span className="mr-2">{icon}</span>}
    </button>
  );
};

export default Button;
