import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-white">
      <div className="text-center">
        <div className="text-red-600 font-bold text-9xl">Oops...!</div>
        <div className="flex justify-center text-4xl font-extrabold mt-4">
          <div>Error 404:</div>
          <div className="ml-4">Page Not Found</div>
        </div>
        <div className="font-bold mt-4">
          We're sorry. The page you requested could not be found at the moment
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            to="/"
            className="w-44 h-8 bg-red-600 text-white font-bold text-sm rounded-full flex items-center justify-center hover:bg-red-800"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
