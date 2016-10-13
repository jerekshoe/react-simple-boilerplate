// Third party imports
import React, { Component } from 'react';

// Project imports
import './style.scss';
import graphic from '../../assets/images/footer_graphic.png';


const Footer = () => {
  return (
    <footer id="footer">
      <img className="graphic" src={graphic} alt="footer graphic" />
    </footer>
  );
};

export default Footer;
