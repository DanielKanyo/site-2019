import React, { Component } from 'react';
import About from './About';
import TabView from './TabView';
import Contact from './Contact';
import Footer from './Footer';
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
            <TabView 
              tabValueProp={this.props.tabValueProp} 
              handleChangeTabValueProp={this.handleChangeTabValue.bind(this)} 
            />
            <Contact />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Content;
