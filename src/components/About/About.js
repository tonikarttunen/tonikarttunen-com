// About

import React from 'react/addons';
import DocumentTitle from 'react-document-title';
import styles from './About.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
export default class About {
  render() {
    return (
      <DocumentTitle title="About - Toni Karttunen">
        <section className="About container">
          <h1>About</h1>
          <span className="icon-500px"></span> 500px
        </section>
      </DocumentTitle>
    );
  }
}
