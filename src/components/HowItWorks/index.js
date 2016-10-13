// Third Party imports
import React from 'react';

// Project imports
import './style.scss';
import Footer from '../../components/Footer';
import gauge from '../../assets/images/gas_gauge.png';
import location from '../../assets/images/location.png';
import nozzle from '../../assets/images/gas_nozzle.png';
import pump from '../../assets/images/gas_pump.png';

const HowItWorks = () => {
  const snagging = 'Snagging a little extra dough to get you where you\'re going is '
  + 'easy with Get Gas Cash.\n\nWe\'ll break it down for you here.';

  return (
    <div id="how-it-works">
      <div className="container contents">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-sm-offset-3 col-lg-offset-4">
            <h2>How it works:</h2>
            <h6>{snagging}</h6>
            <img src={pump} alt="gas pump" />
            <p>Sign in when funds are lacking at the pump.</p>
            <img src={location} alt="location icon" />
            <p>Find the gas station you're at.</p>
            <img className="nozzle" src={nozzle} alt="gas nozzle" />
            <p>Get approved and get some of that liquid gold.</p>
            <img src={gauge} alt="gas gauge" />
            <p>Watch the gauge climb towards F and get on your way!</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default HowItWorks;
