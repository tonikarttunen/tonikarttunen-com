// Home

import React from 'react/addons';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import ProjectMaster from '../../components/Projects/ProjectMaster';
import BlogMaster from '../../components/Blog/BlogMaster';
import styles from './Home.less';
import withStyles from '../../decorators/withStyles';
import $ from 'jquery';

@withStyles(styles)
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.scrollThrottler = null;
  }

  // Attach a handler for scroll events
  componentDidMount() {
    let didScroll = false;

    if (typeof window.onscroll !== 'undefined') {
      $(window).on('scroll', () => {
        didScroll = true;
      });

      this.scrollThrottler = setInterval(() => {
        if (didScroll) {
          didScroll = false;

          // TODO: Add some scroll effects

        }
      }, 300);
    }
  }

  // Remove scroll event handler
  componentWillUnmount() {
    if (typeof window.onscroll !== 'undefined') {
      $(window).off('scroll');
      window.clearInterval(this.scrollThrottler);
    }
  }

  render() {
    const services = [
      {
        title: 'User Experience Design',
        url: '/user-experience-design',
        intro: 'Usability evaluation, user interface design, prototyping and ideation'
      },
      {
        title: 'Software Development',
        url: '/software-development',
        intro: 'Web app development and mobile app development'
      }
    ];

    return (
      <article className='Home'>
        <div className='Services'>
          <Grid>
            <h1>Services</h1>
            <Row>
              {services.map((service) => {
                return (
                  <Col md={6} key={service.url}>
                    <Link to={service.url}><h2>{service.title}</h2></Link>
                    <p className='lead'>{service.intro}</p>
                    <p><Link to={service.url} className='MoreInformation'>Read More</Link></p>
                  </Col>
                );
              })}
            </Row>
          </Grid>
        </div>
        <div className='ProjectMasterContainer Compact'>
          <ProjectMaster isCompact/>
        </div>
        <BlogMaster isCompact/>
      </article>
    );
  }
}
