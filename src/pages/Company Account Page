import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const AccountPageCompany = () => {
  const [fullName, setFullName] = useState('Jane Doe');
  const [email, setEmail] = useState('jane.doe@example.com');
  const [password, setPassword] = useState('********');
  const [companyDescription, setCompanyDescription] = useState('Our company is a leading provider of software solutions.');
  const [jobListing, setJobListing] = useState({
    jobTitle: 'Software Engineer',
    jobType: 'Full-Time',
    jobLocation: 'New York City, NY',
    jobDescription: 'We are seeking a talented software engineer to join our team!',
    jobRequirements: 'Minimum of 3 years of experience with Python and JavaScript.',
    jobSalary: '$120,000 - $150,000 per year'
  });

  const handleChangeFullName = (e) => {
    setFullName(e.target.value);
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleDeleteAccount = () => {
    // code to delete the account
  }

  const handleChangeCompanyDescription = (e) => {
    setCompanyDescription(e.target.value);
  }

  const handleChangeJobListing = (field, value) => {
    setJobListing({
      ...jobListing,
      [field]: value
    });
  }

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="px-4 py-5 bg-white sm:p-6 shadow sm:rounded-tl-md sm:rounded-tr-md">
              <h2 className="text-lg leading-6 font-medium text-gray-900">Account Settings</h2>
              <p className="mt-1 text-sm text-gray-500">Update your account information.</p>
              <div className="mt-5">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label htmlFor="full_name" className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="full_name"
                        id="full_name"
                        value={fullName}
                        onChange={handleChangeFullName}
                        className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="col-span-3 sm:col-span-2">
                    <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="email_address"
                        id="email_address"
                        value={email}
                        onChange={handleChangeEmail}
                        className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                      />
                    </div>
                  </div>

                  <
