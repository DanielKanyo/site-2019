import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        {"© " + new Date().getFullYear()}
      </div>
    );
  }
}

export default Footer;
