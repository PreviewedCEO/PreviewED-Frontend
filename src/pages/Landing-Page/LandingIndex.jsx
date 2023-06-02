import React from "react";
import HeroSection from "./Sections/HeroSection";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ExploreJobs from "./Sections/ExploreJobs";

const LandingIndex = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ExploreJobs />
      <Footer />
    </div>
  );
};

export default LandingIndex;
