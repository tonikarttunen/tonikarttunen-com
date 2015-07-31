// Header

import React from 'react/addons';
import { Link } from 'react-router';
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
        <nav className='navbar navbar-default navbar-fixed-top' role='navigation'>
          <div className='container'>
            <div className='navbar-header'>
              <Link to='/' className='navbar-brand'>
                <span className='logo' style={logoStyles} />Toni Karttunen
              </Link>
            </div>
          </div>
        </nav>
      </header>
    );
  }

}
