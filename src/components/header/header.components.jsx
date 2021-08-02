import React from 'react';
import '../../scss/components/_header.styles.scss';
import Dropdown from '../../components/dropdown/dropdown.components';
import Links from '../../components/links/links.components';



class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        const { isToggleOn } = this.state;
        return (
            <div className="header">
                <div className="header-logo">
                    <div className="header-logo__line1">Marvin Taylor</div>
                    <div className="header-logo__line2">Software Developer</div>
                </div>
                <div className="header-hamburger-container" onClick={this.handleClick}>
                    <div className="header-hamburger-middle-line"></div>
                    {isToggleOn ? <Dropdown /> : ''}
                </div>
                <Links />


            </div>
        )
    }
}

export default Header;