import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import '../App.css';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    button: {
        margin: theme.spacing(),
    },
});

class Footer extends Component {
    render() {
        return (
            <div className='Footer'>
                {'Copyright © ' + new Date().getFullYear()}
            </div>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
