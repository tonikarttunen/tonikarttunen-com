// Header

import React from 'react/addons';
import { Link } from 'react-router';
import { Grid } from 'react-bootstrap';
import styles from './Header.less';
import withStyles from '../../decorators/withStyles';
import { staticPath } from '../../utilities/static/StaticPath';

@withStyles(styles)
export default class Header {

  render() {
    const logoStyles = {
      'background': 'url(' + staticPath('src/components/Header/images/Header-Logo-Light-Text.png') + ')',
      'backgroundImage': 'url(' + staticPath('src/components/Header/images/Header-Logo-Light-Text.svg') + '), linear-gradient(transparent, transparent)'
    };

    return (
      <header className='Header'>
        <nav className='NavigationBar' role='navigation'>
          <Grid>
            <div className='NavigationBarLeft'>
              <Link to='/' className='LogoContainer'>
                <span className='Logo' style={logoStyles} />Toni Karttunen
              </Link>
            </div>
            <div className='NavigationBarRight'>
              <div className='NavigationBarRightContainer'>
                <div className='hidden-xs'>
                  <Link to='/user-experience-design' className='NavigationLink'>
                    UX Design
                  </Link>
                  <Link to='/software-development' className='NavigationLink'>
                    Software Development
                  </Link>
                  <Link to='/projects' className='NavigationLink'>
                    Projects
                  </Link>
                </div>
                <div className='visible-xs'>
                  <Link to='/menu' className='NavigationLink MenuToggle'>
                    Menu <span className='ion-arrow-down-b'/>
                  </Link>
                </div>
              </div>
            </div>
          </Grid>
        </nav>
      </header>
    );
  }
}
