import React from 'react'

import './project.styles.scss'

import { ReactComponent as Apprentice } from '../../assets/apprentice.svg'
import { ReactComponent as Sorting } from '../../assets/sortingLogo.svg'


const Project = ({ id, name, purpose, specs, url, code, image }) => (
    <div className="project-container">
        <div className="project-logo-container">
            {
                id === 1 ?
                    <Apprentice
                        className="project-logo" /> :
                    <Sorting
                        className="project-logo" />
            }
        </div>
        <div className="project-information-container">
            <div className="project-name-container">
                <div className="project-name">{name}</div>
            </div>
            <div className="project-paragraph-container">
                <div className="project-purpose">
                    <p className="bold">Why:</p>
                    <p>{purpose}</p>
                </div>
                <div className="project-specs">
                    <p className="bold">Specs:</p>
                    <p>{specs}</p>
                </div>
                <div className="project-url">
                    <a href={url}>Website</a>
                    <a href={code}>Github Code</a>
                </div>
            </div>
        </div>
    </div>
);

export default Project

//render indivual information and styles for project