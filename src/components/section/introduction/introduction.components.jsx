import React from 'react';

import './introduction.styles.scss';

export const Introduction = () => {
    return (
        <div className="introduction-container">
            <div className="introduction-message">
                <div className="introduction-heading">
                    <div className="introduction-message__line1">const</div>
                    <div className="introduction-message__name">Marvin Taylor <span>=</span> </div>
                    <div className="introduction-message__job-title">‘Full-Stack Web Developer’</div>
                </div>
                <p className="introduction-message__about-me">
                    Hello! Welcome to my portfolio.  I’m a full stack developer using
                    Javascript, React, Node, Express with experience in both MySQL
                    and MongoDB. My passion is In building projects that make
                    a difference.
                </p>
            </div>
            <div className="introduction-photo"></div>
        </div>
    )
}