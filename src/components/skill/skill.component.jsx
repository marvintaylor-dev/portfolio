import React from 'react';

import './skill.styles.scss';

const Skill = ({ identifier, technology, information, image }) => (
    <div className="skill-container">
        {
            identifier % 2 !== 0
                ?
                <div className="grid grid-left one">
                    <div className="skill-title-container left-side">
                        <div className="skill-title">{technology}</div>
                    </div>
                    <img className="skill-image left-image" src={image} alt="" />
                    <p className="skill-information">{information}</p>
                </div>
                :
                <div className="grid grid-right two">
                    <img className="skill-image right-image" src={image} alt="" />
                    <div className="skill-title-container right-side">
                        <div className="skill-title">{technology}</div>
                    </div>
                    <p className="skill-information right-side four">{information}</p>
                </div>
        }

    </div>
)

export default Skill;