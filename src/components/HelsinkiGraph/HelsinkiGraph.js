// HelsinkiGraph

import React from 'react/addons';
import { Grid, Row, Col } from 'react-bootstrap';
import styles from './HelsinkiGraph.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
export default class HelsinkiGraph {
  render() {
    return (
      <section className="HelsinkiGraph">
        <Grid>
          <h2>HelsinkiGraph</h2>
          <div className="youtube">
            <iframe
              width="1280"
              height="720"
              src="https://www.youtube.com/embed/SnNY_iYPsw4?rel=0"
              frameBorder="0"
              allowFullScreen>
            </iframe>
          </div>
          <Row>
            <Col md={4} className="InfoBox">
              <h3>Autumn</h3>
              <p>2013</p>
              <h3>Technology</h3>
              <p>Objective-C</p>
            </Col>
            <Col md={8}>
              <p>
                This app prototype can be used for finding movie showtimes in
                Finnish cinemas. It can also be used for finding points of
                interests nearby. It uses Finnkino API for showing movie
                showtimes and Foursquare API for finding points of interest.
              </p>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}
