// Menu

import React from 'react/addons';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import styles from './Menu.less';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import MenuActions from '../../actions/MenuActions';

@withViewport
@withStyles(styles)
export default class Menu extends React.Component {
  static propTypes = {
    isOpen: React.PropTypes.bool,
    viewport: React.PropTypes.shape({
      width: React.PropTypes.number.isRequired,
      height: React.PropTypes.number.isRequired
    }).isRequired
  };

  constructor(props) {
    super(props);

    this.defaultProps = {
      isOpen: false
    };
  }

  openMenu() {
    MenuActions.openMenu(true);
  }

  closeMenu() {
    MenuActions.openMenu(false);
  }

  render() {
    const categories = [
      {
        title: 'Home',
        url: '/'
      },
      {
        title: 'User Experience Design',
        url: '/user-experience-design'
      },
      {
        title: 'Software Development',
        url: '/software-development'
      },
      {
        title: 'Projects',
        url: '/projects'
      }
    ];

    const projects = [
      {
        title: 'Viima Mobile User Interface',
        url: '/projects/viima-mobile-user-interface'
      },
      {
        title: 'Aalto MyCourses Usability Evaluation',
        url: '/projects/aalto-mycourses-usability-evaluation'
      },
      {
        title: 'Internet of Things Solutions for Länsimetro',
        url: '/projects/internet-of-things-solutions-for-lansimetro'
      },
      {
        title: 'HelsinkiGraph',
        url: '/projects/helsinkigraph'
      },
      {
        title: 'B. Sc. Thesis',
        url: '/projects/b-sc-thesis'
      },
      {
        title: 'Personal Finance',
        url: '/projects/personal-finance'
      },
      {
        title: 'London Travel Guide',
        url: '/projects/london-travel-guide'
      }
    ];

    let displayStyle = (this.props.viewport.width <= 991 && this.props.isOpen === true) ?
    {display: 'block'} :
    {display: 'none'};

    return (
      <div id='MenuContainer' style={displayStyle}>
        <Grid className='Menu'>
          {categories.map(item => {
            return (
              <Row key={item.title}>
                <Col md={12}>
                  <h2>
                    <Link
                      to={item.url}
                      onClick={
                        () => {
                          this.closeMenu();
                        }
                      }>
                      {item.title}
                    </Link>
                  </h2>
                </Col>
              </Row>
            );
          })}
          <Row>
            <Col md={12}>
              <ul>
                {projects.map(project => {
                  return (
                    <li key={project.title}>
                      <Link
                        to={project.url}
                        onClick={
                          () => {
                            this.closeMenu();
                          }
                        }>
                        {project.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
