// Home

import React from 'react/addons';
import styles from './Home.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
export default class Home {
  render() {
    return (
      <section className="Home container">
        <h1>Home</h1>
      </section>
    );
  }
}
