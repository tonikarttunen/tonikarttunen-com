// Project detail view

import React, { PropTypes } from 'react/addons';  // eslint-disable-line no-unused-vars
import styles from './ProjectDetailView.less';
import withStyles from '../../../decorators/withStyles';

@withStyles(styles)
export default class ProjectDetailView {
  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    return (
      <article className='ProjectDetailView'>
        {this.props.children}
      </article>
    );
  }
}
