// Header

import React from 'react/addons';
import { Link } from 'react-router';
import styles from './Header.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
export default class Header {

  render() {
    return (
      <header className='Header'>
        <nav className='navbar navbar-default' role='navigation'>
          <div className='container'>
            <div className='navbar-header'>
              <Link to='/' className='navbar-brand'>Toni Karttunen</Link>
            </div>
          </div>
        </nav>
      </header>
    );
  }

}
