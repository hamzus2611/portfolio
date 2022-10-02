import React from "react";
import { Facebook, Google, LinkedIn, GitHub } from "@mui/icons-material";
import Typical from "react-typical";
import './Profile.css'

export default function Porfile() {
  return (
    <div className="profile-conatiner">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/gharsallah.hamza.1">
                <Facebook />
              </a>
              <a href="#">
                <Google />
              </a>
              <a href="https://www.linkedin.com/in/hamza-gharsallah-380608193/">
                <LinkedIn />
              </a>
              <a href="https://github.com/hamzus2611">
                <GitHub />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Hamza</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Hamza Gharsallah",
                    1000,
                    "Full Stack developer",
                    1000,
                    "MERN Stack Dev",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                kanck of building applications with front and back operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a href="Hamza_GHARSALLAH.pdf" download="Hamza_GHARSALLAH.pdf">
              <button className="btn highlighted-btn"> Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
