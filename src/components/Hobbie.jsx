import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../App.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
});

class Hobbie extends Component {
  render() {
    return (
      <div className="Hobbie">
        <div className="tab-container">
          <Grid container spacing={16}>
            <Grid className="sw-grid" item xs={12} sm={6}>
              <div className="hobbie-pic-container hobbie-pic1">
                
              </div>
            </Grid>
            <Grid className="sw-grid" item xs={12} sm={6}>
              <div className="hobbie-pic-container hobbie-pic2">
                
              </div>
            </Grid>
            <Grid className="sw-grid" item xs={12} sm={6}>
              <div className="hobbie-pic-container hobbie-pic3">
                
              </div>
            </Grid>
            <Grid className="sw-grid" item xs={12} sm={6}>
              <div className="hobbie-pic-container hobbie-pic4">
                
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Hobbie.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hobbie);
