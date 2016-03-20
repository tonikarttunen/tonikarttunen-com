// ProjectMaster

import React from 'react/addons';
import { Grid, Row, Col } from 'react-bootstrap';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import styles from './ProjectMaster.less';
import Cover from '../../../components/Cover';
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
      <Grid>
        <Row>
          <Col xs={12}>
            <p className='lead'>Loading…</p>
          </Col>
        </Row>
      </Grid>
    );
  }

  renderErrorState() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <p className='lead'>An error occurred while fetching the case studies.</p>
          </Col>
        </Row>
      </Grid>
    );
  }

  renderInfoBox(project) {
    const categoryTitle = project.categories && project.categories.length > 1 ? 'Categories' : 'Category';

    return (
      <span>
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
    const className = !!this.props.isCompact ? '' : 'RecentCaseStudies';

    return (
      <div className={className}>
          {
            this.state.projects
            .filter(project => { return project.featured })
            .map(project => {
              return (
                <Link to={project.url} key={project.url}>
                  <Cover item={project} type={'project'} size={'Medium'}/>
                </Link>
              );
            })
          }
      </div>
    );
  }

  renderProjectArchiveTitle() {
    const position = 'NotTopOfThePage';
    const item = {
      punch_line: 'Projects from 2013 and earlier',
      title: 'Project Archive',
      intro: '',
      cover_background_color: '#3d3d3d'
    };
    return (
      <Cover item={item} type={'compact'} position={position}/>
    );
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
              <Grid key={project.url}>
                <Row>
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
              </Grid>
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
      <div className='ViewAllContainer'>
        <Grid>
          <Row>
            <Col sm={12}>
              <Link to='/case-studies' className='ViewAll'>
                View More Case Studies <span className='ion-chevron-right hidden-xs hidden-sm'/>
              </Link>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

  renderTitle() {
    const item = {
      punch_line: 'UX design and software development projects',
      title: this.props.isCompact !== true ? 'Case Studies' : 'Latest Case Studies',
      intro: '',
      cover_background_color: '#3d3d3d'
    };
    return (
      <Cover item={item} type={'compact'}/>
    );
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
      <div className='Project ProjectMaster Compact'>
        {this.renderTitle()}
        {renderState()}
        {this.renderViewAllLink()}
      </div>
    ) :
    (
      <DocumentTitle title='Projects — Toni Karttunen'>
        <div className='Project ProjectMaster' componentClass='article'>
          {this.renderTitle()}
          {renderState()}
          {this.renderViewAllLink()}
        </div>
      </DocumentTitle>
    );
  }
}
