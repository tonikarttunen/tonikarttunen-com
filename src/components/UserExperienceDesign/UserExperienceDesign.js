// UserExperienceDesign

import React from 'react/addons';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import styles from './UserExperienceDesign.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
export default class UserExperienceDesign {
  render() {
    return (
      <Grid className='UserExperienceDesign'>
        <Row>
          <Col md={12}>
            <h2>User Experience Design</h2>
            <p>User interface design + prototyping + usability evaluation + user research</p>
            <Link to='/user-experience-design'>More Information</Link>
          </Col>
        </Row>
      </Grid>
    );
  }
}
