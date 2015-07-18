// Header

import React from 'react/addons';
import { Link } from 'react-router';
import styles from './Header.less';
import withStyles from '../../decorators/withStyles';
import { Navbar } from 'react-bootstrap';

@withStyles(styles)
export default class Header {

  render() {
    return (
      <header className='Header'>
        <Navbar brand={<Link to='/'>Toni Karttunen</Link>} toggleNavKey={0}/>
      </header>
    );
  }

}
