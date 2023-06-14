import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const EmployerDashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("/api/jobs");
        setJobs(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJobs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/jobs/${id}`);
      setJobs(jobs.filter((job) => job._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h1 className="text-4xl font-bold mb-4">Employer Dashboard</h1>
      <div className="flex justify-between w-4/5">
        <div className="w-3/5">
          <h2 className="text-2xl font-bold mb-4">Your Job Listings</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-gray-400 p-2">#</th>
                <th className="border border-gray-400 p-2">Title</th>
                <th className="border border-gray-400 p-2">Location</th>
                <th className="border border-gray-400 p-2">Salary</th>
                <th className="border border-gray-400 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr key={job._id}>
                  <td className="border border-gray-400 p-2">{index + 1}</td>
                  <td className="border border-gray-400 p-2">{job.title}</td>
                  <td className="border border-gray-400 p-2">{job.location}</td>
                  <td className="border border-gray-400 p-2">{job.salary}</td>
                  <td className="border border-gray-400 p-2">
                    <Link to={`/jobs/${job._id}`} className="mr-4 text-blue-500">
                      View
                    </Link>
                    <Link to={`/jobs/${job._id}/edit`} className="mr-4 text-yellow-500">
                      Edit
                    </Link>
                    <button onClick={() => handleDelete(job._id)} className="text-red-500">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-2/5">
          <h2 className="text-2xl font-bold mb-4">Post a New Job</h2>
          <Link to="/jobs/create" className="bg-blue-500 text-white py-2 px-4 rounded">
            Create New Job
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;
