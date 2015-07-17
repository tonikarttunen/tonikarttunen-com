// Contact

import React from 'react/addons';
import DocumentTitle from 'react-document-title';
import styles from './Contact.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
export default class Contact {
  render() {
    return (
      <DocumentTitle title='Contact - Toni Karttunen'>
        <section className='Contact container'>
          <h1>Contact</h1>
          <span className='icon-500px'></span> 500px
        </section>
      </DocumentTitle>
    );
  }
}
