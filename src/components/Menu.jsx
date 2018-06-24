import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import FacebookBoxIcon from 'mdi-react/FacebookBoxIcon';
import GithubIcon from 'mdi-react/GithubBoxIcon';
import InstagramIcon from 'mdi-react/InstagramIcon';

const styles = theme => ({});

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      right: false,
    };
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  toggleMenu(side, open) {
    this.setState({
      [side]: open
    })
  }

  componentDidMount() {
    this.props.onRef(this)
  }
  componentWillUnmount() {
    this.props.onRef(undefined)
  }

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem button className="list-item-button">
            <ListItemIcon>
              <FacebookBoxIcon color="rgba(0, 0, 0, 0.54)" />
            </ListItemIcon>
            <ListItemText primary="Facebook" />
          </ListItem>
          <ListItem button className="list-item-button">
            <ListItemIcon>
              <GithubIcon color="rgba(0, 0, 0, 0.54)" />
            </ListItemIcon>
            <ListItemText primary="GitHub" />
          </ListItem>
          <ListItem button className="list-item-button">
            <ListItemIcon>
              <InstagramIcon color="rgba(0, 0, 0, 0.54)" />
            </ListItemIcon>
            <ListItemText primary="Instagram" />
          </ListItem>
        </List>
      </div>
    );

    return (
      <div>
        <SwipeableDrawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer('right', false)}
          onOpen={this.toggleDrawer('right', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);