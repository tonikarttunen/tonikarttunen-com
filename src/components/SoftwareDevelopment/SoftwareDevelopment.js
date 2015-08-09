// SoftwareDevelopment

import React from 'react/addons';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import styles from './SoftwareDevelopment.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
export default class SoftwareDevelopment {
  render() {
    return (
      <Grid className='SoftwareDevelopment'>
        <Row>
          <Col md={12}>
            <h2>Software Development</h2>
            <p>Web apps + native iOS apps</p>
            <Link to='/software-development'>More Information</Link>
          </Col>
        </Row>
      </Grid>
    );
  }
}
