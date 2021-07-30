import React from 'react'

import './skills-container.styles.scss'

import Skill from '../skill/skill.component'

const SkillsContainer = ({ ...otherProps }) => (
    <div className="container-of-skills">
        {
            <Skill className="right" {...otherProps} />
        }
    </div>
)

export default SkillsContainer;