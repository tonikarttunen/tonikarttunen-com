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
    menuItems: React.PropTypes.shape({
      categories: React.PropTypes.array,
      projects: React.PropTypes.array
    }).isRequired,
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
    const categories = this.props.menuItems.categories;
    const projects = this.props.menuItems.projects;

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
