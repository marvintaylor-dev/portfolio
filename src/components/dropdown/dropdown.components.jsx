import React from 'react';

import './dropdown.styles.scss';


const Dropdown = () => {
    return (
        <div className="dropdown-container">
            <ul className="temp-fix">
                <a href="#projects">Projects</a>
                <a href="*">Skills</a>
                <a href="*">Education</a>
                <a href="*">Contact</a>
            </ul>
        </div>
    )
}

export default Dropdown