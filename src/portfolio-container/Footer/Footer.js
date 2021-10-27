import React from 'react'
import './Footer.css'
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    /* SOCIALS STATIC DATA */
    let socialDetails = [ { icon: faFacebook, link: 'https://web.facebook.com/tathagata.chakraborty.9041' },
                          { icon: faLinkedin, link: "https://www.linkedin.com/in/tathagata-chakraborty-0bb5b71a3" },
                          { icon: faGithub, link: "https://github.com/tathagata1805" }, ]

    /* GET CURRENT YEAR */
    let currentYear = new Date().getFullYear();

    /* RENDER SOCIAL ICONS */
    const getSocials = () => {
        return (socialDetails.map((social,index) => (
            <a rel="noopener noreferrer" key={index} href={social.link} target="_blank" >
                <FontAwesomeIcon className="social-icon" icon={social.icon} />
            </a>
        )));
    }

    return (
        <div className="main-footer-container">
            <div className="main-footer-content">
                <div className="main-footer-message">
                    <span> All rights reserved © Tathagata Chakraborty { currentYear } </span>
                </div>
                <div className="main-footer-socials">
                    { getSocials() }
                </div>
            </div>
        </div>
    )
}

export default Footer;
