import React from 'react';
import './header.styles.scss'
import Dropdown from '../../components/dropdown/dropdown.components'
import Links from '../../components/links/links.components'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        return (
            <div className="header">
                <div className="header-logo">
                    <div className="header-logo__line1">Marvin Taylor</div>
                    <div className="header-logo__line2">Software Developer</div>
                </div>
                <div className="header-hamburger-container" onClick={this.handleClick}>
                    <div className="header-hamburger-middle-line"></div>
                </div>
                <Links />
                {/* <div className="header-links-container">
                    <a href="#projects" className="header-link">Projects</a>
                    <a href="#skills" className="header-link">Skills</a>
                    <a href="#education" className="header-link">Education</a>
                    <a href="#contact" className="header-link">Contact</a>
                </div> */}
                {
                    this.state.isToggleOn ?
                        <Dropdown /> : ''
                }
            </div>
        )
    }
}

export default Header;