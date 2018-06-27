import React, { Component } from 'react';
import About from './About';
import SwipeableView from './SwipeableView';
import Contact from './Contact';
import '../App.css';

class Content extends Component {

  handleChangeTabValue(val) {
    this.props.handleChangeTabValueProp(val);
  }

  render() {
    return (
      <div className="Content">
        <div className="content-placeholder">
            <About />
            <SwipeableView 
              tabValueProp={this.props.tabValueProp} 
              handleChangeTabValueProp={this.handleChangeTabValue.bind(this)} 
            />
            <Contact />
        </div>
      </div>
    );
  }
}

export default Content;
