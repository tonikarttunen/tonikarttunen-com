// Menu

import React from 'react/addons';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import styles from './Menu.less';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import $ from 'jquery';

@withViewport
@withStyles(styles)
export default class Menu {
  render() {
    const categories = [
      {
        title: 'Home',
        url: '/'
      },
      {
        title: 'User Experience Design',
        url: '/user-experience-design'
      },
      {
        title: 'Software Development',
        url: '/software-development'
      },
      {
        title: 'Projects',
        url: '/projects'
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

    let { width, height } = this.props.viewport;
    let style = width > 991 ? {display: 'none !important'} : ''; 

    return (
      <div id='MenuContainer'>
        <Grid className='Menu'>
          { (() => { if (width > 991) { 
            $('#MenuContainer').hide();
            $('body').css({overflow: 'auto'});
          } })() }
          {categories.map(item => {
            return (
              <Row key={item.title}>
                <Col md={12}>
                  <h2>
                    <Link
                      to={item.url}
                      onClick={
                        () => {
                          // Temporary solution; should be replaced with Flux
                          $('#MenuContainer').hide();
                          $('body').css({overflow: 'auto'});
                        }
                      }>
                      {item.title}
                    </Link>
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
                      <Link
                        to={project.url}
                        onClick={
                          () => {
                            // Temporary solution; should be replaced with Flux
                            $('#MenuContainer').hide();
                            $('body').css({overflow: 'auto'});
                          }
                        }>
                        {project.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
