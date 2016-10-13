// Third Party imports
import React, { Component, PropTypes } from 'react';

// Project imports
import logo from '../../assets/images/logo.png';
import './style.scss';

class Navbar extends Component {
  render() {
    const open = this.props.open ? ' open' : '';

    return (
      <nav>
        <button className={`toggle${open}`} onClick={this.props.onMenuClick}>
          <span />
          <span />
          <span />
        </button>
        <img alt="logo" src={logo} />
        <div className="gascash"><b>GETGASCASH</b>.COM</div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  open: PropTypes.bool,
  onMenuClick: PropTypes.func,
};

export default Navbar;
