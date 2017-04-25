import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import './style.scss';

class Greeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.onBackClick = this.onBackClick.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onBackClick() {
    browserHistory.push('/');
  }

  onButtonClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>{this.state.count}</button>
        <button onClick={this.onBackClick}>Back</button>
      </div>
    );
  }
};

export default Greeting;
