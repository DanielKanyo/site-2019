import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
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
  card: {

  },
  media: {
    height: '60px',
    backgroundColor: '#52ce8e'
  },
});

class Skills extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="Skills">
        <div className={"tab-container " + classes.root}>
          <Grid container spacing={16}>
            <Grid item xs={12} sm={6}>
              <div className="tab-container-grid">
                <Card className={classes.card}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="Recipe" className={classes.avatar}>
                        FE
                      </Avatar>
                    }
                    action={
                      <IconButton>
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Front-end"
                  />
                  <div className={classes.media}></div>
                  <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                      Lizard
                    </Typography>
                    <Typography component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button className="card-button" size="small" color="primary">
                      Share
                    </Button>
                    <Button className="card-button" size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="tab-container-grid">
                Back-end
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="tab-container-grid">
                DevOps
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="tab-container-grid">
                Other
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