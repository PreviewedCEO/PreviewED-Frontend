import React, { useState } from "react";
import SearchBarLocation from "../../../components/SearchBarLocation";

const ExploreJobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("option1");
  const options = [
    { id: "option1", label: "Option 1" },
    { id: "option2", label: "Option 2" },
    { id: "option3", label: "Option 3" },
  ];

  const handleSearch = () => {
    // Perform search logic here
    console.log("Searching for:", searchTerm);
    console.log("Selected option:", selectedOption);
  };

  return (
    <div className="flex p-8 bg-white">
      <div className="grid grid-cols-2 gap-2 pl-4 place-items-center">
        <div className="col-span-1">
          <p>Explore More Jobs</p>

          <div className="flex items-center justify-center">
            <SearchBarLocation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreJobs;
