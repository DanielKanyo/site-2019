import React, { Component } from 'react';
import MapContainer from './MapContainer';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    button: {
        width: 130
    }
});

class Contact extends Component {
    state = {
        open: false,
        name: '',
        email: '',
        message: '',
        snackOpen: false
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
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
                db.collection('emails').add({ formData });

                this.setState({ snackOpen: true });
            }).catch(error => {
                console.error(error);
            });

            this.setState({
                name: '',
                email: '',
                message: '',
            });
        }
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ snackOpen: false });
    };

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <div className='Contact'>
                    <MapContainer />
                </div>

                <div className='ContactFrom'>
                    <Card className={classes.card}>
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
                                rowsMax='4'
                                rows='4'
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
                                    color='primary'
                                    className={classes.button}
                                    disabled={!this.state.name || !this.state.email || !this.state.message}
                                >
                                    Submit
                                </Button>
                            </div>

                        </form>
                    </Card>
                </div>

            </React.Fragment>
        );
    }
}

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
