// Projects

import React from 'react/addons';
import DocumentTitle from 'react-document-title';
import styles from './Projects.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
export default class Projects {
  render() {
    return (
      <DocumentTitle title="Projects - Toni Karttunen">
        <section className="Projects container">
          <h1>Projects</h1>
        </section>
      </DocumentTitle>
    );
  }
}
