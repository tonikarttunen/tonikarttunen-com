// Menu

import React from 'react/addons';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import styles from './Menu.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
export default class Menu {
  render() {
    const menuItems = [
      {
        id: 1,
        title: 'Home',
        url: '/'
      },
      {
        id: 2,
        title: 'User Experience Design',
        url: '/user-experience-design'
      },
      {
        id: 3,
        title: 'Software Development',
        url: '/software-development'
      },
      {
        id: 4,
        title: 'Projects',
        url: 'projects'
      }
    ];

    const projects = [
      {
        id: 1,
        title: 'Viima Mobile User Interface',
        url: '/projects/viima-mobile-user-interface'
      },
      {
        id: 2,
        title: 'Aalto MyCourses Usability Evaluation',
        url: '/projects/aalto-mycourses-usability-evaluation'
      },
      {
        id: 3,
        title: 'Internet of Things Solutions for Länsimetro',
        url: '/projects/internet-of-things-solutions-for-lansimetro'
      },
      {
        id: 4,
        title: 'HelsinkiGraph',
        url: '/projects/helsinkigraph'
      },
      {
        id: 5,
        title: 'B. Sc. Thesis',
        url: '/projects/b-sc-thesis'
      },
      {
        id: 6,
        title: '/projects/personal-finance',
        url: 'Personal Finance'
      },
      {
        id: 7,
        title: 'London Travel Guide',
        url: '/projects/london-travel-guide'
      }
    ];

    return (
      <Grid className='Menu'>
        {menuItems.map(item => {
          return (
            <Row key={item.id}>
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
                  <li key={project.id}>
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
