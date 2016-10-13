// Third Party Imports
import React, { Component } from 'react';
import { browserHistory } from 'react-router';

// Project Imports
import './style.scss';
import Footer from '../../components/Footer';

const amounts = [10, 20, 30, 40];

class AmountSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: -1,
      amount: -1,
    };

    this.onAmountClick = this.onAmountClick.bind(this);
    this.onConfirmClick = this.onConfirmClick.bind(this);
  }

  onConfirmClick() {
    const { amount } = this.state;

    if (amount !== -1) {
      // TODO: change link
      browserHistory.push('/');
    }
  }

  onAmountClick(index) {
    this.setState({ index: index, amount: amounts[index] });
  }

  render() {
    const value = this.state.amount !== -1 ? this.state.amount : 0;
    const subheading = 'You\'ve been approved for some Gas Cash!\n\n '
    + 'Select an amount below and get back out on that open road!';

    return (
      <div id="amount-select">
        <div className="container contents">
          <div className="row">
            <div className="col-sm-10 col-lg-10 col-sm-offset-1 col-lg-offset-1">
              <h2>Congrats!</h2>
              <h6>{subheading}</h6>
              <div className="grid">
                {amounts.map((amount, i) => {
                  const active = this.state.index === i ? ' active' : '';
                  return (
                    <div className={`sqr${active}`} key={i} onClick={() => this.onAmountClick(i)}>
                      <div className="sign"><b>$</b>{amount}</div>
                    </div>
                  );
                })}
              </div>
              <button className="bttn" onClick={this.onConfirmClick}>Confirm ${value}</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AmountSelect;
