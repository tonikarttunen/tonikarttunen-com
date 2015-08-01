// Strategic User-Centred Design project

import React from 'react/addons';
import { Grid, Row, Col } from 'react-bootstrap';
import styles from './StrategicUserCentredDesign.less';
import withStyles from '../../decorators/withStyles';
import ProjectDetailView from '../../components/ProjectDetailView';

@withStyles(styles)
export default class StrategicUserCentredDesign {
  render() {
    return (
      <ProjectDetailView>
        <section className="StrategicUserCentredDesign">
          <Grid>
            <h2>Internet of Things Solutions for Länsimetro</h2>

            <Row>
              <Col md={4} className="InfoBox">
                <h3>Spring</h3>
                <p>2015</p>
                <h3>Client</h3>
                <p>Länsimetro</p>
              </Col>
              <Col md={8}>
                <p>
                  Goals
                </p>
                <p>
                  Challenges: very little interaction with the client company (Länsimetro)
                </p>
                <p>
                  Good stuff usability testing, ideation (444 ideas), the whole SUCD process
                </p>
                <p>
                  Team members
                </p>
              </Col>
            </Row>
          </Grid>
        </section>
      </ProjectDetailView>
    );
  }
}
