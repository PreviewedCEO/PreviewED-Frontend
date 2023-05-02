import React from 'react';
import JobListing from './JobListing';

const RecommendedJobs = ({ jobs }) => {
  return (
    <div>
      <h2>Recommended Jobs</h2>
      {jobs.map((job) => (
        <JobListing key={job.id} job={job} />
      ))}
    </div>
  );
};

export default RecommendedJobs;
