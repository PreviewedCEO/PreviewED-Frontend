import React from 'react';
import { Link } from 'react-router-dom';

const JobApplications = ({ jobApplications }) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4">Job Applications</h2>
      {jobApplications.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobApplications.map((jobApplication) => (
            <div
              key={jobApplication.id}
              className="bg-white p-4 rounded-md shadow-md"
            >
              <h3 className="text-lg font-semibold">{jobApplication.jobTitle}</h3>
              <p className="text-sm text-gray-500 mb-2">{jobApplication.companyName}</p>
              <p className="text-sm text-gray-500 mb-2">{jobApplication.jobLocation}</p>
              <p className="text-sm text-gray-500 mb-2">{jobApplication.status}</p>
              <div className="flex items-center mt-4">
                <Link
                  to={`/jobs/${jobApplication.jobId}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  View Job
                </Link>
                <span className="ml-auto text-gray-500 text-sm">
                  Applied on {jobApplication.dateApplied}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>You have not applied to any jobs yet.</p>
      )}
    </div>
  );
};

export default JobApplications;
