import React, { useEffect } from 'react'

import './projects.styles.scss'

import Project from '../../components/project/project.components'
import Title from '../../components/section_title/section_title.components'

import ProjectData from './projects.data'

import { gsap } from '../../assets/gsap/gsap'

//iterate through project data and render a project for each project object

const Projects = () => {
    useEffect(() => {
        gsap.to("#projects", {
            scale: 1.2,
            ease: "none",
            scrollTrigger: {
                trigger: "#projects",
                scrub: .5
            }
        });
    });

    return (
        <div className="container">
            <div className="center">
                <Title title="Personal Projects" id="projects" />
            </div>
            <div className="projects-container">
                {ProjectData.map(data => (
                    <Project {...data} />
                ))}
            </div>
        </div >
    )

}

export default Projects;