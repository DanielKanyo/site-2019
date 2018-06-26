import React, { Component } from 'react';
import About from './About';
import '../App.css';

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <div className="content-placeholder">
            <About />
        </div>
      </div>
    );
  }
}

export default Content;
