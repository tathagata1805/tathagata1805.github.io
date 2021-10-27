import React, { useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';

import './AboutMe.css';

const AboutMe = (props) => {

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeInScreen !== props.id)
        return;
        Animations.animations.fadeInScreen(props.id);
    } 
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTANTS = { 
        description: "A fast paced mind, a classy individual and a team player, coupled with the ability to lead people. A self-taught Developer with knowledge of various frontend technologies and libraries like React JS as well learning backend technologies like Node JS. A keen learner and tech enthusiast who is willing to develop himself everyday and loves to think on his feet.",
        highlights: {
            bullets: [
                "Programming:- Java, Python, JavaScript, C",
                "Software Development:- HTML, CSS, Bootstrap, Javascript, React JS, Angular, Node JS",
                "ECE Undergraduate",
                "5* Coder in HackerRank",
                "Product Designer with knowledge of softwares like Figma, Adobe XD",         
                "Tools and Platforms:- Git, GitHub, Visual Studio Code, Eclipse, IntelliJ, MongoDB cloud, AWS, Google Cloud",
           ],
           heading: "Here are a Few Highlights:"
        }
    }

    const renderHighlights = () => {
        return (
            SCREEN_CONSTANTS.highlights.bullets.map((value,i) => (
                <div className="highlight" key={i}>
                    <div className="highlight-blob"></div>
                    <span>{ value }</span>
                </div>
            ))
        )
    }

    useEffect(() => {
        return () => {
            /* UNSUBSCRIBE THE SUBSCRIPTIONS */
            fadeInSubscription.unsubscribe();
        }
    }, [fadeInSubscription]);

    return (
        <div className="about-me-container screen-container fade-in" id={ props.id || ''}>
            <div className="about-me-parent">
            <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
            <div className="about-me-card">
                <div className="about-me-profile"></div>
                <div className="about-me-details">
                    <span className="about-me-description">{SCREEN_CONSTANTS.description}</span>
                    <div className="about-me-highlights">
                        <div className="highlight-heading">
                            <span>{ SCREEN_CONSTANTS.highlights.heading }</span>
                        </div>
                        { renderHighlights() }
                    </div>
                    <div className="about-me-options">
                         <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}> Hire Me </button>
                         <a href="Tathagata Resume.pdf" download="Tathagata Resume.pdf">
                            <button className="btn highlighted-btn"> Get my Resume </button>
                         </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
