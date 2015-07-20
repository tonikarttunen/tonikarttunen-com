// Interaction Design and Evaluation project

import React from 'react/addons';
import { Grid, Row, Col } from 'react-bootstrap';
import styles from './InteractionDesignAndEvaluation.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
export default class InteractionDesignAndEvaluation {
  render() {
    return (
      <section className="InteractionDesignAndEvaluation">
        <Grid>
          <h2>Aalto MyCourses Mobile User Interface Usability Evaluation</h2>

          <div className="youtube">
            <iframe
              width="1280"
              height="720"
              src="https://www.youtube.com/embed/xoz7yhGl3p8?rel=0"
              frameBorder="0"
              allowFullScreen>
            </iframe>
          </div>

          <Row>
            <Col md={4} className="InfoBox">
              <h3>Spring</h3>
              <p>2015</p>
              <h3>Client</h3>
              <p>Aalto University Learning Services, ICT for Learning Team</p>
            </Col>
            <Col md={8}>
              <p>
                Goals
                Mainly focused on high-level issues such as navigation and
                information structure; did not consider visual design
                -> mid/medium fidelity prototype
              </p>
              <p>
                Challenges: bad mobile UI, lack of structure and broken information architecture
              </p>
              <p>
                Good stuff: usability testing, getting to know how to record mobile devices
                in usability tests
                SUS scores
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
