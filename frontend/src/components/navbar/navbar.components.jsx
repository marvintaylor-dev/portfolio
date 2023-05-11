import React from 'react';
import './navbar.styles.scss'
import Dropdown from '../dropdown/dropdown.components';
import Links from '../links/links.components';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openMenu: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            openMenu: !state.openMenu
        }))
    }

    render() {
        const { openMenu } = this.state;

        return (
            < nav className="navbar" >
                <a href="/#" className="navbar-logo">
                    <div className="navbar-logo__line1">Marvin Taylor</div>
                    <div className="navbar-logo__line2">Developer + Scrum Master</div>
                </a>

                <div className={`${openMenu ? "showMenu" : ""} navbar-hamburger-container`} onClick={this.handleClick}>
                    <div className="top-line"></div>
                    <div className="middle-line"></div>
                    <div className="bottom-line"></div>
                </div>
                <Dropdown open={openMenu} />
                <Links />
            </nav >
        )
    }
}

export default Navbar;