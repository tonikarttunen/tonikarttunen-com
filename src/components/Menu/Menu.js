// Menu

import React from 'react/addons';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import styles from './Menu.less';
import withStyles from '../../decorators/withStyles';

const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

@withStyles(styles)
export default class Menu {
  render() {
    return (
      <ReactCSSTransitionGroup transitionName='Menu' transitionAppear={true}>
        <Grid className='Menu' key={this}>
          <Row>
            <Col md={12}>
              <h2>
                <Link to='/'>
                  Home
                </Link>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h2>
                <Link to='/user-experience-design'>
                    User Experience Design
                </Link>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h2>
                <Link to='/software-development'>
                    Software Development
                </Link>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h2>
                <Link to='/projects'>
                    Projects
                </Link>
              </h2>
              <ul>
                <li>
                  <Link to='/projects/viima-mobile-user-interface'>
                    Viima Mobile User Interface
                  </Link>
                </li>
                <li>
                  <Link to='/projects/aalto-mycourses-usability-evaluation'>
                    Aalto MyCourses Usability Evaluation
                  </Link>
                </li>
                <li>
                  <Link to='/projects/internet-of-things-solutions-for-lansimetro'>
                    Internet of Things Solutions for Länsimetro
                  </Link>
                </li>
                <li>
                  <Link to='/projects/helsinkigraph'>
                    HelsinkiGraph
                  </Link>
                </li>
                <li>
                  <Link to='/projects/b-sc-thesis'>
                    B. Sc. Thesis
                  </Link>
                </li>
                <li>
                  <Link to='/projects/personal-finance'>
                    Personal Finance
                  </Link>
                </li>
                <li>
                  <Link to='/projects/london-travel-guide'>
                    London Travel Guide
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Grid>
      </ReactCSSTransitionGroup>
    );
  }
}
