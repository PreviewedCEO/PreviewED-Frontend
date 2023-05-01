import React from 'react';
import JobListing from './JobListing';

const JobList = ({ jobs }) => {
  return (
    <div>
      {jobs.map((job) => (
        <JobListing key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
