import React from 'react';

import './introduction.styles.scss';

import Headshot from '../../assets/headshot.png'

export const Introduction = () => {
    return (
        <div className="introduction-container" id="introduction">
            <div className="headshot-container">
                <img className="headshot" src={Headshot} alt="Me" />
            </div>
            <div className="introduction-message">
                <div className="introduction-heading">
                    <div className="introduction-message__line1">const</div>
                    <div className="introduction-message__name">Marvin Taylor <span>=</span> </div>
                    <div className="introduction-message__job-title">‘Full-Stack Web Developer’</div>
                </div>
                <p className="introduction-message__about-me">
                    Hello! Welcome to my portfolio.  I’m a full-stack web developer with 
                    experience using Javascript, React, Node, Express, MySQL and MongoDB. 
                    
                    As a former teacher and social worker my passion is in building
                    projects that are driven by innovation, and most importantly, 
                    improving the lives of others.
                </p>
            </div>
            <div className="introduction-bottom-blue"></div>
        </div>
    )
}