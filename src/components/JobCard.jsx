import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="border border-gray-200 p-4 rounded mb-4">
      <h3 className="text-xl font-bold">{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <div>
        <video
          src={job.previewVideoUrl}
          controls
          width="100%"
          height="auto"
          className="rounded"
        />
      </div>
      <a href={`/job/${job.id}`} className="text-blue-600">
        View Details
      </a>
    </div>
  );
};

export default JobCard;
