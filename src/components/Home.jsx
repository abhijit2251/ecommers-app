import React from "react";
import Hero from "./Hero";
import MainItem from "./MainItem";
import FeaturedSection from "./FeaturedSection";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <MainItem />
      <FeaturedSection />
    </div>
  );
};

export default Home;
