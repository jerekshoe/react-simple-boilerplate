// Third Party Imports
import React, { Component } from 'react';
import { browserHistory } from 'react-router';

// Project imports
import './style.scss';
import Footer from '../../components/Footer';

const information = {
  'Name': 'Jimmy Gascashion',
  'Email': 'jimmy@mygascash.com',
  'Cell Phone': '555-538-2498',
  'Social Security # (last 4 digits)': '4238',
  'Card #': 'Card ending in 8420',
  'Exp. Date': '08/25',
  'Billing Zip': '39590',
  'Bank Account #': 'Account ending in 4223',
};

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };

    this.onPasswordClick = this.onPasswordClick.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
    this.onLoanClick = this.onLoanClick.bind(this);
  }

  onEditClick() {
    this.setState({ editing: !this.state.editing });
  }

  onLoanClick() {
    browserHistory.push('/');
  }

  onPasswordClick() {
    browserHistory.push('/');
  }

  renderInfoList() {
    const infoList = Object.keys(information).map((prop, i) => (
      <li key={i}>
        <div className="pull-right">{information[prop]}</div>
        <div className="pull-left">{prop}</div>
      </li>
    ));
    return infoList;
  }

  render() {
    return (
      <div id="account">
        <div className="container contents">
          <div className="row">
            <div className="col-sm-6 col-lg-4 col-sm-offset-3 col-lg-offset-4">
              <h2>My Account</h2>
              <button onClick={this.onPasswordClick}>Change Password</button>
              <ul>
                <li>
                  <div className="pull-left">Submitted Information:</div>
                </li>
                {this.renderInfoList()}
              </ul>
              <button onClick={this.onEditClick}>Edit Information</button>
              <button onClick={this.onLoanClick}>View/Update Active Loans</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Account;
