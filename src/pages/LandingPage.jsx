import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-blue-500 min-h-screen flex flex-col justify-center items-center text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Previewed</h1>
      <p className="text-xl mb-6">
        Discover exciting job opportunities and get an exclusive look at company culture through personalized job preview videos.
      </p>
      <button className="bg-white text-blue-500 px-6 py-3 rounded font-bold text-xl hover:bg-gray-200 transition-colors duration-300">
        Join the Waitlist
      </button>
    </div>
  );
};

export default LandingPage;

