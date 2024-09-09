import React, { useRef } from "react";

const JobApplication = () => {
  const fileInputRef = useRef(null);

  const handleFileUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      <div className="bg-primary h-[40vh] flex items-center justify-center text-white flex-col">
        <h1 className="text-6xl font-bold">We are hiring</h1>
        <h1 className="mt-4 text-2xl font-semibold">Join Our Team</h1>
      </div>

      <div className="p-14">
        <h2 className="text-2xl font-bold mb-2">Job Openings</h2>
      </div>

      <div className="container mx-auto px-10 py-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Basic Info</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name:
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name *"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email:
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email *"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="mobile"
              className="block text-gray-700 font-medium mb-2"
            >
              Mobile:
            </label>
            <input
              id="mobile"
              type="text"
              placeholder="Mobile Number *"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="linkedin"
              className="block text-gray-700 font-medium mb-2"
            >
              LinkedIn Profile:
            </label>
            <input
              id="linkedin"
              type="text"
              placeholder="LinkedIn Profile Link"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-gray-700 font-medium mb-2">
            Upload your Resume:
          </label>
          <div
            className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center bg-blue-50 cursor-pointer"
            onClick={handleFileUploadClick}
          >
            <p className="text-blue-600">Upload your Resume</p>
            <p className="text-sm text-gray-500 mt-1">
              Supported formats: PDF, DOC, DOCX
            </p>
          </div>

          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept=".pdf, .doc, .docx"
          />
        </div>

        <div className="mt-6 text-right">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobApplication;
