import React from 'react'

import SKILLS_DATA from './skills.data'
import './skills.styles.scss'
import Skill from '../../components/skill/skill.component'

class Skills extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            skillsData: SKILLS_DATA
        }
    }

    render() {
        const { skillsData } = this.state;
        return (
            <div className="skills-body-styling" id="skills">
                <div className="skills-title">SKILLS</div>
                <div className="skills-container">
                    {skillsData
                        .map(({ id, ...otherProps }) => (
                            <Skill key={id} {...otherProps} />
                        ))}
                </div>
            </div>
        )
    }
}

export default Skills