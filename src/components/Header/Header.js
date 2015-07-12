// Header

import React from 'react/addons';
import { Link } from 'react-router';
import styles from './Header.less';
import withStyles from '../../decorators/withStyles';
import { Nav, Navbar, CollapsibleNav } from 'react-bootstrap';
// import { NavItemLink } from 'react-router-bootstrap';

@withStyles(styles)
export default class Header {

  render() {
    return (
      <header>
        <Navbar fixedTop brand={<Link to="/">Toni Karttunen</Link>} toggleNavKey={0}>
          <CollapsibleNav eventKey={0}> {/* Reference for toggling the nav */}
            <Nav navbar right>
              <li><Link to="/">Home</Link></li>
              <li><Link to="projects">Projects</Link></li>
              <li><Link to="about">About</Link></li>
            </Nav>
          </CollapsibleNav>
        </Navbar>
      </header>
    );
  }

}
