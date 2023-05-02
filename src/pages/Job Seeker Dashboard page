import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const JobSeekerDashboard = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [applications, setApplications] = useState([]);
  const [profile, setProfile] = useState({});

  // Fetch user data from the API
  useEffect(() => {
    axios.get('/api/users/me').then((res) => {
      const user = res.data;
      setProfile(user.profile);
      setApplications(user.applications);
      // Fetch personalized job recommendations based on user profile
      axios.get(`/api/recommendations?skills=${user.profile.skills}`).then((res) => {
        setRecommendations(res.data);
      });
    });
  }, []);

  // Render job recommendations
  const renderRecommendations = () => {
    if (recommendations.length === 0) {
      return <p>No recommendations found.</p>;
    }
    return recommendations.map((job) => (
      <div key={job.id} className="job">
        <h3>{job.title}</h3>
        <p>{job.description}</p>
        <Link to={`/jobs/${job.id}`}>View Job Details</Link>
      </div>
    ));
  };

  // Render job applications
  const renderApplications = () => {
    if (applications.length === 0) {
      return <p>No job applications found.</p>;
    }
    return applications.map((job) => (
      <div key={job.id} className="job">
        <h3>{job.title}</h3>
        <p>Status: {job.status}</p>
        <Link to={`/jobs/${job.id}`}>View Job Details</Link>
      </div>
    ));
  };

  return (
    <div className="job-seeker-dashboard">
      <h1>Welcome, {profile.fullname}!</h1>
      <h2>Personalized Job Recommendations</h2>
      <div className="recommendations">{renderRecommendations()}</div>
      <h2>Job Applications</h2>
      <div className="applications">{renderApplications()}</div>
      <h2>Manage Profile Information</h2>
      <p>Full Name: {profile.fullname}</p>
      <p>Email: {profile.email}</p>
      <p>Skills: {profile.skills}</p>
      <Link to="/profile/edit">Edit Profile</Link>
      <h2>Manage Job Search Preferences</h2>
      <p>Location: {profile.location}</p>
      <p>Salary: {profile.salary}</p>
      <p>Job Type: {profile.jobType}</p>
      <Link to="/search/preferences">Edit Search Preferences</Link>
    </div>
  );
};

export default JobSeekerDashboard;
