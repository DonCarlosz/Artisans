import React from "react";
import Hero from "../components/Hero";
import ServicesList from "../components/ServicesList";
import ReviewList from "../components/ReviewList";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="px-5 md:px-15">
        <Hero />
        <ServicesList />
        <ReviewList />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
