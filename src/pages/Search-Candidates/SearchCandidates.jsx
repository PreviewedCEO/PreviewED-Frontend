import React from "react";
import CandidateCard from "./CandidateCard"; // Import your CandidateCard component

const SearchCandidates = () => {
  // Sample candidate data (replace with your own data)
  const candidates = [
    {
      id: 1,
      name: "John Doe",
      location: "New York",
      profilePicture: "https://example.com/profiles/john-doe.jpg",
      videoUrl: "https://example.com/videos/john-doe-preview.mp4",
    },
    {
      id: 2,
      name: "Jane Smith",
      location: "Los Angeles",
      profilePicture: "https://example.com/profiles/jane-smith.jpg",
      videoUrl: "https://example.com/videos/jane-smith-preview.mp4",
    },
    // Add more candidate objects as needed
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {candidates.map((candidate) => (
        <CandidateCard key={candidate.id} candidate={candidate} />
      ))}
    </div>
  );
};

export default SearchCandidates;
