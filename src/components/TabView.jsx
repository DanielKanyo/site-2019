import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import WorkIcon from 'mdi-react/WorkIcon';
import StarIcon from 'mdi-react/StarIcon';
import CameraIcon from 'mdi-react/CameraIcon';

import Work from './Work';
import Skills from './Skills';
import Hobbie from './Hobbie';

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

class TabView extends Component {

    handleChange = (event, tabValue) => {
        this.props.handleChangeTabValueProp(tabValue);
    };

    handleChangeIndex = (tabValue) => {
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
                            variant="fullWidth"
                        >
                            <Tab label="Work" icon={<WorkIcon />} />
                            <Tab label="Skills" icon={<StarIcon />} />
                            <Tab label="Hobbie" icon={<CameraIcon />} />
                        </Tabs>
                    </AppBar>
                    {this.props.tabValueProp === 0 && <TabContainer dir={theme.direction}><Work /></TabContainer>}
                    {this.props.tabValueProp === 1 && <TabContainer className="sw-tab-container" dir={theme.direction}><Skills /></TabContainer>}
                    {this.props.tabValueProp === 2 && <TabContainer className="sw-tab-container" dir={theme.direction}><Hobbie /></TabContainer>}
                </div>
            </div>
        );
    }
}

TabView.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TabView);
