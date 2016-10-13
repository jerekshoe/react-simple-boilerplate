// Third Party imports
import React, { Component } from 'react';
import { browserHistory } from 'react-router';

// Project imports
import logo from '../../assets/images/logo.png';
import emailIcon from '../../assets/images/email_icon.png';
import passwordIcon from '../../assets/images/password_icon.png';
import './style.scss';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      emailValid: false,
      passwordValid: false,
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onHowItWorksClick = this.onHowItWorksClick.bind(this);
    this.onSignInClick = this.onSignInClick.bind(this);
    this.onSignUpClick = this.onSignUpClick.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onHowItWorksClick() {
    browserHistory.push('/how-it-works');
  }

  onSignInClick() {
    const { emailValid, passwordValid } = this.state;

    console.log(emailValid, passwordValid);
    if (emailValid && passwordValid) {
      // TODO: login action
      browserHistory.push('/find');
    }
  }

  onSignUpClick() {
    const { emailValid, passwordValid } = this.state;

    if (emailValid && passwordValid) {
      // TODO: signup action
      browserHistory.push('/find');
    }
  }

  onEmailChange(e) {
    const { value } = e.target;

    this.setState({ email: value });
    if (value.indexOf('@') !== -1 && value.length > 3) {
      this.setState({ emailValid: true });
    } else {
      this.setState({ emailValid: false });
    }
  }

  onPasswordChange(e) {
    const { value } = e.target;

    this.setState({ password: value });
    if (value.length > 0) {
      this.setState({ passwordValid: true });
    } else {
      this.setState({ passwordValid: false });
    }
  }

  render() {
    const { email, password } = this.state;
    const props = {
      email: {
        type: 'email',
        placeholder: 'Email',
        onChange: this.onEmailChange,
        value: email,
      },
      password: {
        type: 'password',
        placeholder: 'Password',
        onChange: this.onPasswordChange,
        value: password,
      },
      howsItWork: {
        type: 'button',
        onClick: this.onHowItWorksClick,
        value: 'How\'s It Work?',
      },
    };

    return (
      <div id="login">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-sm-offset-3 col-md-offset-4">
              <img className="logo" src={logo} alt="logo" />
              <h3><b>GETGASCASH</b>.COM</h3>
              <div className="content">
                <div className="inputbox">
                  <input {...props.email} />
                  <img id="email" src={emailIcon} alt="email icon" />
                </div>
                <div className="inputbox">
                  <input {...props.password} />
                  <img id="password" src={passwordIcon} alt="password icon" />
                </div>
                <input id="signin" type="button" value="Sign In" onClick={this.onSignInClick} />
                <input id="signup" type="button" value="Sign Up" onClick={this.onSignUpClick} />
                <input id="how" {...props.howsItWork} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
