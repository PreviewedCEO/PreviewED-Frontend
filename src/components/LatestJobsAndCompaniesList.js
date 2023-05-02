import React from 'react';
import { Link } from 'react-router-dom';

const LatestJobsAndCompaniesList = () => {
  const latestJobs = [
    {
      id: 1,
      title: 'Front-end Developer',
      company: 'Apple',
      location: 'San Francisco, CA',
      url: '/jobs/1',
    },
    {
      id: 2,
      title: 'Full-stack Developer',
      company: 'Google',
      location: 'Mountain View, CA',
      url: '/jobs/2',
    },
    // add more jobs here
  ];

  const latestCompanies = [
    {
      id: 1,
      name: 'Apple',
      logo: 'https://example.com/apple-logo.png',
      url: '/companies/1',
    },
    {
      id: 2,
      name: 'Google',
      logo: 'https://example.com/google-logo.png',
      url: '/companies/2',
    },
    // add more companies here
  ];

  return (
    <div>
      <h2>Latest Jobs</h2>
      <ul>
        {latestJobs.map(job => (
          <li key={job.id}>
            <Link to={job.url}>{job.title} at {job.company} in {job.location}</Link>
          </li>
        ))}
      </ul>

      <h2>Latest Companies</h2>
      <ul>
        {latestCompanies.map(company => (
          <li key={company.id}>
            <Link to={company.url}><img src={company.logo} alt={company.name} /></Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestJobsAndCompaniesList;
