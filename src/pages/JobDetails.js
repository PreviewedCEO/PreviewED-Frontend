import React, { useState, useEffect } from 'react';

const JobDetails = ({ match }) => {
  const jobId = match.params.id;
  const [job, setJob] = useState(null);

  useEffect(() => {
    // Fetch the job details from your API and update the state.
    // Replace this with an actual API call.
    setJob({
      id: jobId,
      title: 'Job Title',
      company: 'Company Name',
      location: 'Location',
      description: 'Job Description',
      previewVideoUrl: 'https://example.com/preview-video.mp4',
    });
  }, [jobId]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.description}</p>
      <div>
        <video
          src={job.previewVideoUrl}
          controls
          width="100%"
          height="auto"
          className="rounded"
        />
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Apply Now</button>
    </div>
  );
};

export default JobDetails;
