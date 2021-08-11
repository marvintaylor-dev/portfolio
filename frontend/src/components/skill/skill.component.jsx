import React from 'react';

import './skill.styles.scss';

const Skill = ({ technology, information, image }) => (
    <div className="grid">
        <img className="skill-image two" src={image} alt="" />
        <div className="skill-title-container one">
            <div className="skill-title">{technology}</div>
        </div>
        <p className="skill-information three"><strong>Favorite Part:</strong> {information}</p>
    </div>
)

export default Skill;