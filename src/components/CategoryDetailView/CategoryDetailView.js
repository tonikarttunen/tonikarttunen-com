// CategoryDetailView

import React, { PropTypes } from 'react/addons';  // eslint-disable-line no-unused-vars
import styles from './CategoryDetailView.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
export default class CategoryDetailView extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  };

  render() {

    return (
      <div className='CategoryDetailView'>
        {this.props.children}
      </div>
    );
  }
}
