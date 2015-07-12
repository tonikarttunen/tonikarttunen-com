// Collapsible content

import React, { PropTypes } from 'react/addons'; // eslint-disable-line no-unused-vars
import { Button } from 'react-bootstrap';
import classNames from 'classnames';
const CollapsibleMixin = require('react-bootstrap').CollapsibleMixin;
import styles from './CollapsibleContent.less';
import withStyles from '../../decorators/withStyles';

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
    let classNameRef = 'CollapsibleContent';
    let styleSet = this.getCollapsibleClassSet(classNameRef);
    let text = this.isExpanded() ? 'Less' : 'More';

    return (
      <div>
        <Button onClick={this.onHandleToggle}>{text} information</Button>
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
