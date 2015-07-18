// Home

import React from 'react/addons';
import { Grid, Row, Col } from 'react-bootstrap';
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
            <Col md={4}>
              UX Design
            </Col>
            <Col md={4}>
              Web Development
            </Col>
            <Col md={4}>
              Mobile App Development
            </Col>
          </Row>
        </Grid>
        <Projects/>
      </article>
    );
  }
}
