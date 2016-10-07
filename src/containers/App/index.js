// Third Party imports
import React, { Component, PropTypes } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
