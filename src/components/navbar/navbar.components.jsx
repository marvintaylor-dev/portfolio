import React from 'react';
import './navbar.styles.scss'
import Dropdown from '../dropdown/dropdown.components';
import Links from '../links/links.components';



class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
        }))
    }

    render() {
        const { isToggleOn } = this.state;
        return (
            <nav className="navbar">
                <div className="navbar-logo">
                    <div className="navbar-logo__line1">Marvin Taylor</div>
                    <div className="navbar-logo__line2">Software Developer</div>
                </div>


                <div className={`${isToggleOn ? "showMenu" : ""} navbar-hamburger-container`} onClick={this.handleClick}>
                    <div className="top-line"></div>
                    <div className="middle-line"></div>
                    <div className="bottom-line"></div>
                </div>
                {isToggleOn ? <Dropdown /> : ""}
                <Links />
            </nav>
        )
    }
}

export default Navbar;