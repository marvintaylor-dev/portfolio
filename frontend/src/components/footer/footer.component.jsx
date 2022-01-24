import React, { useLayoutEffect } from 'react'

import './footer.styles.scss'
import { Link } from 'react-router-dom'
import Links from '../../components/links/links.components'


import '../../components/contact/contact_component.styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const layoutEffect = () => {
    window.scrollTo(0, 0)
};


const Footer = () => {
    return (
        <div className="footer-background center">
            <div className="center personal-logo-container">
                <div className="personal-logo">Marvin Taylor</div>
            </div>
            <div className="footer-link-container">
                <div className="link-container">
                    <div className="column-title">Page Links</div>
                    <div><Links /></div>
                </div>
                <div>
                    <div className="column-title">Projects</div>
                    <div className="individual-project-links">
                        <Link className="link" onClick={layoutEffect} to="/projects/apprentice">[Apprentice]</Link>
                        <Link className="link" onClick={layoutEffect} to="/projects/visualizer">[Visualizer]</Link>
                    </div>
                </div>
            </div>

            <div className="personal-logo-container">
                <a href="https://www.linkedin.com/in/marvin-taylor-dev/" target="_blank">
                    <FontAwesomeIcon id="awesomeIcon" size="4x" icon={["fab", "linkedin"]} />
                </a>
                <a href="https://github.com/marvintaylor-dev/" target="_blank">
                    <FontAwesomeIcon id="awesomeIcon" size="4x" icon={["fab", "github"]} />
                </a>
            </div>
        </div>
    )
}

export default Footer;
