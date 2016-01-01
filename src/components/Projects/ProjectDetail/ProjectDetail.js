// ProjectDetail

import React from 'react/addons';
import { Grid, Row, Col } from 'react-bootstrap';
import DocumentTitle from 'react-document-title';
import NotFound from '../../../components/NotFound';
import { Link } from 'react-router';
import styles from './ProjectDetail.less';
import withStyles from '../../../decorators/withStyles';
import { APIURL } from '../../../api/APIUtilities';
import { isIE9OrOlder } from '../../../utilities/FeatureDetection/FeatureDetection';
const marked = require('marked');
const request = require('superagent');
const legacyIESupport = require('superagent-legacyiesupport');

@withStyles(styles)
export default class ProjectDetail extends React.Component {
  static propTypes = {
    params: React.PropTypes.shape({
      slug: React.PropTypes.string.isRequired
    }).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      project: null,
      error: null
    };
    this.renderLoadingState = this.renderLoadingState.bind(this);
    this.renderErrorState = this.renderErrorState.bind(this);
    this.renderReadyState = this.renderReadyState.bind(this);
    this.renderInfoBox = this.renderInfoBox.bind(this);
  }

  componentDidMount() {
    const legacyIE = isIE9OrOlder() ? legacyIESupport : (() => {});

    const url = 'project/' + this.props.params.slug + '/';

    request
    .get(APIURL(url))
    .use(legacyIE)
    .end((err, res) => {
      if (!err && res.status === 200) {
        this.setState({project: JSON.parse(res.text)}); // eslint-disable-line react/no-set-state
      } else {
        const error = res && res.error ? res.error : err;
        this.setState({error: error}); // eslint-disable-line react/no-set-state
      }
    });
  }

  renderLoadingState() {
    return (
      <span>
        <h1>Projects</h1>
        <p className='lead'>Loading</p>
      </span>
    );
  }

  renderErrorState() {
    switch (this.state.error.status) {
    case 404:
      return (<Row><NotFound/></Row>);
    default:
      return (
        <span>
          <h1>Projects</h1>
          <p className='lead'>An error occurred while fetching the project.</p>
        </span>
      );
    }
  }

  renderInfoBox(project) {
    const categoryTitle = project.categories && project.categories.length > 1 ? 'Categories' : 'Category';

    return (
      <span>
        {
          () => {
            if (project.awards_and_honours.length > 0) {
              return (
                <span>
                  <h3>Awards & Honours</h3>
                  <span dangerouslySetInnerHTML={{__html: marked(project.awards_and_honours)}}/>
                </span>
              );
            }
          }()
        }
        {
          () => {
            if (project.categories.length > 0) {
              return (
                <span>
                  <h3>{categoryTitle}</h3>
                  <p>
                    {project.categories.map((category, index) => {
                      return (
                        <span key={category.url}>
                          {category.title}
                          {() => {if (index < project.categories.length - 1) { return ', ' }}()}
                        </span>
                      );
                    })}
                  </p>
                </span>
              );
            }
          }()
        }
        {
          () => {
            if (project.my_role.length > 0) {
              return (
                <span>
                  <h3>My Role</h3>
                  <p>
                    {project.my_role.map((myRole, index) => {
                      return (
                        <span key={myRole.url}>
                          {myRole.title}
                          {() => {if (index < project.my_role.length - 1) { return ', ' }}()}
                        </span>
                      );
                    })}
                  </p>
                </span>
              );
            }
          }()
        }
        {
          () => {
            if (project.client.length > 0) {
              return (
                <span>
                  <h3>{() => {if (project.client.length > 1) { return 'Clients' } else { return 'Client' }}()}</h3>
                  <p>
                    {project.client.map((client, index) => {
                      return (
                        <span key={client.url}>
                          {client.title}
                          {() => {if (index < project.client.length - 1) { return ', ' }}()}
                        </span>
                      );
                    })}
                  </p>
                </span>
              );
            }
          }()
        }
        {
          () => {
            if (project.project_type.length > 0) {
              return (
                <span>
                  <h3>Project Type</h3>
                  <p>
                    {project.project_type.map((projectType, index) => {
                      return (
                        <span key={projectType.url}>
                          {projectType.title}
                          {() => {if (index < project.project_type.length - 1) { return ', ' }}()}
                        </span>
                      );
                    })}
                  </p>
                </span>
              );
            }
          }()
        }
        {
          () => {
            if (project.technology.length > 0) {
              return (
                <span>
                  <h3>{() => {if (project.technology.length > 1) { return 'Technologies' } else { return 'Technology' }}()}</h3>
                  <p>
                    {project.technology.map((technology, index) => {
                      return (
                        <span key={technology.url}>
                          {technology.title}
                          {() => {if (index < project.technology.length - 1) { return ', ' }}()}
                        </span>
                      );
                    })}
                  </p>
                </span>
              );
            }
          }()
        }
        {
          () => {
            if (project.website.length > 0) {
              return (
                <span>
                  <h3>Website</h3>
                  <p><a href={project.website}>{project.website}</a></p>
                </span>
              );
            }
          }()
        }
      </span>
    );
  }

  renderReadyState() {
    const title = {__html: marked('# ' + this.state.project.title)};
    const intro = {__html: marked(this.state.project.intro)};
    const body = {__html: marked(this.state.project.body)};
    const footer = {__html: marked(this.state.project.footer)};
    const upperFullWidthSection = {__html: marked(this.state.project.upper_full_width_section)};
    const lowerFullWidthSection = {__html: marked(this.state.project.lower_full_width_section)};

    const formattedStartDate = this.state.project.date.start.season.charAt(0).toUpperCase() + this.state.project.date.start.season.slice(1) + ' ' + this.state.project.date.start.year.toString();
    const formattedEndDate = this.state.project.date.end.season + ' ' + this.state.project.date.end.year.toString();
    const projectDate = this.state.project.date.start.year === this.state.project.date.end.year && this.state.project.date.start.season === this.state.project.date.end.season ?
    formattedStartDate : formattedStartDate + '–' + formattedEndDate;

    return (
      <span>
        <span dangerouslySetInnerHTML={title}/>
        <Row>
          {
            (() => {
              if (this.state.project.cover_image_url) {
                return (
                  <Col md={12}>
                    <img alt='' src={this.state.project.cover_image_url} className='CoverImage'/>
                  </Col>
                );
              } else {
                return '';
              }
            })()
          }
          {
            (() => {
              if (this.state.project.upper_full_width_section.length > 0) {
                return (
                  <Col md={12} className='UpperFullWidthSection'>
                    <span dangerouslySetInnerHTML={upperFullWidthSection}/>
                  </Col>
                );
              }
            })()
          }
          <Col md={4}>
            <div className='Date'>
              {projectDate}
            </div>
            <div className='InfoBox'>
              {this.renderInfoBox(this.state.project)}
            </div>
          </Col>
          <Col md={8}>
            <span className='lead' dangerouslySetInnerHTML={intro}/>
            <span dangerouslySetInnerHTML={body}/>
            <span className='Footer' dangerouslySetInnerHTML={footer}/>
          </Col>
          {
            (() => {
              if (this.state.project.lower_full_width_section.length > 0) {
                return (
                  <Col md={12} className='LowerFullWidthSection'>
                    <span dangerouslySetInnerHTML={lowerFullWidthSection}/>
                  </Col>
                );
              }
            })()
          }
        </Row>
      </span>
    );
  }

  render() {
    let renderState;
    let documentTitle = 'Toni Karttunen';

    if (this.state.error !== null) {
      renderState = this.renderErrorState;
    } else if (this.state.project !== null) {
      renderState = this.renderReadyState;
      documentTitle = this.state.project.title.replace(/\_|\*/g, '') + ' — Projects — Toni Karttunen';
    } else {
      renderState = this.renderLoadingState;
    }

    return (
      <DocumentTitle title={documentTitle}>
        <Grid className='Project ProjectDetail' componentClass='article'>
          {renderState()}
        </Grid>
      </DocumentTitle>
    );
  }
}
