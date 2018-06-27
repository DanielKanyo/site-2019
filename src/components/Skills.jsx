import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../App.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Skills extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="Skills">
        <div className={"tab-container " + classes.root}>
          <Grid container spacing={8}>
          <Grid item xs={12} >
              <div className="tab-container-grid">
                Front-end
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="tab-container-grid">
                Back-end
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="tab-container-grid">
                DevOps
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Skills.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skills);