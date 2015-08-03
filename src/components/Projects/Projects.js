// Projects

import React from 'react/addons';
import { Link } from 'react-router';
import { Grid, Row } from 'react-bootstrap'; // import { Grid, Row, Col } from 'react-bootstrap';
import styles from './Projects.less';
import withStyles from '../../decorators/withStyles';
import { staticPath } from '../../utilities/static/StaticPath';

@withStyles(styles)
export default class Projects {
  render() {
    const IMAGE_PATH_PREFIX = 'src/components/Projects/images/';

    const projects = [
      {
        title: 'Viima Mobile User Interface',
        url: '/projects/viima-mobile-user-interface',
        imageUrl: '/projects/viima-mobile-user-interface'
      },
      {
        title: 'Aalto MyCourses Usability Evaluation',
        url: '/projects/aalto-mycourses-usability-evaluation',
        imageUrl: '/projects/aalto-mycourses-usability-evaluation'
      },
      {
        title: 'Internet of Things Solutions for Länsimetro',
        url: '/projects/internet-of-things-solutions-for-lansimetro',
        imageUrl: '/projects/internet-of-things-solutions-for-lansimetro'
      },
      {
        title: 'HelsinkiGraph',
        url: '/projects/helsinkigraph',
        imageUrl: '/projects/helsinkigraph'
      },
      {
        title: 'B. Sc. Thesis',
        url: '/projects/b-sc-thesis',
        imageUrl: staticPath(IMAGE_PATH_PREFIX + 'B-Sc-Thesis.jpg')
      },
      {
        title: 'Personal Finance',
        url: '/projects/personal-finance',
        imageUrl: '/projects/personal-finance'
      },
      {
        title: 'London Travel Guide',
        url: '/projects/london-travel-guide',
        imageUrl: '/projects/london-travel-guide'
      }
    ];

    return (
      <Grid className='Projects' componentClass='article'>
        <h2>Projects</h2>
        <Row>
          <ul>
          {projects.map((project) => {
            return (
              <li key={project.title}>
                <Link to={project.url}>
                  {project.title}
                {/*
                  <Col sm={6}>
                    <div className='ProjectInformation'>
                      <div className='ProjectCoverImage'>
                        <img alt={project.title} src={project.imageUrl}/>
                      </div>
                      <h3>{project.title}</h3>
                    </div>
                  </Col>
                */}
                </Link>
              </li>
            );
          })}
          </ul>
        </Row>
      </Grid>
    );
  }
}
