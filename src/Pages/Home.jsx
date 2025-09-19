import React from "react";
import ServicesList from "../components/ServicesList";
import ReviewList from "../components/ReviewList";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import HeroI from "../components/Hero";


const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="px-5 md:px-15">
        <HeroI />
        <ServicesList />
        <ReviewList />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
