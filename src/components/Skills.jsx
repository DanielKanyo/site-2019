import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import HeartIcon from 'mdi-react/HeartIcon';
import LinuxIcon from 'mdi-react/LinuxIcon';
import NodejsIcon from 'mdi-react/NodejsIcon';
import ReactIcon from 'mdi-react/ReactIcon';
import DockerIcon from 'mdi-react/DockerIcon';
import IconButton from '@material-ui/core/IconButton';
import InformationVariantIcon from 'mdi-react/InformationVariantIcon';
import Tooltip from '@material-ui/core/Tooltip';
import '../App.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  favourite: {
    height: '60px',
    position: 'relative'
  },
  chip: {
    margin: '0px 5px 5px 0px',
  },
});

class Skills extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="Skills">
        <div className={"tab-container " + classes.root}>
          <Grid container spacing={16}>
            <Grid className="sw-grid" item xs={12} sm={6}>
              <div className="tab-container-grid">
                <Card className={classes.card}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="Recipe" className={classes.avatar}>
                        FE
                      </Avatar>
                    }
                    action={
                      <Tooltip id="tooltip-left" title="More..." placement="left">
                        <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Front_and_back_ends">
                          <IconButton className="information-button">
                            <InformationVariantIcon color="rgba(0, 0, 0, 0.54)" />
                          </IconButton>
                        </a>
                      </Tooltip>
                    }
                    title="Front-end"
                  />
                  <div className={classes.favourite + " front-end-fav"}>
                    <div className="favourite-icon-left">
                      <ReactIcon color="white" />
                    </div>
                    <div className="favourite-text">
                      REACT.JS
                    </div>
                    <div className="favourite-icon-right">
                      <HeartIcon color="white" />
                    </div>
                  </div>
                  <CardContent className="card-content">
                    <Chip
                      avatar={<Avatar className="skill-avatar-letter">H</Avatar>}
                      label="HTML5"
                      className={classes.chip}
                    />
                    <Chip
                      avatar={<Avatar className="skill-avatar-letter">CS</Avatar>}
                      label="CSS3"
                      className={classes.chip}
                    />
                    <Chip
                      avatar={<Avatar className="skill-avatar-letter">JS</Avatar>}
                      label="Java Script"
                      className={classes.chip}
                    />
                    <Chip
                      avatar={<Avatar className="skill-avatar-letter">JQ</Avatar>}
                      label="JQuery"
                      className={classes.chip}
                    />
                    <Chip
                      avatar={<Avatar className="skill-avatar-letter">R</Avatar>}
                      label="React.js"
                      className={classes.chip}
                    />
                    <Chip
                      avatar={<Avatar className="skill-avatar-letter">BS</Avatar>}
                      label="Bootstrap"
                      className={classes.chip}
                    />
                    <Chip
                      avatar={<Avatar className="skill-avatar-letter">RN</Avatar>}
                      label="React Native"
                      className={classes.chip}
                    />
                    <Chip
                      avatar={<Avatar className="skill-avatar-letter">M</Avatar>}
                      label="Material"
                      className={classes.chip}
                    />
                  </CardContent>
                </Card>
              </div>
            </Grid>
            <Grid className="sw-grid" item xs={12} sm={6}>
              <div className="tab-container-grid">
                <Card className={classes.card}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="Recipe" className={classes.avatar}>
                        BE
                      </Avatar>
                    }
                    action={
                      <Tooltip id="tooltip-left" title="More..." placement="left">
                        <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Front_and_back_ends">
                          <IconButton className="information-button">
                            <InformationVariantIcon color="rgba(0, 0, 0, 0.54)" />
                          </IconButton>
                        </a>
                      </Tooltip>
                    }
                    title="Back-end"
                  />
                  <div className={classes.favourite + " back-end-fav"}>
                    <div className="favourite-icon-left">
                      <NodejsIcon color="white" />
                    </div>
                    <div className="favourite-text">
                      NODE.JS
                    </div>
                    <div className="favourite-icon-right">
                      <HeartIcon color="white" />
                    </div>
                  </div>
                  <CardContent className="card-content">
                    <Chip
                      avatar={<Avatar className="skill-avatar-letter">N</Avatar>}
                      label="Node.js"
                      className={classes.chip}
                    />
                    <Chip
                      avatar={<Avatar className="skill-avatar-letter">J</Avatar>}
                      label="Java"
                      className={classes.chip}
                    />
                    <Chip
                      avatar={<Avatar className="skill-avatar-letter">P</Avatar>}
                      label="Php"
                      className={classes.chip}
                    />
                  </CardContent>
                </Card>
              </div>
            </Grid>
            <Grid className="sw-grid" item xs={12} sm={6}>
              <div className="tab-container-grid">
                <Card className={classes.card}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="Recipe" className={classes.avatar}>
                        DO
                      </Avatar>
                    }
                    action={
                      <Tooltip id="tooltip-left" title="More..." placement="left">
                        <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/DevOps">
                          <IconButton className="information-button">
                            <InformationVariantIcon color="rgba(0, 0, 0, 0.54)" />
                          </IconButton>
                        </a>
                      </Tooltip>
                    }
                    title="DevOps"
                  />
                  <div className={classes.favourite + " devops-fav"}>
                    <div className="favourite-icon-left">
                      <DockerIcon color="white" />
                    </div>
                    <div className="favourite-text">
                      DOCKER
                    </div>
                    <div className="favourite-icon-right">
                      <HeartIcon color="white" />
                    </div>
                  </div>
                  <CardContent className="card-content">
                    <Chip
                      avatar={<Avatar className="skill-avatar-letter">J</Avatar>}
                      label="Jenkins"
                      className={classes.chip}
                    />
                    <Chip
                      avatar={<Avatar className="skill-avatar-letter">D</Avatar>}
                      label="Docker"
                      className={classes.chip}
                    />
                    <Chip
                      avatar={<Avatar className="skill-avatar-letter">SS</Avatar>}
                      label="Shell Script"
                      className={classes.chip}
                    />
                  </CardContent>
                </Card>
              </div>
            </Grid>
            <Grid className="sw-grid" item xs={12} sm={6}>
              <div className="tab-container-grid">
                <Card className={classes.card}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="Recipe" className={classes.avatar}>
                        OT
                      </Avatar>
                    }
                    title="Other"
                  />
                  <div className={classes.favourite + " others-fav"}>
                    <div className="favourite-icon-left">
                      <LinuxIcon color="white" />
                    </div>
                    <div className="favourite-text">
                      LINUX
                    </div>
                    <div className="favourite-icon-right">
                      <HeartIcon color="white" />
                    </div>
                  </div>
                  <CardContent className="card-content">
                    <Chip
                      avatar={<Avatar className="skill-avatar-letter">L</Avatar>}
                      label="Linux"
                      className={classes.chip}
                    />
                    <Chip
                      avatar={<Avatar className="skill-avatar-letter">G</Avatar>}
                      label="Git"
                      className={classes.chip}
                    />
                    <Chip
                      avatar={<Avatar className="skill-avatar-letter">MD</Avatar>}
                      label="MongoDB"
                      className={classes.chip}
                    />
                    <Chip
                      avatar={<Avatar className="skill-avatar-letter">MS</Avatar>}
                      label="MySQL"
                      className={classes.chip}
                    />
                    <Chip
                      avatar={<Avatar className="skill-avatar-letter">UX</Avatar>}
                      label="UX Design"
                      className={classes.chip}
                    />
                    <Chip
                      avatar={<Avatar className="skill-avatar-letter">NS</Avatar>}
                      label="Non-Smoking"
                      className={classes.chip}
                    />
                    <Chip
                      avatar={<Avatar className="skill-avatar-letter">DL</Avatar>}
                      label="Driving Licence"
                      className={classes.chip}
                    />
                  </CardContent>
                </Card>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Skills.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skills);