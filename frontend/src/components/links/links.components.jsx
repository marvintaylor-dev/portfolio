import React from 'react'

import './links.styles.scss'
import { Link } from 'react-router-dom'

const layoutEffect = () => {
    window.scrollTo(0, 0)
};


const Links = ({ open }) => (
    <div className={`${open ? 'slideIn' : ''} header-links-container`}>
        <Link to="/" onClick={layoutEffect} className="header-link">Home</Link>
        <a href="/#projects" className="header-link">Projects</a>
        <a href="/#skills" className="header-link">Skills</a>
        <Link to="/resume" onClick={layoutEffect} className="header-link">Resume</Link>
        {/* <a href="/contactpage" className="header-link">Contact</a> */}
        <Link to="/aboutme" onClick={layoutEffect} className="header-link">About Me</Link>
    </div>
)

export default Links;