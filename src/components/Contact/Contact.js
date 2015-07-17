// Contact

import React from 'react/addons';
import styles from './Contact.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
export default class Contact {
  render() {
    return (
      <section className='Contact container'>
        <h1>Contact</h1>
        <span className='icon-500px'></span> 500px
      </section>
    );
  }
}
