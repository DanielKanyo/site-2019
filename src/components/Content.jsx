import React, { Component } from 'react';
import '../App.css';

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <div className="content-placeholder">
          <div className="content-profile-image"></div>
          <div className="content-name">
            <h3>Daniel Kanyo</h3>
            <h6>DEVELOPER</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
