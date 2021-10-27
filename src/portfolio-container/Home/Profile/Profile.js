import React from "react";
import ScrollService from ".././../../utilities/ScrollService";
import "./Profile.css";
import Typical from "react-typical";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
          
            <div className="colz-icon">
              <a href="https://web.facebook.com/tathagata.chakraborty.9041">
                <i className="fa fa-facebook-square" />
              </a>
              
              <a href="https://www.instagram.com/s_a_v_a_g_e_k_i_n_g_18/">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/tathagata-chakraborty-0bb5b71a3">
                <i className="fa fa-linkedin-square" />
              </a>
              <a href="https://github.com/tathagata1805">
                <i className="fa fa-github-square" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Tathagata</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1
               
              >
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Tech Enthusiast😎",
                    1000,
                    "Frontend Developer!💻",
                    1000,
                    "React Developer 📱",
                    1000,
                    "UI/UX Designer",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              A self-taught Developer with a knack of building applications that would solve real- life problems.
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Hire Me{" "}
            </button>
            <a href="Tathagata Resume.pdf" download="Tathagata Resume.pdf">
              <button className="btn highlighted-btn"> Checkout my Resume! </button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
