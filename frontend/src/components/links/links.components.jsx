import React from 'react'
import './links.styles.scss'
import { NavLink } from 'react-router-dom'

const projects = document.querySelector("#projects");

const layoutEffect = () => {
    window.scrollTo(0, 0)
};

const handleScroll = () => {
    projects.scrollIntoView({ behavior: "smooth", block: "center" })
}



const Links = ({ open }) => {

    return (
        <div className={`${open ? 'slideIn' : ''} header-links-container`}>
            <NavLink
                to={"/"}
                exact={true}
                onClick={layoutEffect}
                className="header-link"
                activeClassName="selected" >
                Home
            </NavLink>
            <a href="/#projects" className="header-link">Projects</a>
            <a href="/#skills" className="header-link">Skills</a>
            <NavLink
                to={"/resume"}
                exact={true}
                onClick={layoutEffect}
                className="header-link"
                activeClassName="selected">
                Resume
            </NavLink>
            {/* <a href="/contactpage" className="header-link">Contact</a> */}
            <NavLink
                to={"/aboutme"}
                exact={true}
                onClick={layoutEffect}
                className="header-link"
                activeClassName="selected">About Me
            </NavLink>

        </div>
    )

}

export default Links;