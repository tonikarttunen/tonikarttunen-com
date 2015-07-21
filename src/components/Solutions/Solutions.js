// Solutions

import React from 'react/addons';
import { Grid, Row, Col } from 'react-bootstrap';
import styles from './Solutions.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
export default class Solutions {
  render() {
    return (
      <div className='Solutions'>
        <Grid componentClass='section'>
          <h1>Solutions</h1>
          <Row>
            <Col md={6} sm={6}>
              <div className='SolutionIcon'>
                <span className='ion-easel'/> <span className='ion-edit'/>
              </div>
              <h2>User Experience Design</h2>
              <ul>
                <li>Usability evaluation</li>
                <li>User interface design</li>
                <li>Prototyping</li>
                <li>User research</li>
              </ul>
            </Col>
            <Col md={6} sm={6}>
              <div className='SolutionIcon'>
                <span className='ion-laptop'/> <span className='ion-monitor'/> <span className='ion-iphone'/>
              </div>
              <h2>Software Development</h2>
              <ul>
                <li>Web applications</li>
                <li>iOS applications</li>
              </ul>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
