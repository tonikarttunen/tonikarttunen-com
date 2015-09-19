// MenuToggle

import React from 'react/addons';
import styles from './MenuToggle.less';
import withStyles from '../../decorators/withStyles';
import MenuActions from '../../actions/MenuActions';

const MenuToggleInternal = React.createClass({
  propTypes: {
    isOpen: React.PropTypes.bool
  },

  getDefaultProps: () => {
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
    const arrow = this.props.isOpen ? 'ion-arrow-up-b' : 'ion-arrow-down-b';
    const menuToggleAction = this.props.isOpen ? this.closeMenu : this.openMenu;

    return (
      <div className='MenuToggleContainer visible-sm visible-xs'>
        <span className='NavigationLink MenuToggle' onClick={() => { menuToggleAction(); }}>
          Menu <span className={arrow}/>
        </span>
      </div>
    );
  }
});

@withStyles(styles)
export default class MenuToggle extends MenuToggleInternal {}
