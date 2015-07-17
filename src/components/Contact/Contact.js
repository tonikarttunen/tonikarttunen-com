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
        <span className='ion-android-mail'/> Mail
        <span className='ion-social-github'/> GitHub
        <span className='icon-500px'/> 500px
        <span className='ion-social-instagram'/> Instagram
        <span className='ion-social-twitter'/> Twitter
      </section>
    );
  }
}
