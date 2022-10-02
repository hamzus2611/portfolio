import React from "react";
import Profile from "./Profile/Porfile";
import Footer from "./Footer/Footer";
import "./Home.css";
import Navbar from "./Navbar/Navbar";
function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
}

export default Home;
