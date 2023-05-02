import React from "react";

function Overview(props) {
  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Overview</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Active Job Listings</h3>
          <p className="text-3xl font-bold">{props.activeJobListings}</p>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Registered Users</h3>
          <p className="text-3xl font-bold">{props.registeredUsers}</p>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Revenue</h3>
          <p className="text-3xl font-bold">{props.revenue}</p>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Job Applications</h3>
          <p className="text-3xl font-bold">{props.jobApplications}</p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
