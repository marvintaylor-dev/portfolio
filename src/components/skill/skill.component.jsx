import React from 'react';

import './skill.styles.scss';

const Skill = ({ identifier, technology, information, image }) => (
    <div className="skill-container">
        {
            identifier % 2 !== 0
                ?
                <div className="grid">
                    <div className="skill-title-container left-side">
                        <div className="skill-title">{technology}</div>
                    </div>
                    <p className="skill-information">{information}</p>
                    <div>
                        <img className="skill-image" src={image} alt="" />
                    </div>
                </div>
                :
                <div className="grid">
                    <div className="skill-title-container right-side">
                        <div className="skill-title">{technology}</div>
                    </div>
                    <p className="skill-information right-side">{information}</p>
                    <div>
                        <img className="skill-image" src={image} alt="" />
                    </div>
                </div>
        }

    </div>
)

export default Skill;