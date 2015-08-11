// LargeScreenMenu

import React from 'react/addons';
import { Link } from 'react-router';
import styles from './LargeScreenMenu.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
export default class LargeScreenMenu {
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

    return (
      <span className='hidden-sm hidden-xs'>
        {categories.map(item => {
          let selectedClassName = '';
          let pathname = window.location.pathname;

          if (pathname === '/' && item.url === '/') {  // Special case: homepage
            selectedClassName = ' selected';
          } else if (pathname.includes(item.url) && item.url !== '/') {
            selectedClassName = ' selected';
          }

          return (
            <span key={item.title}>
              <Link to={item.url} className={'NavigationLink' + selectedClassName}>
                {item.title}
              </Link>
            </span>
          );
        })}
      </span>
    );
  }
}
