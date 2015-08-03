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
                  In this project, our task was to explore ways for utilizing
                  Internet of Things to improve the usage experience of the upcoming
                  Länsimetro Matinkylä station.
                </p>
                <p>
                  We started the design process with a design brief that covered the
                  goals of the project. Then, we did user research to understand the
                  characteristics of the typical users of the upcoming metro station.
                  The user research phase consisted of a user survey (i.e. a questionnaire)
                  and observations of potential metro users. As a result of the user
                  research phase, we created three personas that described three
                  potential user groups of the station.
                </p>
                <p>
                  Based on the results of the previous phase, we created five design
                  perspectives. After creating the design perspectives, we came up with
                  more than 400 ideas for utilizing technology to enhance the user
                  experience of the station. We selected three of these 400 ideas for
                  further development, which included creating paper prototypes and
                  storyboards. We collected feedback from a small number of target users
                  to figure out what they thought about the prototypes and the storyboards.
                </p>
                <p>
                  The project was done with four other students for the Strategic
                  User-Centred Design course at Aalto University.
                </p>
              </Col>
            </Row>
          </Grid>
        </section>
      </ProjectDetailView>
    );
  }
}
