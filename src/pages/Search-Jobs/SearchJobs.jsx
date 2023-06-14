import React from "react";
import JobCard from "./JobCard"; // Import your JobCard component

const SearchJobs = () => {
  // Sample job data (replace with your own data)
  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      thumbnail: "https://example.com/thumbnails/software-engineer.jpg",
    },
    {
      id: 2,
      title: "Marketing Manager",
      thumbnail: "https://example.com/thumbnails/marketing-manager.jpg",
    },
    // Add more job objects as needed
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default SearchJobs;

