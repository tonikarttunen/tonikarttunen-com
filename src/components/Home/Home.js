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
          <h1>Solutions</h1>
          <p>
            UX Design
            Web Development
            Mobile App Development
          </p>
          <h1>Projects</h1>
        </section>
        <Contact/>
      </article>
    );
  }
}
