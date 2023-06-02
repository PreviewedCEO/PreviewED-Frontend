import React, { useState } from "react";

const SearchBarLocation = () => {
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
    <div className="flex items-center justify-center">
      {/* Search Bar */}
      <input
        type="text"
        className="border border-gray-300 px-4 py-2 rounded-l-md focus:outline-none focus:ring focus:border-blue-500"
        placeholder="Enter your search term..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Dropdown Menu */}
      <select
        className="border border-l-0 border-gray-300 px-4 py-2 rounded-none focus:outline-none focus:ring focus:border-blue-500"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Search Button */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBarLocation;
