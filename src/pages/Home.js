import React from "react";
import Navbar from "../components/NavBar";
import MainPage from "../components/MainPage";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <MainPage />
    </div>
  );
};

export default Home;
