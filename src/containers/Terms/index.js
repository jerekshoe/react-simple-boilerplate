// Third Party imports
import React, { Component } from 'react';
import { browserHistory } from 'react-router';

// Project imports
import './style.scss';

class Terms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      agreed: false,
      signed: false,
      signature: '',
    };

    this.onSubmitClick = this.onSubmitClick.bind(this);
    this.onAgreeClick = this.onAgreeClick.bind(this);
    this.onSignClick = this.onSignClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onAgreeClick() {
    this.setState({ agreed: true });
  }

  onInputChange(e) {
    const { value } = e.target;
    this.setState({ signature: value });
  }

  onSignClick() {
    if (this.state.signature !== '') {
      this.setState({ signed: true });
    }
  }

  onSubmitClick() {
    const { agreed, signed } = this.state;
    // TODO: set new route
    if (agreed && signed) {
      browserHistory.push('/');
    }
  }

  render() {
    const subheading = 'Now that you\'ve chosen your cash amount, let\'s get going!\n\n '
    + 'After accepting the terms of agreement below, click to sign and follow '
    + 'the instructions to redeem your Gas Cash!';

    const terms = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem '
    + 'accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae '
    + 'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt '
    + 'explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut '
    + 'odit aut fugit, sed quia consequuntur magni dolores eos qui ratione '
    + 'voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum '
    + 'quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam '
    + 'eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat '
    + 'voluptatem. Ut enim ad minima veniam,  quis nostrum exercitationem ullam '
    + 'corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? '
    + 'Quis autem vel eum iure  reprehenderit qui in ea voluptate velit esse '
    + 'quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo '
    + 'voluptas nulla pariatur?';

    return (
      <div id="accept-terms">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-4 col-sm-offset-3 col-lg-offset-4">
              <h2>Last Step:</h2>
              <h6>{subheading}</h6>
              <h4>Terms of Agreement:</h4>
              <div className="box">{terms}</div>
              <button className="bttn agree" onClick={this.onAgreeClick}>Agree</button>
              <div className="signature">
                <input onChange={this.onInputChange} />
                <p className="pull-left">x</p>
                <button className="bttn sign pull-right" onClick={this.onSignClick}>Sign</button>
              </div>
              <button className="bttn submit" onClick={this.onSubmitClick}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Terms;
