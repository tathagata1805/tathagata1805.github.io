import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if(screen.fadeInScreen !== props.id)
      return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA */
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [

    { skill: "JavaScript", ratingPercentage: 70 },
    { skill: "React JS", ratingPercentage: 75 },
    { skill: "Express JS", ratingPercentage: 60 },
    { skill: "Node JS", ratingPercentage: 55 },
    { skill: "Mongo Db", ratingPercentage: 60 },
    { skill: "Java", ratingPercentage: 55 },
    { skill: "Python", ratingPercentage: 55 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "MERN Stack Medical Forum",
      duration: { fromDate: "SEPT 2021", toDate: "OCT 2021" },
      description:
        "A MERN Stack forum application with features like User- Authentication and live- chatting backed by a Node JS server and a real- time MongoDB Database. The frontend has been made using React JS.",
      subHeading: "Technologies Used: React JS, Node JS, MongoDB",
    },
    {
      title: "MERN Travelogue",
      duration: { fromDate: "JULY 2021", toDate: "OCT 2021" },
      description:
        "A MERN Stack Travelogue application where the users can mark and write a review about the places they have travelled throughout the world. The users can mark the places with a marker in real- time backed by a Node JS server and a MongoDB database. React JS has been used in frontend",
      subHeading: "Technologies Used:  React JS, Mongo DB, Express Js, Node Js, React Maps API.",
    },
    {
      title: "Tesla Clone Frontend",
      duration: { fromDate: "MAY 2021", toDate: "JUNE 2021" },
      description:
        "A frontend clone of the official website of Tesla which is fully reponsive and has been made using React JS and Styled components.",
      subHeading:
        "Technologies Used: React Js, Redux, Styled components.",
    },
    
  ];

  const resumeDetails = [
    /* EDUCATION */
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Engineering and Management, Kolkata"}
        subHeading={"B.TECH, Electronics and Communication Engineering"}
        fromDate={"2019"}
        toDate={"2023"}
      />
      <ResumeHeading
        heading={"Aditya Academy Senior Secondary"}
        subHeading={"10 + 2, Science"}
        fromDate={"2017"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"Aditya Academy Secondary"}
        subHeading={"Class Prep to Class 10"}
        fromDate={"2006"}
        toDate={"2017"}
      />
    </div>,
    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,
    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Management and Team Leadership"
        description="Apart from being a Tech enthusiast and a self-taught Developer, I also love to lead people. I am the Core Member of Ureckon, which is the Techfest of my University and also a Class Representative since first year. I have also received Vice Chancellor's Award for Student Contribution in recognition of my works."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something I can never compromise with, skimming through Spotify's slow and melodious songs and listening through my playlists is at times the best stress reliever that I can get my hands on."
      />
      <ResumeHeading
        heading="Binge- watching thrillers"
        description="I like to challenge my brain cells with some great thriller movies and web series. Be it Nolan or Scorcese, I've them all in my watchlist."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
        /* UNSUBSCRIBE THE SUBSCRIPTIONS */
        fadeInSubscription.unsubscribe();
    }
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
