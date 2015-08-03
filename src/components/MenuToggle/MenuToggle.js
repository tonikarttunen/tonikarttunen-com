// MenuToggle

import React from 'react/addons'; // eslint-disable-line no-unused-vars
import { canUseDOM } from 'react/lib/ExecutionEnvironment';
import { Link, Navigation } from 'react-router';
import styles from './MenuToggle.less';
import withStyles from '../../decorators/withStyles';

const MenuToggleInternal = React.createClass({
  mixins: [Navigation],

  render() {
    let isOpen = false;
    let canGoBack = false;

    if (canUseDOM) {
      isOpen = window.location.pathname.includes('/menu');

      // IE does not support document.referrer
      const referrer = document.referrer || 'http://www.tonikarttunen.com';
      canGoBack = window.history.length > 1 && referrer.includes(window.location.hostname);
    }

    let arrow = isOpen ? 'ion-arrow-up-b' : 'ion-arrow-down-b';
    let toggleElement;

    if (isOpen) {
      if (canGoBack) {
        toggleElement = (
          <span className='NavigationLink MenuToggle' onClick={() => this.goBack()}>
            Menu <span className={arrow}/>
          </span>
        );
      } else {
        toggleElement = (
          <Link to='/' className='NavigationLink MenuToggle'>
            Menu <span className={arrow}/>
          </Link>
        );
      }
    } else {
      toggleElement = (
        <Link to='/menu' className='NavigationLink MenuToggle'>
          Menu <span className={arrow}/>
        </Link>
      );
    }

    return (
      <div className='MenuToggleContainer'>
        {toggleElement}
      </div>
    );
  }
});

@withStyles(styles)
export default class MenuToggle extends MenuToggleInternal {}
