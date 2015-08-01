// Header

import React from 'react/addons';
import { Link } from 'react-router';
import { Grid } from 'react-bootstrap';
import styles from './Header.less';
import withStyles from '../../decorators/withStyles';
import MenuToggle from '../../components/MenuToggle';

@withStyles(styles)
export default class Header {
  render() {
    return (
      <header className='Header'>
        <nav className='NavigationBar' role='navigation'>
          <Grid>
            <div className='NavigationBarLeft'>
              <Link to='/' className='LogoContainer'>
                <span className='Logo'/>Toni Karttunen
              </Link>
            </div>
            <div className='NavigationBarRight'>
              <div className='NavigationBarRightContainer'>
                <MenuToggle/>
              </div>
            </div>
          </Grid>
        </nav>
      </header>
    );
  }
}
