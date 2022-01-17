import React from 'react'

import SKILLS_DATA from './skills.data'
import './skills.styles.scss'
import Skill from '../../components/skill/skill.component'
import Title from '../../components/section_title/section_title.components'

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
            <div className="container vh-100">
                <div className="center mt-3 mb-3">
                    <Title title="Skills" id="skills" />
                </div>
                <div className="skills-container">
                    <div className="skills-content-container">
                        <div className="skills-text-container">
                            <div className="skills-text-title">A few skills I've managed to pick up.</div>
                            <p className="skills-text-paragraph">These are the technologies that I've worked with in projects and feel the most comfortable navigating. Capable of doing both front and back end work but currently sharpening the ole front end skills.</p>
                        </div>
                        <div className="skills-grid">
                            {skillsData
                                .map(({ id, ...otherProps }) => (
                                    <Skill key={id} {...otherProps} />
                                ))}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Skills