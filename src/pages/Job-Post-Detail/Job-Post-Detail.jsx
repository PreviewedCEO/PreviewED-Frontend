import React from "react";
import { FaPlayCircle } from "react-icons/fa";

const JobDetail = () => {
  return (
    <div className="bg-white rounded-lg shadow p-8">
      <h2 className="text-2xl font-bold mb-4">Job Title</h2>
      <p className="text-lg mb-4">Company Name - Location</p>
      
      <div className="relative mb-6">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/8O9FCMlOl7s"
            title="Day in the Life Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <FaPlayCircle className="absolute text-6xl text-gray-300 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="flex justify-between items-center mb-4">
        <p className="text-lg font-medium">Salary: $55,000 per year</p>
        <p className="text-lg font-medium">Benefits: 401k, Health, Dental</p>
      </div>

      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Apply Now
      </button>
    </div>
  );
};

export default JobDetail;
