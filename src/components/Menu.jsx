import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

import AccountIcon from 'mdi-react/AccountIcon';
import WorkIcon from 'mdi-react/WorkIcon';
import StarIcon from 'mdi-react/StarIcon';
import CameraIcon from 'mdi-react/CameraIcon';
import MessageProcessingIcon from 'mdi-react/MessageProcessingIcon';
import FacebookBoxIcon from 'mdi-react/FacebookBoxIcon';
import GithubIcon from 'mdi-react/GithubBoxIcon';
import InstagramIcon from 'mdi-react/InstagramIcon';

import { animateScroll as scroll, scroller } from 'react-scroll';

const styles = theme => ({});

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            right: false,
        };
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    toggleDrawer = (side, open) => () => {
        let body = document.getElementsByTagName('body')[0];

        if (body.classList.length !== 0) {
            body.classList.remove("body-overflow-hidden");
        }

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

    handleTabChange(tabValue) {
        this.props.handleChangeTabValueProp(tabValue);
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

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>
                    <ListItem onClick={(e) => this.scrollTo('About')} button className="list-item-button">
                        <ListItemIcon>
                            <AccountIcon color="rgba(0, 0, 0, 0.54)" />
                        </ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItem>
                    <ListItem onClick={(e) => { this.handleTabChange(0); this.scrollTo('SwipeableView') }} button className="list-item-button">
                        <ListItemIcon>
                            <WorkIcon color="rgba(0, 0, 0, 0.54)" />
                        </ListItemIcon>
                        <ListItemText primary="Work" />
                    </ListItem>
                    <ListItem onClick={(e) => { this.handleTabChange(1); this.scrollTo('SwipeableView') }} button className="list-item-button">
                        <ListItemIcon>
                            <StarIcon color="rgba(0, 0, 0, 0.54)" />
                        </ListItemIcon>
                        <ListItemText primary="Skills" />
                    </ListItem>
                    <ListItem onClick={(e) => { this.handleTabChange(2); this.scrollTo('SwipeableView') }} button className="list-item-button">
                        <ListItemIcon>
                            <CameraIcon color="rgba(0, 0, 0, 0.54)" />
                        </ListItemIcon>
                        <ListItemText primary="Hobbie" />
                    </ListItem>
                    <ListItem onClick={(e) => this.scrollTo('Contact')} button className="list-item-button">
                        <ListItemIcon>
                            <MessageProcessingIcon color="rgba(0, 0, 0, 0.54)" />
                        </ListItemIcon>
                        <ListItemText primary="Contact" />
                    </ListItem>

                    <Divider className="menu-divider" />
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/kanyo.daniel">
                        <ListItem button className="list-item-button">
                            <ListItemIcon>
                                <FacebookBoxIcon color="rgba(0, 0, 0, 0.54)" />
                            </ListItemIcon>
                            <ListItemText primary="Facebook" />
                        </ListItem>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/DanielKanyo">
                        <ListItem button className="list-item-button">
                            <ListItemIcon>
                                <GithubIcon color="rgba(0, 0, 0, 0.54)" />
                            </ListItemIcon>
                            <ListItemText primary="GitHub" />
                        </ListItem>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/daniel_kanyo/">
                        <ListItem button className="list-item-button">
                            <ListItemIcon>
                                <InstagramIcon color="rgba(0, 0, 0, 0.54)" />
                            </ListItemIcon>
                            <ListItemText primary="Instagram" />
                        </ListItem>
                    </a>
                </List>
            </div>
        );

        return (
            <div>
                <Drawer
                    anchor="left"
                    open={this.state.right}
                    onClose={this.toggleDrawer('right', false)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('right', false)}
                        onKeyDown={this.toggleDrawer('right', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}

Menu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);