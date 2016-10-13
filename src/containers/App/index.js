// Third Party imports
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Project imports
import Menu from '../../components/Menu';
import Navbar from '../../components/Navbar';
import { toggleMenu } from '../../actions';
import './style.scss';

class App extends Component {
  render() {
    const { isMenuOpen, toggleMenu } = this.props;
    const showNavbar = this.props.location.pathname !== '/';
    
    return (
      <div id="app">
        {showNavbar && <Navbar onMenuClick={toggleMenu} open={isMenuOpen} />}
        {this.props.children}
        {showNavbar && <Menu toggleMenu={toggleMenu} open={isMenuOpen} />}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
  isMenuOpen: PropTypes.bool,
  toggleMenu: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleMenu,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    isMenuOpen: state.menu.open,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
