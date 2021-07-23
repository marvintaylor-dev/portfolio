import React from 'react'

import './project.styles.scss'

import { ReactComponent as Apprentice } from '../../assets/apprentice.svg'
import { ReactComponent as Crwn } from '../../assets/crwn.svg'


const Project = ({ id, name, purpose, specs, url, code, image }) => (
    <div className="project-container">
        <div className="project-logo-container">
            {
                id === 1 ? <Apprentice /> : <Crwn />
            }
        </div>

        <div className="project-name">{name}</div>
        <div className="project-paragraph-container">
            <p className="project-purpose">{purpose}</p>
            <p className="project-specs">{specs}</p>
            <div className="project-url">
                <a href={url}>Url</a>
            </div>
            <div className="project-code">
                <a href={code}>Code</a>
            </div>
        </div>
    </div>
);

export default Project

//render indivual information and styles for project