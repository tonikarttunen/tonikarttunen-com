// HelsinkiGraph

import React from 'react/addons';
import DocumentTitle from 'react-document-title';
import { Grid, Row, Col } from 'react-bootstrap';
import styles from './HelsinkiGraph.less';
import withStyles from '../../decorators/withStyles';
import ProjectDetailView from '../../components/ProjectDetailView';

@withStyles(styles)
export default class HelsinkiGraph {
  render() {
    return (
      <DocumentTitle title='HelsinkiGraph — Toni Karttunen'>
        <ProjectDetailView>
          <section className="HelsinkiGraph">
            <Grid>
              <h2>HelsinkiGraph</h2>
              <div className="YouTube">
                <iframe
                  width="1280"
                  height="720"
                  src="https://www.youtube.com/embed/SnNY_iYPsw4?rel=0"
                  frameBorder="0"
                  allowFullScreen
                />
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
        </ProjectDetailView>
      </DocumentTitle>
    );
  }
}
