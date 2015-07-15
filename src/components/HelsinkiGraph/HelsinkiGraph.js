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
          <h2>HelsinkiGraph Mobile App Prototype</h2>
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
                Goals
              </p>
              <p>
                This app prototype used Finnkino XML API for showing movie showtimes
                and Foursquare API for finding points of interest nearby.
              </p>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}
