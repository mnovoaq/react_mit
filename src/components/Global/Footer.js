//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
import './css/Footer.css';

class Footer extends Component {
  static PropTypes = {
    copyright: PropTypes.string
  };


  render() {
    const { copyright = '&copy; React 2018'} = this.props;

    return (
      <div className="Footer" align="center">
        <small>{copyright}</small>
      </div>
    );
  }
}

export default Footer;
