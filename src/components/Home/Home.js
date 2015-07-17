// Home

import React from 'react/addons';
import Contact from '../../components/Contact';
import styles from './Home.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
export default class Home {
  render() {
    return (
      <article>
        <section className='Home container'>
          <h1>Home</h1>
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        </section>
        <Contact/>
      </article>
    );
  }
}
