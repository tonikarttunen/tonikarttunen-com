// BlogMaster

import React from 'react/addons';
import { Grid, Row, Col } from 'react-bootstrap';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import styles from './BlogMaster.less';
import withStyles from '../../../decorators/withStyles';
const marked = require('marked');

@withStyles(styles)
export default class BlogMaster extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    const blogPosts = [
      {
        title: 'Post *1*',
        date: '2015-10-01 15:00',
        intro: 'Lorem __*ipsum*__ dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        url: '/2015/10/01/recording-mobile-devices-in-usability-tests'
      },
      {
        title: 'Post 2',
        date: '2015-10-01 12:00',
        intro: 'Lorem ipsum dolor __sit__ amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        url: '/2015/10/01/second-post'
      },
      {
        title: 'Post 3',
        date: '2015-10-01 09:00',
        intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        url: '/2015/10/01/third-post'
      }
    ];

    return (
      <DocumentTitle title='Blog — Toni Karttunen'>
      <Grid className='Blog BlogMaster' componentClass='article'>
        <h1>Blog</h1>
        {blogPosts.map((blogPost) => {
          const title = {__html: marked('## ' + blogPost.title)};
          const intro = {__html: marked(blogPost.intro)};

          return (
            <Row key={blogPost.url}>
              <Col md={4}>
                <p className='lead'>Photo</p>
                <p>Photo</p>
                <p className='lead'>Published</p>
                <p>{blogPost.date}</p>
              </Col>
              <Col md={8}>
                <Link to={blogPost.url}><span dangerouslySetInnerHTML={title}/></Link>
                <span className='lead' dangerouslySetInnerHTML={intro}/>
                <p><Link to={blogPost.url} className='MoreInformation'>Read More</Link></p>
              </Col>
            </Row>
          );
        })}
      </Grid>
      </DocumentTitle>
    );
  }
}
