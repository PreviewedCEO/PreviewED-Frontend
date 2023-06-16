import React from "react";

import JobCard from "../../components/JobCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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
    <>
      <Header />
      <div className="flex flex-wrap justify-center">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default SearchJobs;
