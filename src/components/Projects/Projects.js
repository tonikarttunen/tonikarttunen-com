// Projects

import React from 'react/addons';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import styles from './Projects.less';
import withStyles from '../../decorators/withStyles';
import { staticPath } from '../../utilities/static/StaticPath';
import { supportsCSSTransforms } from '../../utilities/FeatureDetection/FeatureDetection';
import DetailViewCover from '../../components/DetailViewCover';

@withStyles(styles)
export default class Projects {
  render() {
    const IMAGE_PATH_PREFIX = 'src/components/Projects/images/';

    const projects = [
      {
        title: 'Viima Mobile User Interface',
        url: '/projects/viima-mobile-user-interface',
        imageUrl: staticPath(IMAGE_PATH_PREFIX + 'Viima.jpg')
      },
      {
        title: 'Aalto MyCourses Usability Evaluation',
        url: '/projects/aalto-mycourses-usability-evaluation',
        imageUrl: staticPath(IMAGE_PATH_PREFIX + 'Aalto-MyCourses.jpg')
      },
      {
        title: 'Internet of Things Solutions for Länsimetro',
        url: '/projects/internet-of-things-solutions-for-lansimetro',
        imageUrl: staticPath(IMAGE_PATH_PREFIX + 'IoT-Solutions.jpg')
      },
      {
        title: 'HelsinkiGraph',
        url: '/projects/helsinkigraph',
        imageUrl: staticPath(IMAGE_PATH_PREFIX + 'HelsinkiGraph.jpg')
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

    let coverContents;

    if (supportsCSSTransforms()) {
      coverContents = (
        <div className='ProjectCoverImageContainer'>
          <img
            id='ProjectCoverImage1'
            className='ProjectCoverImage'
            alt=''
            src={staticPath(IMAGE_PATH_PREFIX + 'ProjectCoverImage1.jpg')}/>
          <img
            id='ProjectCoverImage2'
            className='ProjectCoverImage'
            alt=''
            src={staticPath(IMAGE_PATH_PREFIX + 'ProjectCoverImage2.jpg')}/>
          <img
            id='ProjectCoverImage3'
            className='ProjectCoverImage'
            alt=''
            src={staticPath(IMAGE_PATH_PREFIX + 'ProjectCoverImage3.jpg')}/>
          <img
            id='ProjectCoverImage4'
            className='ProjectCoverImage'
            alt=''
            src={staticPath(IMAGE_PATH_PREFIX + 'ProjectCoverImage4.jpg')}/>
        </div>
      );
    } else {
      coverContents = (
        <div className='ProjectCoverImageContainer'>
          <img
            alt=''
            className='ProjectCoverFallbackImage'
            src={staticPath(IMAGE_PATH_PREFIX + 'ProjectsFallbackImage.jpg')}/>
        </div>
      );
    }

    return (
      <div>
        <DetailViewCover title='Projects'>
          {coverContents}
        </DetailViewCover>
        <article className='Projects' id='section2'>
          <Grid>
            <Row>
             <Col md={12}>
                {projects.map((project) => {
                  const projectStyle = {
                    backgroundImage: 'url(' + project.imageUrl + ')',
                    filter: 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + project.imageUrl + '" , sizingMethod="scale")',
                    msFilter: '\"progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + project.imageUrl + '" , sizingMethod="scale")\"'
                  };

                  return (
                    <Link to={project.url} key={project.title} title={project.title}>
                      <div className='WideScreenMediaContainer ProjectImageContainer'>
                        <div style={projectStyle} className='WideScreenMedia'/>
                      </div>
                    </Link>
                  );
                })}
              </Col>
            </Row>
          </Grid>
        </article>
      </div>
    );
  }
}
