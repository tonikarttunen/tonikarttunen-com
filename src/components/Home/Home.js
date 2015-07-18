// Home

import React from 'react/addons';
import { Grid, Row, Col } from 'react-bootstrap';
import Contact from '../../components/Contact';
import Projects from '../../components/Projects';
import styles from './Home.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
export default class Home {
  render() {
    return (
      <article>
        <Grid componentClass='section' className='Home'>
          <Row>
            <Col md={3}>
              UX Design
            </Col>
            <Col md={3}>
              Web Development
            </Col>
            <Col md={3}>
              Mobile App Development
            </Col>
            <Col md={3}>
              <Contact/>
            </Col>
          </Row>
        </Grid>
        <Projects/>
      </article>
    );
  }
}
