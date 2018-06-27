import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ArchiveIcon from 'mdi-react/ArchiveIcon';
import SchoolIcon from 'mdi-react/SchoolIcon';
import CameraIcon from 'mdi-react/CameraIcon';
import '../App.css';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
});

class SwipeableView extends Component {

  handleChange = (event, tabValue) => {
    this.props.handleChangeTabValueProp(tabValue);
  };

  render() {
    const { classes, theme } = this.props;
    return (
      <div className="SwipeableView" name="SwipeableView">
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              className="swipeable-view-tabs"
              value={this.props.tabValueProp}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              fullWidth
            >
              <Tab label="Work" icon={<ArchiveIcon />} />
              <Tab label="Skills" icon={<SchoolIcon />} />
              <Tab label="Hobbie" icon={<CameraIcon />} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={this.props.tabValueProp}
          >
            <TabContainer dir={theme.direction}>Item One</TabContainer>
            <TabContainer dir={theme.direction}>Item Two</TabContainer>
            <TabContainer dir={theme.direction}>Item Three</TabContainer>
          </SwipeableViews>
        </div>
      </div>
    );
  }
}

SwipeableView.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SwipeableView);
