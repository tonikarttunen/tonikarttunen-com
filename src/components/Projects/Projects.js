// Projects

import React from 'react/addons';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import styles from './Projects.less';
import withStyles from '../../decorators/withStyles';
import { staticPath } from '../../utilities/static/StaticPath';
import DetailViewCover from '../../components/DetailViewCover';
import DiagonalDivider from '../../components/DiagonalDivider';

@withStyles(styles)
export default class Projects {
  render() {
    const IMAGE_PATH_PREFIX = 'src/components/Projects/images/';

    const projects = [
      {
        title: 'Viima Mobile User Interface',
        projectClassName: 'Viima',
        description: 'Mobile user interface for a feedback system',
        url: '/projects/viima-mobile-user-interface',
        imageUrl: staticPath(IMAGE_PATH_PREFIX + 'ProjectCoverImage1.jpg')
      },
      {
        title: 'Aalto MyCourses Usability Evaluation',
        projectClassName: 'AaltoMyCoursesUsabilityEvaluation',
        description: 'Interaction design and evaluation project',
        url: '/projects/aalto-mycourses-usability-evaluation',
        imageUrl: staticPath(IMAGE_PATH_PREFIX + 'Aalto-MyCourses.jpg')
      },
      {
        title: 'Internet of Things Solutions for Länsimetro',
        projectClassName: 'InternetOfThingsSolutionsForLansimetro',
        description: 'User-centred design project',
        url: '/projects/internet-of-things-solutions-for-lansimetro',
        imageUrl: staticPath(IMAGE_PATH_PREFIX + 'IoT-Solutions.jpg')
      },
      {
        title: 'HelsinkiGraph',
        projectClassName: 'HelsinkiGraph',
        description: 'Mobile app prototype',
        url: '/projects/helsinkigraph',
        imageUrl: staticPath(IMAGE_PATH_PREFIX + 'ProjectCoverImage2.jpg')
      },
      {
        title: 'B. Sc. Thesis',
        projectClassName: 'BScThesis',
        description: 'Location-aware smartphone apps',
        url: '/projects/b-sc-thesis',
        imageUrl: staticPath('src/components/LocationAwareApp/images/Trending.jpg')
      },
      {
        title: 'Personal Finance',
        projectClassName: 'PersonalFinance',
        description: 'Personal financial management app prototype',
        url: '/projects/personal-finance',
        imageUrl: staticPath(IMAGE_PATH_PREFIX + 'ProjectCoverImage4.jpg')
      },
      {
        title: 'London Travel Guide',
        projectClassName: 'LondonTravelGuide',
        description: 'My first iOS app',
        url: '/projects/london-travel-guide',
        imageUrl: staticPath(IMAGE_PATH_PREFIX + 'ProjectCoverImage3.jpg')
      }
    ];

    return (
      <div>
        <DetailViewCover title='Projects' coverClassName={'ProjectsDetailViewCover'}/>
        <article className='Projects' id='section2'>
          {projects.map((project) => {
            return (
              <div key={project.title} className={project.projectClassName}>
                <Grid>
                  <Row>
                    <Col lg={8} md={8} sm={6}>
                      <Link to={project.url} title={project.title}>
                       <h3 className='ProjectTitle'>{project.title}</h3>
                      </Link>
                      <p className='ProjectDescription'>{project.description}</p>
                      {
                        (() => {
                          switch (project.title) {
                            case 'Viima Mobile User Interface':
                              return (
                                <div className='InfoBox'>
                                  <div className='InlineBlock WidthAuto VerticalAlignTop'>
                                    <h3>Autumn</h3>
                                    <p>2014</p>
                                  </div>
                                  <DiagonalDivider
                                    id={'DiagonalDividerViima'}
                                    className='InlineBlock WidthAuto VerticalAlignTop'
                                    color={'#d7d7d7'}/>
                                  <div className='InlineBlock WidthAuto VerticalAlignTop'>
                                    <h3>Spring</h3>
                                    <p>2015</p>
                                  </div>
                                  <h3>Client</h3>
                                  <p>Viima Solutions Oy</p>
                                  <h3>Awards</h3>
                                  <p>Accenture Quality Award Finalist</p>
                                  <h3>Technology</h3>
                                  <p>Backbone.JS</p>
                                </div>
                              );

                            case 'Aalto MyCourses Usability Evaluation':
                              return (
                                <div className="InfoBox">
                                  <h3>Spring</h3>
                                  <p>2015</p>
                                  <h3>Client</h3>
                                  <p>Aalto University Learning Services, ICT for Learning Team</p>
                                </div>
                              );

                            case 'Internet of Things Solutions for Länsimetro':
                              return (
                                <div className="InfoBox">
                                  <h3>Spring</h3>
                                  <p>2015</p>
                                  <h3>Client</h3>
                                  <p>Länsimetro</p>
                                </div>
                              );

                            case 'HelsinkiGraph':
                              return (
                                <div className="InfoBox">
                                  <h3>Autumn</h3>
                                  <p>2013</p>
                                  <h3>Technology</h3>
                                  <p>Objective-C</p>
                                </div>
                              );

                            case 'B. Sc. Thesis':
                              return (
                                <div className='InfoBox'>
                                  <h3>Spring</h3>
                                  <p>2013</p>
                                  <h3>B. Sc. Thesis</h3>
                                  <p>
                                    <a href='http://www.tonikarttunen.com/about/bachelorsthesis/Bachelors_Thesis_Toni_Karttunen_Aalto_University_2013.pdf'>
                                      PDF
                                    </a>
                                    &nbsp;(42 pages, in Finnish)
                                  </p>
                                  <h3>Presentation slides</h3>
                                  <p>
                                    <a href='http://www.tonikarttunen.com/about/bachelorsthesis/Bachelors_Thesis_Presentation_Toni_Karttunen_Aalto_University_2013.pdf'>
                                      PDF
                                    </a>
                                    &nbsp;(15 pages, in Finnish)
                                  </p>
                                  <h3>Thesis Record</h3>
                                  <p>
                                    <a href='http://urn.fi/URN:NBN:fi:aalto-201307257437'>
                                      Aalto University Library
                                    </a>
                                  </p>
                                  <h3>Technology</h3>
                                  <p>Objective-C</p>
                                  <h3>App Source Code</h3>
                                  <p>
                                    <a href='https://github.com/tonikarttunen/LocationAwareAppProject'>
                                      GitHub
                                    </a>
                                  </p>
                                  <h3>Test Data</h3>
                                  <p>
                                    <a href='https://github.com/tonikarttunen/Paikkatietosovelluksen_testidata'>
                                      GitHub
                                    </a>
                                  </p>
                                </div>
                              );

                            case 'Personal Finance':
                              return (
                                <div className="InfoBox">
                                  <div className='InlineBlock WidthAuto VerticalAlignTop'>
                                    <h3>Autumn</h3>
                                    <p>2012</p>
                                  </div>
                                  <DiagonalDivider
                                    id={'DiagonalDividerPersonalFinance'}
                                    className='InlineBlock WidthAuto VerticalAlignTop'
                                    color={'#6CCFAC'}/>
                                  <div className='InlineBlock WidthAuto VerticalAlignTop'>
                                    <h3>Spring</h3>
                                    <p>2013</p>
                                  </div>
                                  <h3>Technology</h3>
                                  <p>Objective-C</p>
                                </div>
                              );

                            case 'London Travel Guide':
                              return (
                                <div className="InfoBox">
                                  <h3>Summer</h3>
                                  <p>2012</p>
                                  <h3>Technologies</h3>
                                  <p>Objective-C, HTML, CSS, JavaScript</p>
                                </div>
                              );

                            default:
                              break;
                          }
                        })()
                      }
                      <p>
                        <Link
                          to={project.url}
                          title={project.title}
                          className='MoreInformation'>
                          More Information
                        </Link>
                      </p>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                      <Link to={project.url} title={project.title}>
                        <img
                          alt={project.title}
                          src={project.imageUrl}
                        />
                      </Link>
                    </Col>
                  </Row>
                </Grid>
              </div>
            );
          })}
        </article>
      </div>
    );
  }
}
