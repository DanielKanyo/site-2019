import React, { Component } from 'react';
import MapContainer from './MapContainer';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FacebookMessengerIcon from 'mdi-react/FacebookMessengerIcon';
import PhoneIcon from 'mdi-react/PhoneIcon';
import '../App.css';

const styles = theme => ({
  messageBtn: {
    position: 'absolute',
    zIndex: 5000,
    bottom: '15px',
    left: '15px'
  },
  telBtn: {
    position: 'absolute',
    zIndex: 5000,
    bottom: '15px',
    left: '85px'
  },
});

class Contact extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="Contact">
        <Button variant="fab" color="primary" aria-label="add" className={classes.messageBtn}>
          <FacebookMessengerIcon color="#fff" />
        </Button>
        <Button variant="fab" color="primary" aria-label="add" className={classes.telBtn}>
          <PhoneIcon color="#fff" />
        </Button>
        <MapContainer />
      </div>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
