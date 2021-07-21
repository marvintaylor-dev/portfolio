import React from 'react';
import './header.styles.scss'
import Dropdown from '../../components/dropdown/dropdown.components'


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
                <ul className="header-links-container">
                    <li className="header-link">Projects</li>
                    <li className="header-link">Skills</li>
                    <li className="header-link">Education</li>
                    <li className="header-link">Contact</li>
                </ul>
                {
                    this.state.isToggleOn ?
                        <Dropdown /> : ''
                }
            </div>
        )
    }
}

export default Header;