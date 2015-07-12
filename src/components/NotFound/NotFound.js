// Not found (404 error) page

import React from 'react/addons';
import DocumentTitle from 'react-document-title';
import styles from './NotFound.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
export default class NotFound {
  render() {
    return (
      <DocumentTitle title="Page Not Found - Toni Karttunen">
        <section className="NotFound container">
          <h1>Page Not Found</h1>
        </section>
      </DocumentTitle>
    );
  }
}
