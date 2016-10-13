// Third Party imports
import React from 'react';

// Project imports
import './style.scss';

const Sorry = () => {
  const subheading = 'It looks like you weren\'t approved.\n\nCome back after a few '
  + 'days and try again.';

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2">
          <h2>Sorry!</h2>
          <h6>{subheading}</h6>
        </div>
      </div>
    </div>
  );
};

export default Sorry;
