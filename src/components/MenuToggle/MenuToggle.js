// MenuToggle

import React from 'react/addons'; // eslint-disable-line no-unused-vars
// import { canUseDOM } from 'react/lib/ExecutionEnvironment';
import styles from './MenuToggle.less';
import withStyles from '../../decorators/withStyles';
import MenuActions from '../../actions/MenuActions';

const MenuToggleInternal = React.createClass({
  propTypes: {
    isOpen: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      isOpen: false
    };
  },

  openMenu() {
    MenuActions.openMenu(true);
  },

  closeMenu() {
    MenuActions.openMenu(false);
  },

  render() {
    let arrow = this.props.isOpen ? 'ion-arrow-up-b' : 'ion-arrow-down-b';
    let toggleElement;

    if (this.props.isOpen === true) {
      toggleElement = (
        <span className='NavigationLink MenuToggle' onClick={
          () => {
            this.closeMenu();
          }}>
          Menu <span className={arrow}/>
        </span>
      );
    } else {
      toggleElement = (
        <span className='NavigationLink MenuToggle' onClick={
          () => {
            this.openMenu();
          }}>
          Menu <span className={arrow}/>
        </span>
      );
    }

    return (
      <div className='MenuToggleContainer visible-sm visible-xs'>
        {toggleElement}
      </div>
    );
  }
});

@withStyles(styles)
export default class MenuToggle extends MenuToggleInternal {}
