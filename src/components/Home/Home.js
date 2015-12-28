// Home

import React from 'react/addons';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
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
    const categories = [
      {
        title: 'User Experience Design',
        url: '/user-experience-design'
      },
      {
        title: 'Software Development',
        url: '/software-development'
      }
    ];

    return (
      <article className='Home'>
        <div className='Services'>
          <Grid>
            <h1>Services</h1>
            <Row>
              {categories.map((category) => {
                return (
                  <Col sm={6} key={category.url}>
                    <Link to={category.url}>
                      <h2>{category.title}</h2>
                    </Link>
                  </Col>
                );
              })}
            </Row>
          </Grid>
        </div>
        <div className='FeaturedProjects'>
          <Grid>
            <h1>Featured Projects</h1>
            <Row>
              {categories.map((category) => {
                return (
                  <Col sm={4} key={category.url}>
                    <Link to={category.url}>
                      <h2>{category.title}</h2>
                    </Link>
                  </Col>
                );
              })}
            </Row>
          </Grid>
        </div>
        <BlogMaster isCompact/>
      </article>
    );
  }
}
