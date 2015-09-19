// BlogMaster

import React from 'react/addons';
import { Grid, Row, Col } from 'react-bootstrap';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import styles from './BlogMaster.less';
import withStyles from '../../../decorators/withStyles';
import { blogURL } from '../BlogUtilities';
const marked = require('marked');
const request = require('superagent');

@withStyles(styles)
export default class BlogMaster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPosts: [],
      error: null
    };
    this.renderLoadingState = this.renderLoadingState.bind(this);
    this.renderErrorState = this.renderErrorState.bind(this);
    this.renderReadyState = this.renderReadyState.bind(this);
  }

  componentDidMount() {
    request
    .get(blogURL('blog-post/'))
    .end((err, res) => {
      if (!err && res.status === 200) {
        this.setState({blogPosts: JSON.parse(res.text)}); // eslint-disable-line react/no-set-state
      } else {
        const error = res && res.error ? res.error : err;
        this.setState({error: error}); // eslint-disable-line react/no-set-state
      }
    });
  }

  renderLoadingState() {
    return (
      <p className='lead'>Loading</p>
    );
  }

  renderErrorState() {
    return (
      <p className='lead'>An error occurred while fetching the blog posts.</p>
    );
  }

  renderReadyState() {
    return (
      this.state.blogPosts.map((blogPost) => {
        const title = {__html: marked('## ' + blogPost.title)};
        const intro = {__html: marked(blogPost.intro)};

        return (
          <Row key={blogPost.url}>
            {
              (() => {
                if (blogPost.cover_image_url) {
                  return (
                    <Col md={12}>
                      <Link to={blogPost.url}>
                        <img alt='' src={blogPost.cover_image_url} className='CoverImage'/>
                      </Link>
                    </Col>
                  );
                } else {
                  return '';
                }
              })()
            }
            <Col md={4}>
              <div className='Date'>
                <span className='Day'>{blogPost.date.last_saved_date.day}</span>
                <span className='Month'>{blogPost.date.last_saved_date.month_name_abbreviation}</span>
                <span className='Year'>{blogPost.date.last_saved_date.year}</span>
              </div>
              <div className='InfoBox'>
              <h3>Categories</h3>
              <p>
                {
                  blogPost.categories.map(category => {
                    return <span key={category.url}>{category.title}</span>;
                  })
                }
              </p>
            </div>
            </Col>
            <Col md={8}>
              <Link to={blogPost.url}><span dangerouslySetInnerHTML={title}/></Link>
              <span className='lead' dangerouslySetInnerHTML={intro}/>
              <p><Link to={blogPost.url} className='MoreInformation'>Read More</Link></p>
            </Col>
          </Row>
        );
      })
    );
  }

  render() {
    let renderState;

    if (this.state.error !== null) {
      renderState = this.renderErrorState;
    } else if (this.state.blogPosts.length > 0) {
      renderState = this.renderReadyState;
    } else {
      renderState = this.renderLoadingState;
    }

    return (
      <DocumentTitle title='Blog — Toni Karttunen'>
      <Grid className='Blog BlogMaster' componentClass='article'>
        <h1>Blog</h1>
        {renderState()}
      </Grid>
      </DocumentTitle>
    );
  }
}
