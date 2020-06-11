import React, { Component } from 'react';
import MapContainer from './MapContainer';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';

import { axios, db } from '../firebase/firebaseConfig';

import '../App.css';

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
    card: {
        height: '100%',
        background: '#4286f4'
    },
    textField: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        width: 'calc(100% - 32px)',
        marginBottom: 0
    },
    buttonContainer: {
        margin: theme.spacing(2),
        display: 'flex',
        justifyContent: 'flex-end'
    },
    sendIcon: {
        marginLeft: theme.spacing(1.5),
        marginTop: -2
    },
    button: {
        padding: '9px 16px 8px 16px'
    },
    title: {
        textAlign: 'center',
        marginBottom: 24,
        color: '#b3b3b3',
        fontSize: 14,
        fontFamily: '"Roboto", sans-serif'
    },
    mailIcon: {
        position: 'absolute',
        width: 500,
        height: 500,
        transform: 'rotate(30deg)',
        opacity: .1,
        color: 'white',
        top: -25,
        left: -135,
        zIndex: 0,
        pointerEvents: 'none',
        [theme.breakpoints.up("md")]: {
            width: 700,
            height: 700,
            top: -65,
        }
    }
});

class Contact extends Component {
    state = {
        snackbarOpen: false,
        name: '',
        email: '',
        message: '',
        snackOpen: false
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    updateInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.sendEmail();
    };

    sendEmail = () => {
        const { name, email, message } = this.state;

        if (name && email && message) {
            const formData = {
                name,
                email,
                message
            }

            axios.post('https://us-central1-daniel-kanyo-2018.cloudfunctions.net/submit', formData).then(() => {
                db.collection('emails').add({
                    ...formData,
                    emailSent: true,
                    time: new Date()
                });

                this.setState({ snackOpen: true });
            }).catch(error => {
                db.collection('emails').add({
                    ...formData,
                    emailSent: false,
                    time: new Date()
                });

                console.error(error);
            });

            this.setState({
                name: '',
                email: '',
                message: '',
            });
        }
    }

    openSnackbar = () => {
        this.setState({ snackbarOpen: true });
    }

    handleCloseSnackbar = () => {
        this.setState({ snackbarOpen: false });
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>

                <div className={classes.title}>Do not hesitate to contact me!</div>

                <div className='ContactFrom'>
                    <Card className={classes.card}>
                        <MailIcon className={classes.mailIcon} />
                        <form onSubmit={this.handleSubmit}>
                            <TextField
                                id='outlined-name'
                                label='Your name'
                                name='name'
                                placeholder='Your name goes here...'
                                className={classes.textField}
                                value={this.state.name || ''}
                                onChange={(e) => this.updateInput(e)}
                                margin='normal'
                                variant='outlined'
                                InputProps={{
                                    style: {
                                        color: 'white'
                                    }
                                }}
                            />
                            <TextField
                                id='outlined-name'
                                label='Your email address'
                                name='email'
                                placeholder='Please add your email address...'
                                className={classes.textField}
                                value={this.state.email || ''}
                                onChange={(e) => this.updateInput(e)}
                                margin='normal'
                                variant='outlined'
                                InputProps={{
                                    style: {
                                        color: 'white'
                                    }
                                }}
                            />
                            <TextField
                                id='outlined-name'
                                label='Message'
                                name='message'
                                placeholder='Share your thoughts with me...'
                                className={classes.textField}
                                value={this.state.message || ''}
                                onChange={(e) => this.updateInput(e)}
                                margin='normal'
                                variant='outlined'
                                multiline
                                rowsMax='8'
                                rows='6'
                                InputProps={{
                                    style: {
                                        color: 'white'
                                    }
                                }}
                            />

                            <div className={classes.buttonContainer}>
                                <Button
                                    type='submit'
                                    variant='contained'
                                    className={classes.button}
                                    color='primary'
                                    disabled={!this.state.name || !this.state.email || !this.state.message}
                                    onClick={this.openSnackbar}
                                >
                                    Submit
                                    <SendIcon className={classes.sendIcon} />
                                </Button>
                            </div>

                        </form>
                    </Card>
                </div>

                <div className='Contact'>
                    <MapContainer />
                </div>

                <Snackbar
                    open={this.state.snackbarOpen}
                    onClose={this.handleCloseSnackbar}
                    autoHideDuration={5000}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Thank you!</span>}
                />

            </React.Fragment>
        );
    }
}

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
