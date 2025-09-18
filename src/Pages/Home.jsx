import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import ServicesList from "../components/ServicesList";
import ReviewList from "../components/ReviewList";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
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
