import React from 'react';

import './skill.styles.scss';

const Skill = ({ technology }) => (
    <div className="skill-container">
        <div className="skill-title">{technology}</div>
    </div>
)

export default Skill;