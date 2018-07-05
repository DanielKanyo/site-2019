import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../App.css';

const styles = {
  media: {
    height: 0,
    paddingTop: '146px',
    backgroundColor: 'red'
  },
};

class Work extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="Work">
        <Grid container spacing={16}>
          <Grid className="sw-grid" item xs={12} sm={6}>
            <div className="tab-container-grid">
              <div className="work-paper work1">
                <Card>
                  <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                      <Typography gutterBottom variant="headline" component="h2">
                      Lizard
                      </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                      </Button>
                    <Button size="small" color="primary">
                      Learn More
                      </Button>
                  </CardActions>
                </Card>
              </div>
            </div>
          </Grid>
          <Grid className="sw-grid" item xs={12} sm={6}>
            <div className="tab-container-grid">
              <Paper elevation={2}>
                <div className="work-paper work2">Work2</div>
              </Paper>
            </div>
          </Grid>
          <Grid className="sw-grid" item xs={12} sm={6}>
            <div className="tab-container-grid">
              <Paper elevation={2}>
                <div className="work-paper work3">Work3</div>
              </Paper>
            </div>
          </Grid>
          <Grid className="sw-grid" item xs={12} sm={6}>
            <div className="tab-container-grid">
              <Paper elevation={2}>
                <div className="work-paper work4">Work4</div>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Work.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Work);
