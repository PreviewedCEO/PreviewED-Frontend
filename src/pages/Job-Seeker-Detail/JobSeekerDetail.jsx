import React from "react";

const JobSeekerDetail = () => {
  // Sample job seeker data (replace with your own data)
  const jobSeeker = {
    name: "John Doe",
    profilePicture: "https://example.com/profiles/john-doe.jpg",
    coverLetterVideo: "https://example.com/videos/john-doe-cover-letter.mp4",
    workExperiences: [
      {
        id: 1,
        title: "Software Engineer",
        company: "ABC Company",
        duration: "2018 - Present",
      },
      // Add more work experience objects as needed
    ],
    assessmentScore: 85,
    personalityClassification: "Analytical",
    preferences: ["Remote Work", "Full-time"],
    education: "Bachelor's Degree in Computer Science",
    certifications: ["Certified ScrumMaster", "AWS Certified Developer"],
    skills: ["JavaScript", "React", "Node.js"],
    achievements: ["Hackathon Winner 2020", "Outstanding Performance Award"],
  };

  return (
    <div>
      <div className="flex items-center">
        <img
          src={jobSeeker.profilePicture}
          alt="Profile"
          className="w-24 h-24 rounded-full"
        />
        <h2 className="ml-4 text-2xl font-bold">{jobSeeker.name}</h2>
      </div>

      <video src={jobSeeker.coverLetterVideo} controls className="my-4" />

      <h3 className="text-xl font-semibold">Work Experiences</h3>
      {jobSeeker.workExperiences.map((experience) => (
        <div key={experience.id}>
          <h4>{experience.title}</h4>
          <p>{experience.company}</p>
          <p>{experience.duration}</p>
        </div>
      ))}

      <h3 className="text-xl font-semibold">Assessment Score</h3>
      <p>{jobSeeker.assessmentScore}</p>

      <h3 className="text-xl font-semibold">Personality Classification</h3>
      <p>{jobSeeker.personalityClassification}</p>

      <h3 className="text-xl font-semibold">Preferences</h3>
      <ul>
        {jobSeeker.preferences.map((preference) => (
          <li key={preference}>{preference}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold">Education</h3>
      <p>{jobSeeker.education}</p>

      <h3 className="text-xl font-semibold">Certifications</h3>
      <ul>
        {jobSeeker.certifications.map((certification) => (
          <li key={certification}>{certification}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold">Skills</h3>
      <ul>
        {jobSeeker.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold">Achievements</h3>
      <ul>
        {jobSeeker.achievements.map((achievement) => (
          <li key={achievement}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobSeekerDetail;

