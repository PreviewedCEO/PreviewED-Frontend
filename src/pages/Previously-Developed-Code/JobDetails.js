import React from 'react';
import Header from './Header';
import Footer from './Footer';

const JobListingDetail = ({ job }) => {
  return (
    <>
      <Header />
      <div className="bg-white">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:gap-x-8">
            <div className="aspect-w-3 aspect-h-2">
              <img className="object-cover shadow-lg rounded-lg" src={job.image} alt={job.company} />
            </div>
            <div className="sm:col-span-1">
              <h1 className="text-3xl font-extrabold text-gray-900">{job.title}</h1>
              <p className="mt-1 text-base text-gray-500">{job.company}</p>
              <div className="mt-4">
                <h2 className="text-lg font-medium text-gray-900">Job Description</h2>
                <div className="mt-2 text-gray-600">{job.description}</div>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <h2 className="text-2xl font-extrabold text-gray-900">Apply Now</h2>
            <div className="mt-5 sm:flex">
              <div className="flex-shrink-0">
                <img className="h-12 w-12 rounded-full object-cover" src={job.companyLogo} alt={job.company} />
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg font-medium text-gray-900">{job.company}</h3>
                <div className="mt-2 text-gray-600">{job.location}</div>
                <div className="mt-2 text-gray-600">{job.jobType}</div>
                <div className="mt-2 text-gray-600">{job.salary}</div>
                <div className="mt-4">
                  <a href={job.applyUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 px-4 rounded-md shadow bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <h2 className="text-2xl font-extrabold text-gray-900">Job Preview</h2>
            <div className="mt-5 aspect-w-16 aspect-h-9">
              <iframe src={job.videoUrl} title="Job Preview Video" allowFullScreen></iframe>
            </div>
          </div>
        </div>
        <div className="bg-white mt-16">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-gray-900">More Job Previews</h2>
            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-
