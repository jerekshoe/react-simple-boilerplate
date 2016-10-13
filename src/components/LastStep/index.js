// Third Party imports
import React from 'react';

// Project imports
import phone from '../../assets/images/phone.png';
import pump from '../../assets/images/gas_pump.png';
import Footer from '../../components/Footer';
import './style.scss';

const LastStep = () => {
  const cashier = 'You will be receiving a text with a unique cash code.\n\nShow this '
  + 'code to the cashier inside.\n\nThe cashier will activate your pump with the amount '
  + 'you\'ve selected.';
  const remember = 'Remember to pay back the agreed-upon amount within the period '
  + 'specified in the Terms &amp Conditions.\n\nCome back for more gas cash as often '
  + 'as you like!';

  return (
    <div id="last-step">
      <div className="container contents">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-sm-offset-3 col-lg-offset-4">
            <h2>Awesome</h2>
            <section>
              <img className="pull-left phoneimage" src={phone} alt="phone" />
              <div className="pull-left">
                <h6>{cashier}</h6>
              </div>
            </section>
            <section>
              <div className="pull-left">
                <h6>{remember}</h6>
              </div>
              <img className="pull-right pumpimage" src={pump} alt="gas nozzle" />
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LastStep;
