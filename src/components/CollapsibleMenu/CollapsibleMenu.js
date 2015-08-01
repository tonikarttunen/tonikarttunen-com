// Collapsible menu

import React, { PropTypes } from 'react/addons'; // eslint-disable-line no-unused-vars
import classNames from 'classnames';
import styles from './CollapsibleMenu.less';
import withStyles from '../../decorators/withStyles';

const CollapsibleMixin = require('react-bootstrap').CollapsibleMixin;

const CollapsibleContentInternal = React.createClass({
  propTypes: {
    children: React.PropTypes.node
  },

  mixins: [CollapsibleMixin],

  getCollapsibleDOMNode() {
    return React.findDOMNode(this.refs.collapsibleContentArea);
  },

  getCollapsibleDimensionValue() {
    return React.findDOMNode(this.refs.collapsibleContentArea).scrollHeight;
  },

  onHandleToggle(event) {
    event.preventDefault();
    this.setState({
      expanded: !this.state.expanded
    });
  },

  render() {
    let classNameRef = 'CollapsibleMenu';
    let styleSet = this.getCollapsibleClassSet(classNameRef);
    let isExpanded = this.isExpanded();
    let arrow = isExpanded ? 'ion-arrow-up-b' : 'ion-arrow-down-b';

    return (
      <div className="CollapsibleMenuContainer">
        <div onClick={this.onHandleToggle} className="CollapsibleMenuToggle NavigationLink MenuToggle" role="button">
          Menu <span className={arrow}/>
        </div>
        <div ref="collapsibleContentArea" className={classNames(styleSet)}>
          {this.props.children}
        </div>
      </div>
    );
  }
});

// ES6 wrapper class; this wrapper class is used for loading LESS styles with a decorator.
// CollapsibleContentInternal is not created as an ES6 class because ES6 classes do not support React mixins.
@withStyles(styles)
export default class CollapsibleContent extends CollapsibleContentInternal {}
