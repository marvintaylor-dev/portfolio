import React from 'react'

import SKILLS_DATA from './skills.data'
import './skills.styles.scss'
import SkillsContainer from '../../components/skills-container/skills-container.components'

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
            <div className="skills-body-styling">
                <div className="skills-container">
                    <div className="skills-title">SKILLS</div>
                    {skillsData
                        .map(({ id, ...otherProps }) => (
                            <SkillsContainer key={id} {...otherProps} />
                        ))}
                </div>
            </div>
        )
    }
}

export default Skills