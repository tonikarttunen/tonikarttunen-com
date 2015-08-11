// MenuToggle

import React from 'react/addons'; // eslint-disable-line no-unused-vars
// import { canUseDOM } from 'react/lib/ExecutionEnvironment';
import styles from './MenuToggle.less';
import withStyles from '../../decorators/withStyles';
import $ from 'jquery';

const MenuToggleInternal = React.createClass({
  getInitialState() {
    return {
      isOpen: false
    };
  },

  render() {
    let arrow = 'ion-navicon-round'; // this.state.isOpen ? 'ion-arrow-up-b' : 'ion-arrow-down-b';
    let toggleElement;

    if ($('#MenuContainer').css('display') === 'block') { // this.state.isOpen
      toggleElement = (
        <span className='NavigationLink MenuToggle' onClick={
          () => {
            // Temporary solution; should be replaced with Flux
            $('#MenuContainer').hide();
            $('body').css({overflow: 'auto'});

            this.setState({
              isOpen: false
            });
          }}>
          Menu <span className={arrow}/>
        </span>
      );
    } else {
      toggleElement = (
        <span className='NavigationLink MenuToggle' onClick={
          () => {
            // Temporary solution; should be replaced with Flux
            $('#MenuContainer').show();
            $('body').css({overflow: 'hidden'});

            this.setState({
              isOpen: true
            });
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
