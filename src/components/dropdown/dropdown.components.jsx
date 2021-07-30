import React from 'react';

import './dropdown.styles.scss';

import Links from '../../components/links/links.components'


const Dropdown = () => {
    return (
        <div className="dropdown-container">
            <Links />
            {/* <div className="header-links-container">
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#education">Education</a>
                <a href="#contact">Contact</a>
            </div> */}
        </div>
    )
}

export default Dropdown