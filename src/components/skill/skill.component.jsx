import React from 'react';

import './skill.styles.scss';

const Skill = ({ identifier, technology, information, image }) => (
    <div className="skill-container">
        {
            identifier % 2 !== 0
                ?
                <div className="grid">
                    <div>
                        <img className="skill-image left-image" src={image} alt="" />
                    </div>
                    <div className="skill-title-container left-side">
                        <div className="skill-title">{technology}</div>
                    </div>
                    <p className="skill-information">{information}</p>
                </div>
                :
                <div className="grid">
                    <div>
                        <img className="skill-image right-image" src={image} alt="" />
                    </div>
                    <div className="skill-title-container right-side">
                        <div className="skill-title">{technology}</div>
                    </div>
                    <p className="skill-information right-side">{information}</p>
                </div>
        }

    </div>
)

export default Skill;