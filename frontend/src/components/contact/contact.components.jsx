import React from 'react';
import './contact_component.styles.scss'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Contact() {
    return (
        <div className="icon-container">
            <a href="https://www.linkedin.com/in/marvtaylor/" target="_blank" rel="noreferrer"><FontAwesomeIcon id="awesomeIcon" size="3x" icon={["fab", "linkedin"]} /></a>
            <a href="https://github.com/marvintaylor-dev/" target="_blank" rel="noreferrer"><FontAwesomeIcon id="awesomeIcon" size="3x" icon={["fab", "github"]} /></a>
        </div>
    )
};

export default Contact;
