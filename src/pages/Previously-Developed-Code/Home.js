import React from 'react';
import MainLayout from '../components/MainLayout';

const Home = () => {
  return (
    <MainLayout>
      <h1 className="text-center text-4xl font-bold">Welcome to PreviewED</h1>
      <p className="text-center mt-4">
        Discover the best job opportunities tailored to your skills and
        preferences.
      </p>
    </MainLayout>
  );
};

export default Home;
