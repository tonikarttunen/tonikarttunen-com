// Viima

import React from 'react/addons';
import { Grid, Row, Col } from 'react-bootstrap';
import styles from './Viima.less';
import withStyles from '../../decorators/withStyles';
import DiagonalDivider from '../../components/DiagonalDivider';

@withStyles(styles)
export default class Viima {
  render() {
    return (
      <section className='Viima'>
        <Grid>
          <h2>Viima Mobile User Interface</h2>
          <Row>
            <Col md={4} className='InfoBox'>
              <div className='InlineBlock WidthAuto VerticalAlignTop'>
                <h3>Autumn</h3>
                <p>2014</p>
              </div>
              <DiagonalDivider
                id={'DiagonalDividerViima'}
                className='InlineBlock WidthAuto VerticalAlignTop'
                color={'#d7d7d7'}/>
              <div className='InlineBlock WidthAuto VerticalAlignTop'>
                <h3>Spring</h3>
                <p>2015</p>
              </div>
              <h3>Client</h3>
              <p>Viima Solutions Oy</p>
              <h3>Awards</h3>
              <p>Accenture Quality Award Finalist</p>
              <h3>Technology</h3>
              <p>Backbone.JS</p>
            </Col>
            <Col md={8}>
              <p>
                The goal of this project was to design and develop
                a new user-friendly mobile user interface for Viima
                from scratch. Viima is a browser-based tool that
                can be used as a feedback system and as an internal
                innovation platform within client companies.
              </p>
              <p>
                The main challenge of the project was that the playful
                and highly visual desktop user interface of the Viima
                system was only tailored for large desktop computer screens.
                We had to completely redesign the user interface for
                mobile device while maintaining the same playfulness as in
                the desktop user interface.
                Additionally, an important requirement for the new user
                interface was that it had to be customizable so that
                it would work nicely with various brand colours of the
                client companies.
                To get a realistic picture of how the users of the
                application perceived our designs, we conducted lots of
                user testing during the project (first with paper
                prototypes and later with real software).
              </p>
              <p>
                The project was done as part of the CSE-C2610/CSE-C2620
                Software Project course at Aalto University. Our team, which
                consisted of seven students, was selected as the second best
                team of the course by Accenture and the course staff (there
                were 16 other teams participating in the course). During the
                project, my tasks included user interface design (both low-fidelity
                wireframing and high-fidelity visual design with Adobe Illustrator),
                usability testing, front-end software development and testing.
              </p>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}
