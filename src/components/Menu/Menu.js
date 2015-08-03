// Menu

import React from 'react/addons';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import styles from './Menu.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
export default class Menu {
  render() {
    const categories = [
      {
        title: 'Home',
        url: '/'
      },
      /* {
        title: 'User Experience Design',
        url: '/user-experience-design'
      },
      {
        title: 'Software Development',
        url: '/software-development'
      }, */
      {
        title: 'Projects',
        url: 'projects'
      }
    ];

    const projects = [
      {
        title: 'Viima Mobile User Interface',
        url: '/projects/viima-mobile-user-interface'
      },
      {
        title: 'Aalto MyCourses Usability Evaluation',
        url: '/projects/aalto-mycourses-usability-evaluation'
      },
      {
        title: 'Internet of Things Solutions for Länsimetro',
        url: '/projects/internet-of-things-solutions-for-lansimetro'
      },
      {
        title: 'HelsinkiGraph',
        url: '/projects/helsinkigraph'
      },
      {
        title: 'B. Sc. Thesis',
        url: '/projects/b-sc-thesis'
      },
      {
        title: 'Personal Finance',
        url: '/projects/personal-finance'
      },
      {
        title: 'London Travel Guide',
        url: '/projects/london-travel-guide'
      }
    ];

    return (
      <Grid className='Menu'>
        {categories.map(item => {
          return (
            <Row key={item.title}>
              <Col md={12}>
                <h2>
                  <Link to={item.url}>{item.title}</Link>
                </h2>
              </Col>
            </Row>
          );
        })}
        <Row>
          <Col md={12}>
            <ul>
              {projects.map(project => {
                return (
                  <li key={project.title}>
                    <Link to={project.url}>{project.title}</Link>
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </Grid>
    );
  }
}
