import React from "react";
import Hero from "./Hero";
import MainItem from "./MainItem";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <MainItem />
    </div>
  );
};

export default Home;
