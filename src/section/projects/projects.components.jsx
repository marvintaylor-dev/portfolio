import React from 'react'

import './projects.styles.scss'

import Project from '../../components/project/project.components'

import PROJECT_DATA from './projects.data'

//iterate through project data and render a project for each project object

class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            project_data: PROJECT_DATA
        };
    }

    render() {
        const { project_data } = this.state;
        return (
            <div className="project-body-styling">
                <div className="oval oval-one"></div>

                <div
                    className="project-container-title"
                    id="projects">
                    PROJECTS
                </div>
                <div className="oval oval-two"></div>
                {
                    project_data.map(({ id, ...otherProps }) => (
                        <Project key={id} {...otherProps} />
                    ))
                }
            </div>
        )
    }
}

export default Projects;