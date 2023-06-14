import React from "react";

const JobPost = () => {
  // Sample job post data (replace with your own data)
  const jobPost = {
    title: "Software Engineer",
    companyName: "ABC Company",
    location: "New York, NY",
    dayInTheLifeVideo: "https://example.com/videos/day-in-the-life.mp4",
    jobRole: "Full-time",
    payAndBenefits: "Competitive salary and comprehensive benefits package",
    timeframe: "Posted on May 1, 2023 - Apply by May 31, 2023",
    applicants: 25,
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">{jobPost.title}</h2>
      <h3 className="text-lg">{jobPost.companyName}</h3>
      <p>{jobPost.location}</p>

      <video src={jobPost.dayInTheLifeVideo} controls className="my-4" />

      <h3 className="text-xl font-semibold">Job Role</h3>
      <p>{jobPost.jobRole}</p>

      <h3 className="text-xl font-semibold">Pay and Benefits</h3>
      <p>{jobPost.payAndBenefits}</p>

      <h3 className="text-xl font-semibold">Timeframe</h3>
      <p>{jobPost.timeframe}</p>

      <div>
        <h3 className="text-xl font-semibold">Applicants</h3>
        <p>{jobPost.applicants} have applied</p>
        <p>Click to see your ranking among applicants</p>
      </div>
    </div>
  );
};

export default JobPost;

