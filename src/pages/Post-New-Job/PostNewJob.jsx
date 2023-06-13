import React from "react";

const PostNewJob = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-6">Post New Job</h1>
      <div className="flex flex-col">
        <label htmlFor="jobTitle" className="mb-2">
          Job Title
        </label>
        <input
          type="text"
          id="jobTitle"
          className="border rounded py-2 px-3 mb-4"
          placeholder="Enter job title"
        />

        <label htmlFor="jobDescription" className="mb-2">
          Job Description
        </label>
        <textarea
          id="jobDescription"
          className="border rounded py-2 px-3 mb-4"
          placeholder="Enter job description"
        ></textarea>

        <label htmlFor="jobRequirements" className="mb-2">
          Job Requirements
        </label>
        <textarea
          id="jobRequirements"
          className="border rounded py-2 px-3 mb-4"
          placeholder="Enter job requirements"
        ></textarea>

        <label htmlFor="companyName" className="mb-2">
          Company Name
        </label>
        <input
          type="text"
          id="companyName"
          className="border rounded py-2 px-3 mb-4"
          placeholder="Enter company name"
        />

        <label htmlFor="companyWebsite" className="mb-2">
          Company Website
        </label>
        <input
          type="text"
          id="companyWebsite"
          className="border rounded py-2 px-3 mb-4"
          placeholder="Enter company website"
        />

        <button className="bg-blue-500 text-white rounded py-2 px-4">
          Submit
        </button>
      </div>
    </div>
  );
};

export default PostNewJob;
