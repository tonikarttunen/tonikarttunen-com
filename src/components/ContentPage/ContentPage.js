/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react/addons';
import styles from './ContentPage.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class ContentPage {

  static propTypes = {
    path: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    this.context.onSetTitle(this.props.title);
    return (
      <div className="ContentPage">
        <div className="ContentPage-container">
          {
            this.props.path === '/' ? null : <h1>{this.props.title}</h1>
          }
          <div dangerouslySetInnerHTML={{__html: this.props.content || ''}} />
          <span className="icon-500px"></span> 500px
        </div>
      </div>
    );
  }

}

export default ContentPage;
