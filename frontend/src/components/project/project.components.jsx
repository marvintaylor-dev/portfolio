import React from 'react'

import './project.styles.scss'

import { ReactComponent as Apprentice } from '../../assets/apprentice.svg'
import { ReactComponent as Crwn } from '../../assets/crwn.svg'


const Project = ({ id, name, purpose, specs, url, code, image }) => (
    <div className="project-container">
        <div className="project-logo-container">
            {
                id === 1 ?
                    <Apprentice
                        className="project-logo" /> :
                    <Crwn className="project-logo" />
            }
        </div>
        <div className="project-information-container">
            <div className="project-name-container">
                <div className="project-name">{name}</div>
            </div>
            <div className="project-paragraph-container">
                <p className="project-purpose">
                    <div className="bold">Why:</div>
                    <div>{purpose}</div>
                </p>
                <p className="project-specs">
                    <div className="bold">Specs:</div>
                    <div>{specs}</div>
                </p>
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