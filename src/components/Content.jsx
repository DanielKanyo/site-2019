import React, { Component } from 'react';
import About from './About';
import SwipeableView from './SwipeableView';
import '../App.css';

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <div className="content-placeholder">
            <About />
            <SwipeableView />
        </div>
      </div>
    );
  }
}

export default Content;
