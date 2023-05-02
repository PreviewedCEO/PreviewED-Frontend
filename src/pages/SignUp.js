import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import JobSeekerSignUpForm from './JobSeekerSignUpForm';
import CompanySignUpForm from './CompanySignUpForm';

const SignUpPage = () => {
  const [isJobSeeker, setIsJobSeeker] = useState(true);

  const handleJobSeekerClick = () => {
    setIsJobSeeker(true);
  }

  const handleCompanyClick = () => {
    setIsJobSeeker(false);
  }

  return (
    <>
      <Header />
      <div className="bg-gray-50">
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">{isJobSeeker ? 'Job Seeker' : 'Company'} Sign Up</h3>
                <p className="mt-1 text-sm text-gray-600">
                  {isJobSeeker ? 'Sign up as a job seeker to find your next job' : 'Sign up as a company to post jobs and find top talent'}
                </p>
                <div className="mt-5">
                  <button
                    className={`${
                      isJobSeeker ? 'bg-blue-600 text-white' : 'bg-white border-gray-300'
                    } mr-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                    onClick={handleJobSeekerClick}
                  >
                    Job Seeker
                  </button>
                  <button
                    className={`${
                      !isJobSeeker ? 'bg-blue-600 text-white' : 'bg-white border-gray-300'
                    } py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                    onClick={handleCompanyClick}
                  >
                    Company
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              {isJobSeeker ? <JobSeekerSignUpForm /> : <CompanySignUpForm />}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUpPage;
