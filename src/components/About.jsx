import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FacebookBoxIcon from 'mdi-react/FacebookBoxIcon';
import GithubIcon from 'mdi-react/GithubBoxIcon';
import InstagramIcon from 'mdi-react/InstagramIcon';
import '../App.css';

const styles = theme => ({
    button: {
        margin: '0px',
        backgroundColor: 'transparent',
        padding: '8px 6px',
        minWidth: '46px',
        boxShadow: 'none'
    },
    input: {
        display: 'none',
    },
});

class About extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="About" name="About">
                <div className="content-about-profile-image"></div>
                <div className="content-about-info">
                    <h3>Daniel Kanyo</h3>
                    <h6>DEVELOPER</h6>
                </div>
                <div className="content-about-social">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/kanyo.daniel">
                        <Button variant="contained" className={classes.button + " about-social-btn"}>
                            <FacebookBoxIcon color="#999999" />
                        </Button>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/DanielKanyo">
                        <Button variant="contained" className={classes.button + " about-social-btn"}>
                            <GithubIcon color="#999999" />
                        </Button>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/daniel_kanyo/">
                        <Button variant="contained" className={classes.button + " about-social-btn"}>
                            <InstagramIcon color="#999999" />
                        </Button>
                    </a>
                </div>
                <div className="content-about-text">
                    <span>
                        With experience in web development and design,
                        I maintain a healthy balance between functionality and visual impact in all my work. <br />
                        I believe every piece of design can be a work of art.
                    </span>
                </div>
            </div>
        );
    }
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
