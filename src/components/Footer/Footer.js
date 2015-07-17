/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react/addons';
import styles from './Footer.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
export default class Footer {
  render() {
    var currentYear = new Date().getFullYear();

    return (
      <footer className="Footer container">
        <div className="Footer-container">
          <p>
            &copy; 2011—{currentYear} Toni Karttunen. All rights reserved.&nbsp;
            <a href="https://github.com/tonikarttunen/tonikarttunen-com/">Source code</a>.&nbsp;
            Bebas Neue font &copy; <a href='http://www.fontfabric.com'>Font Fabric</a>.
          </p>
        </div>
      </footer>
    );
  }

}
