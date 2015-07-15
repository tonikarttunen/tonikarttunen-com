// Viima

import React from 'react/addons';
import { Grid, Row, Col } from 'react-bootstrap';
import styles from './Viima.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
export default class Viima {
  render() {
    return (
      <section className="Viima">
        <Grid>
          <h2>Viima Mobile User Interface</h2>
          <Row>
            <Col md={4} className="InfoBox">
              <h3>Autumn 2014—spring 2015</h3>
              <p>Autumn 2014—spring 2015</p>
              <h3>Client</h3>
              <p>Viima Solutions Oy</p>
              <h3>Awards</h3>
              <p>Accenture Quality Award Finalist</p>
            </Col>
            <Col md={8}>
              <p>
                Goals
              </p>
              <p>
                Challenges: web UI only tailored for large screens,
                difficult to handle it on tiny mobile screens;
                had to redesign the UI from scratch
              </p>
              <p>
                Good stuff: usability testing,
                Accenture quality award finalist,
                "ammattimainen ote tekemiseen" ja Scumin käyttö
              </p>
              <p>
                Team members
              </p>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}
