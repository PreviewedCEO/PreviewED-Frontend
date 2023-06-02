import React from 'react';
import Header from './Header';
import Footer from './Footer';

const FAQPage = () => {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">General Questions</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Answers to some general questions about Previewed</p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">What is Previewed?</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  Previewed is a job matching platform that uses AI and machine learning algorithms to match job seekers with the most suitable job opportunities based on their skills, experience, and preferences.
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">How does Previewed work?</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  Previewed matches job seekers with job opportunities based on their skills, experience, and preferences. Job seekers can also browse through available job opportunities, filter their search based on various criteria, and apply for jobs directly through the platform. Employers can create a company profile, post job opportunities, and manage job applications from their dashboard.
                </dd>
              </div>
              {/* Add more FAQs here */}
            </dl>
          </div>
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Job Seeker Questions</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Answers to some common questions for job seekers</p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">How do I create a job seeker account?</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  Click on the "Join Now" button on the Previewed homepage and fill out the sign-up form to create a job seeker account.
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">How do I apply for a job on Previewed?</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  Browse through available job opportunities on the Job Search page, filter your search based on various criteria, and click the "Apply Now" button on
