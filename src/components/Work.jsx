import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../App.css';

const styles = {};

class Work extends Component {
  render() {
    return (
      <div className="Work">
        <Grid container spacing={16}>
          <Grid className="sw-grid" item xs={12} sm={6}>
            <div className="tab-container-grid">
              <div className="work-paper work1">
                <Card>
                  <div className="work-image cockpit-image"><div className="work-image-logo-cockpit"></div></div>
                  <CardContent className="work-project-container">
                    <Typography className="work-project-title" gutterBottom variant="headline" component="h3">
                      Vinn Cockpit
                      </Typography>
                  </CardContent>
                  <CardActions className="work-project-learnmore">
                    <a href="https://www.myvinn.com/en/hotel-technology/vinn-cockpit" target="_blank" rel="noopener noreferrer">
                      <Button size="small" color="primary" className="work-project-learnmore-button cockpit-button">
                        Learn More
                      </Button>
                    </a>
                  </CardActions>
                </Card>
              </div>
            </div>
          </Grid>
          <Grid className="sw-grid" item xs={12} sm={6}>
            <div className="tab-container-grid">
              <div className="work-paper work2">
                <Card>
                  <div className="work-image kuechenmonitor-image">
                    <div className="kuechenmonitor-img-color"></div>
                    <div className="work-image-logo-kuechenmonitor">K</div>
                  </div>
                  <CardContent className="work-project-container">
                    <Typography className="work-project-title" gutterBottom variant="headline" component="h3">
                      Küchenmonitor
                    </Typography>
                  </CardContent>
                  <CardActions className="work-project-learnmore">
                    <a href="https://kuechenmonitor.de/pages/index.html" target="_blank" rel="noopener noreferrer">
                      <Button size="small" color="primary" className="work-project-learnmore-button kuechenmonitor-button">
                        Learn More
                      </Button>
                    </a>
                  </CardActions>
                </Card>
              </div>
            </div>
          </Grid>
          <Grid className="sw-grid" item xs={12} sm={6}>
            <div className="tab-container-grid">
              <div className="work-paper work3">
                <Card>
                  <div className="work-image fishingtours-image">
                    <div className="fishingtours-img-color"></div>
                    <div className="work-image-logo-fishingtours">F</div>
                  </div>
                  <CardContent className="work-project-container">
                    <Typography className="work-project-title" gutterBottom variant="headline" component="h3">
                      Fishingtours - Tisa
                    </Typography>
                  </CardContent>
                  <CardActions className="work-project-learnmore">
                    <a href="https://fishingtours-tisa.com/" target="_blank" rel="noopener noreferrer">
                      <Button size="small" color="primary" className="work-project-learnmore-button fishingtours-button">
                        Learn More
                      </Button>
                    </a>
                  </CardActions>
                </Card>
              </div>
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
