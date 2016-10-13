// Third Party imports
import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

// Project imports
import './style.scss';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.onGetStartedClick = this.onGetStartedClick.bind(this);
    this.onHowItWorksClick = this.onHowItWorksClick.bind(this);
    this.onMyAccountClick = this.onMyAccountClick.bind(this);
    this.onLogOutClick = this.onLogOutClick.bind(this);
  }

  onGetStartedClick() {
    // browserHistory.push('/find');
    this.props.toggleMenu();
  }

  onHowItWorksClick() {
    browserHistory.push('/how-it-works');
    this.props.toggleMenu();
  }

  onMyAccountClick() {
    browserHistory.push('/account');
    this.props.toggleMenu();
  }

  onLogOutClick() {
    // TODO: Call logout action here
    browserHistory.push('/');
  }

  render() {
    const open = this.props.open ? { className: 'open' } : {};

    return (
      <ul id="menu" {...open}>
        <li onClick={this.onGetStartedClick}>Get Started</li>
        <li onClick={this.onHowItWorksClick}>How It Works</li>
        <li onClick={this.onMyAccountClick}>My Account</li>
        <span />
        <li onClick={this.onLogOutClick}>Log Out</li>
      </ul>
    );
  }
}

Menu.propTypes = {
  open: PropTypes.bool,
  toggleMenu: PropTypes.func,
};

export default Menu;
