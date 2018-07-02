import React, { Component } from 'react';
import '../App.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

import FacebookBoxIcon from 'mdi-react/FacebookBoxIcon';
import GithubIcon from 'mdi-react/GithubBoxIcon';
import InstagramIcon from 'mdi-react/InstagramIcon';

import { animateScroll as scroll, scroller } from 'react-scroll';

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

    this.handleToggleDrawer = this.handleToggleDrawer.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollTo(string) {
    scroller.scrollTo(string, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -100
    });
  }

  handleToggleDrawer(side, open, e) {
    this.props.handleToggleDrawer(side, open);
  }

  handleTabChange(val) {
    this.props.handleChangeTabValueProp(val);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="Header">
        <div className={classes.root}>
          <AppBar className={"app-bar-" + this.props.headerStyleProp.class} position="static">
            <Toolbar>
              <Typography variant="title" color="inherit" className={classes.flex} >
                {/* <span className={"header-text-" + this.props.headerStyleProp.class}>Welcome</span> */}
                <div className="header-navigation">
                  <Button 
                    className={"nav-icon-" + this.props.headerStyleProp.class} 
                    onClick={(e) => this.scrollTo('About')}
                  >
                    <span className={"header-navigation-item-" + this.props.headerStyleProp.class}>
                      About Me
                    </span>
                  </Button>
                  <Button 
                    className={"nav-icon-" + this.props.headerStyleProp.class} 
                    onClick={(e) => {this.scrollTo('SwipeableView'); this.handleTabChange(0)}}
                  >
                    <span className={"header-navigation-item-" + this.props.headerStyleProp.class}>
                      Projects
                    </span>
                  </Button>
                  <Button 
                    className={"nav-icon-" + this.props.headerStyleProp.class} 
                    onClick={(e) => {this.scrollTo('SwipeableView'); this.handleTabChange(1)}}
                  >
                    <span className={"header-navigation-item-" + this.props.headerStyleProp.class}>
                      Skills
                    </span>
                  </Button>
                  <Button 
                    className={"nav-icon-" + this.props.headerStyleProp.class} 
                    onClick={(e) => {this.scrollTo('SwipeableView'); this.handleTabChange(2)}}
                  >
                    <span className={"header-navigation-item-" + this.props.headerStyleProp.class}>
                      Hobbie
                    </span>
                  </Button>
                  <Button 
                    className={"nav-icon-" + this.props.headerStyleProp.class} 
                    onClick={(e) => this.scrollTo('Contact')}
                  >
                    <span className={"header-navigation-item-" + this.props.headerStyleProp.class}>
                      Contact
                    </span>
                  </Button>
                </div>
              </Typography>
              <div className="social-menu-line">
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/kanyo.daniel">
                  <Button className={"social-icon-" + this.props.headerStyleProp.class}>
                    <FacebookBoxIcon color={this.props.headerStyleProp.color} />
                  </Button>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/DanielKanyo">
                  <Button className={"social-icon-" + this.props.headerStyleProp.class}>
                    <GithubIcon color={this.props.headerStyleProp.color} />
                  </Button>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/daniel_kanyo/">
                  <Button className={"social-icon-" + this.props.headerStyleProp.class}>
                    <InstagramIcon color={this.props.headerStyleProp.color} />
                  </Button>
                </a>
              </div>
              <Button
                onClick={(e) => this.handleToggleDrawer('right', true, e)}
                className={"menu-btn-" + this.props.headerStyleProp.class}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon />
              </Button>
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