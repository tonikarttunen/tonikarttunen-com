// BlogDetail

import React from 'react/addons';
import { Grid, Row, Col } from 'react-bootstrap';
import DocumentTitle from 'react-document-title';
import NotFound from '../../../components/NotFound';
import Cover from '../../../components/Cover';
import styles from './BlogDetail.less';
import withStyles from '../../../decorators/withStyles';
import { APIURL } from '../../../api/APIUtilities';
import { isIE9OrOlder } from '../../../utilities/FeatureDetection/FeatureDetection';
const marked = require('marked');
const request = require('superagent');
const legacyIESupport = require('superagent-legacyiesupport');

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
    const legacyIE = isIE9OrOlder() ? legacyIESupport : (() => {});

    request
    .get(APIURL('blog-post/' +
                 ('0000' + this.props.params.year).slice(-4) + '/' +
                 ('00' + this.props.params.month).slice(-2) + '/' +
                 ('00' + this.props.params.day).slice(-2) + '/' +
                 this.props.params.slug + '/'))
    .use(legacyIE)
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
    const item = {
      title: 'Blog',
      intro: 'Loading…',
      cover_background_color: '#e6e6e6',
    };
    return (
      <Cover item={item} type={'loading'}/>
    );
  }

  renderErrorState() {
    const item = {
      punch_line: 'Error',
      title: 'Could Not Load Data from Web Server',
      intro: 'An error occurred while fetching the blog post.',
      cover_background_color: 'rgb(51, 148, 184)',
    };

    switch (this.state.error.status) {
    case 404:
      return (<Row><NotFound/></Row>);
    default:
      return (
        <Cover item={item} type={'error'}/>
      );
    }
  }

  renderReadyState() {
    const body = {__html: marked(this.state.blogPost.body)};
    const footer = {__html: marked(this.state.blogPost.footer)};
    const categoryTitle = this.state.blogPost.categories.length > 1 ? 'Categories' : 'Category';
    const upperFullWidthSection =
    this.state.blogPost.upper_full_width_section != null ?
    {__html: marked(this.state.blogPost.upper_full_width_section)} :
    '';
    const lowerFullWidthSection =
    this.state.blogPost.lower_full_width_section !== null ?
    {__html: marked(this.state.blogPost.lower_full_width_section)} :
    '';

    return (
      <span>
        <Cover item={this.state.blogPost} type={'blog'}/>
        <div className='AfterCoverSection'>
          <Grid>
            <Row>
              {
                (() => {
                  if (this.state.blogPost.cover_image_url) {
                    return (
                      <Col md={12} className='CoverImageContainer'>
                        <img alt='' src={this.state.blogPost.cover_image_url} className='CoverImage'/>
                      </Col>
                    );
                  } else {
                    return '';
                  }
                })()
              }
              {
                (() => {
                  if (this.state.blogPost.upper_full_width_section !== null && this.state.blogPost.upper_full_width_section.length > 0) {
                    return (
                      <Col md={12} className='UpperFullWidthSection'>
                        <span dangerouslySetInnerHTML={upperFullWidthSection}/>
                      </Col>
                    );
                  }
                })()
              }
              <Col md={4}>
                <div className='InfoBox'>
                  <h3>
                    {categoryTitle}
                  </h3>
                  <p>
                    {
                      this.state.blogPost.categories.map(category => {
                        return <span key={category.url}>{category.title}</span>;
                      })
                    }
                  </p>
                  {
                    () => {
                      if (this.state.blogPost.website !== null && this.state.blogPost.website.length > 0) {
                        return (
                          <span>
                            <h3>Website</h3>
                            <p><a href={this.state.blogPost.website}>{this.state.blogPost.website}</a></p>
                          </span>
                        );
                      }
                    }()
                  }
                </div>
              </Col>
              <Col md={8}>
                <span dangerouslySetInnerHTML={body}/>
                <span className='Footer' dangerouslySetInnerHTML={footer}/>
              </Col>
              {
                (() => {
                  if (this.state.blogPost.lower_full_width_section !== null && this.state.blogPost.lower_full_width_section.length > 0) {
                    return (
                      <Col md={12} className='LowerFullWidthSection'>
                        <span dangerouslySetInnerHTML={lowerFullWidthSection}/>
                      </Col>
                    );
                  }
                })()
              }
            </Row>
          </Grid>
        </div>
      </span>
    );
  }

  render() {
    let renderState;
    let documentTitle = 'Toni Karttunen';

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
        <div className='Blog BlogDetail' componentClass='article'>
          {renderState()}
        </div>
      </DocumentTitle>
    );
  }
}
