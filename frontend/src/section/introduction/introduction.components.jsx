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
                    Hello! Welcome to my portfolio.  I’m a full-stack web developer using
                    Javascript, React, Node, Express with experience in both MySQL
                    and MongoDB. My passion is In building projects that make
                    a difference.
                </p>
            </div>
            <div className="introduction-bottom-blue"></div>
        </div>
    )
}