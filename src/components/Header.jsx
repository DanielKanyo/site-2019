import React, { Component } from 'react';
import '../App.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import FacebookBoxIcon from 'mdi-react/FacebookBoxIcon';
import GithubIcon from 'mdi-react/GithubBoxIcon';
import InstagramIcon from 'mdi-react/InstagramIcon';

const styles = {
  root: {
    flexGrow: 1,
    position: 'fixed',
    zIndex: 100,
    width: '100%'
  },
  flex: {
    flex: 1,
    fontSize: 18,
    fontWeight: '200'
  },
  menuButton: {
    color: '#fff'
  }
};

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="Header">
        <div className={classes.root}>
          <AppBar className={"app-bar-" + this.props.headerStyleProp.class} position="static">
            <Toolbar>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Welcome
              </Typography>
              <div className="social-menu-line">
                <IconButton className="social-icon" color="inherit" aria-label="Facebook">
                  <FacebookBoxIcon color={this.props.headerStyleProp.color} />
                </IconButton>
                <IconButton className="social-icon" color="inherit" aria-label="GitHub">
                  <GithubIcon color={this.props.headerStyleProp.color} />
                </IconButton>
                <IconButton className="social-icon" color="inherit" aria-label="Instagram">
                  <InstagramIcon color={this.props.headerStyleProp.color} />
                </IconButton>
              </div>
              <IconButton className="menu-btn" color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </div>
        <div className="header-bg-img"></div>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);