import React, { useEffect, useRef } from 'react'

import './project.styles.scss'
import { Link } from 'react-router-dom'

import { gsap } from "../../assets/gsap/gsap"


const layoutEffect = () => {
    window.scrollTo(0, 0)
};

const Project = ({ name, imageName, explanation }) => {

    /* const projectRef = useRef(null);
    useEffect(() => {
        gsap.from(
            projectRef.current,
            {
                opacity: 0,
                y: 100,
                duration: 1,
                scrollTrigger: {
                    trigger: projectRef.current,
                    start: "top 90%",
                    toggleActions: "play pause resume reset"
                }
            });
    }); */

    return (
        <Link /* ref={projectRef} */ onClick={layoutEffect} to={`/projects/${name.toLowerCase()}`}>
            <div className="project-container">
                <div
                    className="project-logo-container"
                    style={{
                        backgroundImage: `url(${require(`../../assets/images/${imageName}`).default})`
                    }}>
                </div>
                <div className="project-name">{name}</div>
                <div className="project-explanation">{explanation}</div>
            </div >
        </Link>
    )
}

export default Project

