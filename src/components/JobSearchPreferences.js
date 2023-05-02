import React, { useState } from 'react';

const JobSearchPreferences = () => {
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [salaryRange, setSalaryRange] = useState('');

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleJobTypeChange = (e) => {
    setJobType(e.target.value);
  };

  const handleSalaryRangeChange = (e) => {
    setSalaryRange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to the server
  };

  return (
    <div>
      <h2>Job Search Preferences</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" value={location} onChange={handleLocationChange} />

        <label htmlFor="job-type">Job Type:</label>
        <select id="job-type" value={jobType} onChange={handleJobTypeChange}>
          <option value="">Select Job Type</option>
          <option value="full-time">Full-Time</option>
          <option value="part-time">Part-Time</option>
          <option value="contract">Contract</option>
        </select>

        <label htmlFor="salary-range">Salary Range:</label>
        <select id="salary-range" value={salaryRange} onChange={handleSalaryRangeChange}>
          <option value="">Select Salary Range</option>
          <option value="0-50000">$0 - $50,000</option>
          <option value="50000-100000">$50,000 - $100,000</option>
          <option value="100000-150000">$100,000 - $150,000</option>
          <option value="150000+">$150,000+</option>
        </select>

        <button type="submit">Save Preferences</button>
      </form>
    </div>
  );
};

export default JobSearchPreferences;
