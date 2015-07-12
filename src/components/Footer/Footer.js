/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react/addons';
import styles from './Footer.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
export default class Footer {
  render() {
    var currentYear = new Date().getFullYear();

    return (
      <div className="Footer container">
        <div className="Footer-container">
          <p>&copy; 2011—{currentYear} Toni Karttunen. All rights reserved.</p>
        </div>
      </div>
    );
  }

}
