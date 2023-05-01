import React from 'react';
import Header from './Header';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-50">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Welcome to Previewed</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Find Your Dream Job Today</p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">Previewed uses AI and machine learning algorithms to match job seekers with the most suitable job opportunities based on their skills, experience, and preferences.</p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div>
                <a href="#" className="block w-full text-center px-6 py-3 text-lg font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700">
                  Get Started
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a href="#" className="block w-full text-center px-6 py-3 text-lg font-medium leading-6 text-blue-700 transition duration-150 ease-in-out bg-blue-100 border border-transparent rounded-md hover:bg-blue-50 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Spotlight Careers</h2>
            <p className="mt-4 text-lg text-gray-500">Check out our latest job postings</p>
          </div>
          <div className="mt-12">
            <div className="grid gap-16 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
              {jobs.map(job => (
                <div key={job.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src={job.image} alt={job.company} />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <a href="#" className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">{job.title}</p>
                        <p className="mt-3 text-base text-gray-500">{job.company}</p>
                      </a>
                    </div>
                    <div className="mt

