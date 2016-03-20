// BlogMaster

import React from 'react/addons';
import { Grid, Row, Col } from 'react-bootstrap';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import styles from './BlogMaster.less';
import Cover from '../../../components/Cover';
import withStyles from '../../../decorators/withStyles';
import { APIURL } from '../../../api/APIUtilities';
import { isIE9OrOlder } from '../../../utilities/FeatureDetection/FeatureDetection';
const marked = require('marked');
const request = require('superagent');
const legacyIESupport = require('superagent-legacyiesupport');

@withStyles(styles)
export default class BlogMaster extends React.Component {
  static propTypes = {
    isCompact: React.PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {
      blogPosts: [],
      error: null
    };
    this.renderLoadingState = this.renderLoadingState.bind(this);
    this.renderErrorState = this.renderErrorState.bind(this);
    this.renderReadyState = this.renderReadyState.bind(this);
    this.renderViewAllLink = this.renderViewAllLink.bind(this);
    this.renderTitle = this.renderTitle.bind(this);
  }

  componentDidMount() {
    const legacyIE = isIE9OrOlder() ? legacyIESupport : (() => {});

    const url = this.props.isCompact === true ?
                'blog-post/?latest-posts=2' :
                'blog-post/';

    request
    .get(APIURL(url))
    .use(legacyIE)
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
    const item = {
      punch_line: '',
      title: 'Loading…',
      intro: ''
    };
    return <Cover item={item} type={'loading'} size={'Medium'}/>;
  }

  renderErrorState() {
    const item = {
      punch_line: 'Error',
      title: 'Could Not Load Data From Server',
      intro: ''
    };
    return <Cover item={item} type={'loading'} size={'Medium'}/>;
  }

  renderReadyState() {
    return (
      this.state.blogPosts.map((blogPost) => {
        const title = {__html: marked('## ' + blogPost.title)};
        const intro = {__html: marked(blogPost.intro)};
        const categoryTitle = blogPost.categories.length > 1 ? 'Categories' : 'Category';

        return (
          <Link to={blogPost.url} key={blogPost.url}>
            <Cover item={blogPost} type={'blog'} size={'Medium'}/>
          </Link>
        );
      })
    );
  }

  renderViewAllLink() {
    if (this.props.isCompact !== true) {
      return null;
    }

    return (
      <div className='ViewAllContainer'>
        <Grid>
          <Row>
            <Col sm={12}>
              <Link to='/blog' className='ViewAll'>
                <span className='hidden-xs'>View </span>More Blog Posts&nbsp;
                <span className='ion-chevron-right hidden-xs hidden-sm'/>
              </Link>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

  renderTitle() {
    const position = !!this.props.isCompact ? 'NotTopOfThePage' : '';
    const item = {
      punch_line: 'Thoughts on design, tech, and life',
      title: this.props.isCompact !== true ? 'Blog' : 'Latest Blog Posts',
      intro: '',
      cover_background_color: '#3d3d3d'
    };
    return (
      <Cover item={item} type={'compact'} position={position}/>
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

    return this.props.isCompact === true ?
    (
      <div className='Blog BlogMaster Compact'>
        {this.renderTitle()}
        {renderState()}
        {this.renderViewAllLink()}
      </div>
    ) :
    (
      <DocumentTitle title='Blog — Toni Karttunen'>
        <div className='Blog BlogMaster' componentClass='article'>
          {this.renderTitle()}
          {renderState()}
          {this.renderViewAllLink()}
        </div>
      </DocumentTitle>
    );
  }
}
