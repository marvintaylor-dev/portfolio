import React from 'react'

import './projects.styles.scss'

import { ReactComponent as Apprentice } from '../../../assets/apprentice.svg'

import PROJECT_DATA from './projects.data'

class Project extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: PROJECT_DATA
        };
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="project-body-styling">
                <div className="oval oval-one"></div>
                <div className="project-container">
                    <div
                        className="project-container-title"
                        id="project">PROJECTS
                    </div>
                    <div className="project-logo-container">
                        <Apprentice />
                    </div>
                    <div className="project-name">{collections[0].name}</div>
                    <div className="project-paragraph-container">
                        <p className="project-purpose">The reason I worked on this project...</p>
                        <p className="project-specs">
                            Specs of my project.
                            Here are some things that stand out to make me look like a really good developer
                            when in actuality I'm holding on for dear life hoping that no one finds out that
                            I'm a complete fraud.

                            Here are some more Specs
                            that are really specific
                            and stand out in remarkable ways
                            aren't they great
                            awesome...superior
                            and very human design
                    </p>
                        <div className="project-url">
                            <a href={collections[0].url}>Url</a>
                        </div>
                        <div className="project-code">
                            <a href={collections[0].code}>Code</a>
                        </div>
                    </div>
                </div>
                <div className="oval oval-two"></div>
            </div>
        )
    }
}

export default Project;