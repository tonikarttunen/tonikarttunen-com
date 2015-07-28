// Home

import React from 'react/addons';
import Solutions from '../../components/Solutions';
import Projects from '../../components/Projects';
import styles from './Home.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
export default class Home {
  render() {
    return (
      <article className='Home'>
        <Solutions/>
        <Projects/>
      </article>
    );
  }
}
