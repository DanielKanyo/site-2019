import React, { Component } from 'react';
import MapContainer from './MapContainer';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import EmailIcon from 'mdi-react/EmailIcon';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';
import EmailSecIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';

import '../App.css';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const styles = theme => ({
  messageBtn: {
    position: 'absolute',
    zIndex: 5000,
    bottom: '25px',
    right: '55px'
  },
  telBtn: {
    position: 'absolute',
    zIndex: 5000,
    bottom: '25px',
    right: '125px'
  },
});

class Contact extends Component {

  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="Contact">
        <Button variant="fab" color="primary" aria-label="add" className={classes.messageBtn} onClick={this.handleClickOpen}>
          <EmailIcon color="#fff" />
        </Button>
        <MapContainer />

        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"My Contact"}
          </DialogTitle>
          <DialogContent className="dialog-content">
            <DialogContentText id="alert-dialog-slide-description">
              My contacts are listed below.
            </DialogContentText>
            <List component="nav">
              <ListItem button>
                <ListItemIcon>
                  <MarkunreadMailboxIcon />
                </ListItemIcon>
                <ListItemText primary="6723 Szeged, Taban street 38 4/11" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <EmailSecIcon />
                </ListItemIcon>
                <ListItemText primary="dk@gerhardt.io" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <CallIcon />
                </ListItemIcon>
                <ListItemText className="cellnumber" primary="+36 30 77929353" />
              </ListItem>
            </List>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
