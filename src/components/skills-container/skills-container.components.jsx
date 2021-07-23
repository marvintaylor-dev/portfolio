import React from 'react'

import './skills-container.styles.scss'

import Skill from '../skill/skill.component'

const SkillsContainer = ({ ...otherProps }) => (
    <div className="container-of-skills">
        <Skill {...otherProps} />
    </div>
)

export default SkillsContainer;