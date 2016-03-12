// ProjectMaster

import React from 'react/addons';
import { Grid, Row, Col } from 'react-bootstrap';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import styles from './ProjectMaster.less';
import withStyles from '../../../decorators/withStyles';
import { APIURL } from '../../../api/APIUtilities';
import { isIE9OrOlder } from '../../../utilities/FeatureDetection/FeatureDetection';
const marked = require('marked');
const request = require('superagent');
const legacyIESupport = require('superagent-legacyiesupport');

@withStyles(styles)
export default class ProjectMaster extends React.Component {
  static propTypes = {
    isCompact: React.PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      error: null
    };
    this.renderLoadingState = this.renderLoadingState.bind(this);
    this.renderErrorState = this.renderErrorState.bind(this);
    this.renderReadyState = this.renderReadyState.bind(this);
    this.renderViewAllLink = this.renderViewAllLink.bind(this);
    this.renderTitle = this.renderTitle.bind(this);
    this.renderInfoBox = this.renderInfoBox.bind(this);
    this.renderCaseStudies = this.renderCaseStudies.bind(this);
    this.renderProjectArchive = this.renderProjectArchive.bind(this);
    this.renderProjectArchiveTitle = this.renderProjectArchiveTitle.bind(this);
  }

  componentDidMount() {
    const legacyIE = isIE9OrOlder() ? legacyIESupport : (() => {});

    const url = this.props.isCompact === true ?
                'project/?latest-projects=2' :
                'project/';

    request
    .get(APIURL(url))
    .use(legacyIE)
    .end((err, res) => {
      if (!err && res.status === 200) {
        this.setState({projects: JSON.parse(res.text)}); // eslint-disable-line react/no-set-state
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
      <p className='lead'>An error occurred while fetching the projects.</p>
    );
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

  renderCaseStudies() {
    return (
      this.state.projects
      .filter(project => { return project.featured })
      .map(project => {
        const title = {__html: marked('## ' + project.title)};
        const intro = {__html: marked(project.intro)};

        const formattedStartDate = project.date.start.season.charAt(0).toUpperCase() + project.date.start.season.slice(1) + ' ' + project.date.start.year.toString();
        const formattedEndDate = project.date.end.season + ' ' + project.date.end.year.toString();
        const projectDate = project.date.start.year === project.date.end.year && project.date.start.season === project.date.end.season ?
        formattedStartDate : formattedStartDate + '–' + formattedEndDate;

        return (
          <Row key={project.url}>
            {
              (() => {
                if (project.cover_image_url) {
                  return (
                    <Col md={12} className='CoverImageContainer'>
                      <Link to={project.url}>
                        <img alt='' src={project.cover_image_url} className='CoverImage'/>
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
                {projectDate}
              </div>
              <div className='InfoBox hidden-xs hidden-sm'>
                {this.renderInfoBox(project)}
              </div>
            </Col>
            <Col md={8}>
              <Link to={project.url}><span dangerouslySetInnerHTML={title}/></Link>
              <span className='lead hidden-xs' dangerouslySetInnerHTML={intro}/>
              <div className='InfoBox visible-sm-block'>
                {this.renderInfoBox(project)}
              </div>
              <p><Link to={project.url} className='MoreInformation'>Read More</Link></p>
            </Col>
          </Row>
        );
      })
    );
  }

  renderProjectArchiveTitle() {
    return (<h1>Project Archive</h1>);
  }

  renderProjectArchive() {
    return (
      <div className='ProjectArchive'>
        {
          this.state.projects
          .filter(project => { return !project.featured })
          .map(project => {
            const title = {__html: marked('## ' + project.title)};
            const intro = {__html: marked(project.intro)};

            const formattedStartDate = project.date.start.season.charAt(0).toUpperCase() + project.date.start.season.slice(1) + ' ' + project.date.start.year.toString();
            const formattedEndDate = project.date.end.season + ' ' + project.date.end.year.toString();
            const projectDate = project.date.start.year === project.date.end.year && project.date.start.season === project.date.end.season ?
            formattedStartDate : formattedStartDate + '–' + formattedEndDate;

            return (
              <Row key={project.url}>
                {
                  (() => {
                    if (project.cover_image_url) {
                      return (
                        <Col sm={6} className='CoverImageContainer'>
                          <Link to={project.url}>
                            <img alt='' src={project.cover_image_url} className='CoverImage'/>
                          </Link>
                        </Col>
                      );
                    } else {
                      return '';
                    }
                  })()
                }
                <Col sm={6} className='TextContainer'>
                  <div className='Date'>{projectDate}</div>
                  <Link to={project.url}><span dangerouslySetInnerHTML={title}/></Link>
                  <span className='lead hidden-sm hidden-xs' dangerouslySetInnerHTML={intro}/>
                  <p><Link to={project.url} className='MoreInformation'>Read More</Link></p>
                </Col>
                <Col sm={12} className='hidden-xs'>
                  <div className='ProjectArchiveRowBottomBorder'/>
                </Col>
              </Row>
            );
          })
        }
      </div>
    );
  }

  renderReadyState() {
    return (
      <span>
        {this.renderCaseStudies()}
        {this.props.isCompact !== true ? this.renderProjectArchiveTitle() : ''}
        {this.props.isCompact !== true ? this.renderProjectArchive() : ''}
      </span>
    );
  }

  renderViewAllLink() {
    if (this.props.isCompact !== true) {
      return null;
    }

    return (
      <Row>
        <Col sm={12} className='ViewAllContainer'>
          <p>
            <Link to='/case-studies' className='ViewAll'>
              View More Case Studies <span className='ion-chevron-right hidden-xs'/>
            </Link>
          </p>
        </Col>
      </Row>
    );
  }

  renderTitle() {
    return this.props.isCompact !== true ?
    <h1>Case Studies</h1> :
    <h1>Latest Case Studies</h1>;
  }

  render() {
    let renderState;

    if (this.state.error !== null) {
      renderState = this.renderErrorState;
    } else if (this.state.projects.length > 0) {
      renderState = this.renderReadyState;
    } else {
      renderState = this.renderLoadingState;
    }

    return this.props.isCompact === true ?
    (
      <Grid className='Project ProjectMaster Compact'>
        {this.renderTitle()}
        {renderState()}
        {this.renderViewAllLink()}
      </Grid>
    ) :
    (
      <DocumentTitle title='Projects — Toni Karttunen'>
        <Grid className='Project ProjectMaster' componentClass='article'>
          {this.renderTitle()}
          {renderState()}
          {this.renderViewAllLink()}
        </Grid>
      </DocumentTitle>
    );
  }
}
