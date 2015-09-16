// BlogDetail

import React from 'react/addons';
import { Grid, Row, Col } from 'react-bootstrap';
import DocumentTitle from 'react-document-title';
import NotFound from '../../../components/NotFound';
import styles from './BlogDetail.less';
import withStyles from '../../../decorators/withStyles';
import { blogURL } from '../BlogUtilities';
const marked = require('marked');
const request = require('superagent');

@withStyles(styles)
export default class BlogDetail extends React.Component {
  static propTypes = {
    params: React.PropTypes.shape({
      year: React.PropTypes.string.isRequired,
      month: React.PropTypes.string.isRequired,
      day: React.PropTypes.string.isRequired,
      slug: React.PropTypes.string.isRequired
    }).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      blogPost: null,
      error: null
    };
    this.renderLoadingState = this.renderLoadingState.bind(this);
    this.renderErrorState = this.renderErrorState.bind(this);
    this.renderReadyState = this.renderReadyState.bind(this);
  }

  componentDidMount() {
    request
    .get(blogURL('blog-posts/' +
                 this.props.params.year + '/' +
                 this.props.params.month + '/' +
                 this.props.params.day + '/' +
                 this.props.params.slug + '/'))
    .end((err, res) => {
      if (!err && res.status === 200) {
        this.setState({blogPost: JSON.parse(res.text)}); // eslint-disable-line react/no-set-state
      } else {
        const error = res && res.error ? res.error : err;
        this.setState({error: error}); // eslint-disable-line react/no-set-state
      }
    });
  }

  renderLoadingState() {
    return (
      <Row>
        <Col md={12}>
          <h1>Blog</h1>
          <p className='lead'>Loading</p>
        </Col>
      </Row>
    );
  }

  renderErrorState() {
    switch (this.state.error.status) {
    case 404:
      return (<Row><NotFound/></Row>);
    default:
      return (
        <Row>
          <Col md={12}>
            <h1>Blog</h1>
            <p className='lead'>An error occurred while fetching the blog post.</p>
          </Col>
        </Row>
      );
    }
  }

  renderReadyState() {
    const title = {__html: marked('# ' + this.state.blogPost.title)};
    const intro = {__html: marked(this.state.blogPost.intro)};
    const body = {__html: marked(this.state.blogPost.body)};

    return (
      <span>
        <span dangerouslySetInnerHTML={title}/>
        <Row>
          {
            (() => {
              if (this.state.blogPost.cover_image_url) {
                return (
                  <Col md={12}>
                    <img alt='' src={this.state.blogPost.cover_image_url} className='CoverImage'/>
                  </Col>
                );
              } else {
                return '';
              }
            })()
          }
          <Col md={4}>
            <div className='Date'>
              <span className='Day'>{this.state.blogPost.date.day}</span>
              <span className='Month'>{this.state.blogPost.date.month_short_form}</span>
              <span className='Year'>{this.state.blogPost.date.year}</span>
            </div>
          </Col>
          <Col md={8}>
            <span className='lead' dangerouslySetInnerHTML={intro}/>
            <span dangerouslySetInnerHTML={body}/>
          </Col>
        </Row>
      </span>
    );
  }

  render() {
    let renderState;
    let documentTitle = '';

    if (this.state.error !== null) {
      renderState = this.renderErrorState;
    } else if (this.state.blogPost !== null) {
      renderState = this.renderReadyState;
      documentTitle = this.state.blogPost.title.replace(/\_|\*/g, '') + ' — Blog — Toni Karttunen';
    } else {
      renderState = this.renderLoadingState;
    }

    return (
      <DocumentTitle title={documentTitle}>
        <Grid className='Blog BlogDetail' componentClass='article'>
          {renderState()}
        </Grid>
      </DocumentTitle>
    );
  }
}
