// Projects

import React from 'react/addons';
import { Link } from 'react-router';
import { Grid } from 'react-bootstrap';
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
        imageUrl: 'http://localhost:8888/src/components/Projects/images/Projects_Aalto%20MyCourses%203.jpg'
      },
      {
        title: 'Aalto MyCourses Usability Evaluation',
        url: '/projects/aalto-mycourses-usability-evaluation',
        imageUrl: staticPath(IMAGE_PATH_PREFIX + 'Aalto-MyCourses.jpg')
      },
      {
        title: 'Internet of Things Solutions for Länsimetro',
        url: '/projects/internet-of-things-solutions-for-lansimetro',
        imageUrl: 'http://localhost:8888/src/components/Projects/images/Projects_Aalto%20MyCourses%203.jpg'
      },
      {
        title: 'HelsinkiGraph',
        url: '/projects/helsinkigraph',
        imageUrl: 'http://localhost:8888/src/components/Projects/images/Projects_Aalto%20MyCourses%203.jpg'
      },
      {
        title: 'B. Sc. Thesis',
        url: '/projects/b-sc-thesis',
        imageUrl: staticPath(IMAGE_PATH_PREFIX + 'B-Sc-Thesis.jpg')
      },
      {
        title: 'Personal Finance',
        url: '/projects/personal-finance',
        imageUrl: staticPath(IMAGE_PATH_PREFIX + 'Personal-Finance.jpg')
      },
      {
        title: 'London Travel Guide',
        url: '/projects/london-travel-guide',
        imageUrl: staticPath(IMAGE_PATH_PREFIX + 'London-Travel-Guide.jpg')
      }
    ];

    return (
      <Grid className='Projects' componentClass='article'>
        <h2>Projects</h2>
        {projects.map((project) => {
          const projectStyle = {
            backgroundImage: 'url(' + project.imageUrl + ')',
            filter: 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + project.imageUrl + '" , sizingMethod="scale")',
            msFilter: '\"progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + project.imageUrl + '" , sizingMethod="scale")\"'
          };

          return (
            <Link to={project.url} key={project.title} title={project.title}>
              <div className='WideScreenMediaContainer ProjectCoverImageContainer'>
                <div style={projectStyle} className='WideScreenMedia'/>
              </div>
            </Link>
          );
        })}
      </Grid>
    );
  }
}
