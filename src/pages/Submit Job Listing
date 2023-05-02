import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const SubmitJobListingPage = () => {
  const [step, setStep] = useState(1);
  const [jobTitle, setJobTitle] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobType, setJobType] = useState('');
  const [jobPreviewVideo, setJobPreviewVideo] = useState('');
  const [jobListings, setJobListings] = useState([
    {
      id: 1,
      title: 'Software Engineer',
      location: 'New York, NY',
      description: 'We are looking for a software engineer with experience in React and Node.js',
      type: 'Full-time',
      previewVideoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
      id: 2,
      title: 'Product Manager',
      location: 'San Francisco, CA',
      description: 'We are seeking a highly motivated and results-driven product manager to join our team',
      type: 'Contract',
      previewVideoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    }
  ]);

  const handleJobTitleChange = (e) => {
    setJobTitle(e.target.value);
  }

  const handleJobLocationChange = (e) => {
    setJobLocation(e.target.value);
  }

  const handleJobDescriptionChange = (e) => {
    setJobDescription(e.target.value);
  }

  const handleJobTypeChange = (e) => {
    setJobType(e.target.value);
  }

  const handleJobPreviewVideoChange = (e) => {
    setJobPreviewVideo(e.target.value);
  }

  const handleNextStep = () => {
    setStep(step + 1);
  }

  const handlePreviousStep = () => {
    setStep(step - 1);
  }

  const handleSubmitJobListing = () => {
    const newJobListing = {
      id: jobListings.length + 1,
      title: jobTitle,
      location: jobLocation,
      description: jobDescription,
      type: jobType,
      previewVideoUrl: jobPreviewVideo
    };
    setJobListings([...jobListings, newJobListing]);
    setJobTitle('');
    setJobLocation('');
    setJobDescription('');
    setJobType('');
    setJobPreviewVideo('');
    setStep(1);
  }

  const handleDeleteJobListing = (id) => {
    setJobListings(jobListings.filter(jobListing => jobListing.id !== id));
  }

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {step === 1 && (
            <>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="px-4 py-5 bg-white sm:p-6 shadow sm:rounded-tl-md sm:rounded-tr-md">
                  <h2 className="text-lg leading-6 font-medium text-gray-900">Submit a New Job Listing</h2>
                  <p className="mt-1 text-sm text-gray-500">Step 1: Job Details</p>
                  <div className="mt-5">
                    <div
