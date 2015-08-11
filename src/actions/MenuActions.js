// Menu actions

import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';

const MenuActions = {
  receiveItems: (data) => {
    AppDispatcher.handleAction({
      actionType: ActionTypes.MOBILE_MENU_RECEIVE_DATA,
      data: data
    });
  },

  openMenu: (newValue) => {
    let type = (newValue === true) ? ActionTypes.MOBILE_MENU_TOGGLE_OPEN : ActionTypes.MOBILE_MENU_TOGGLE_CLOSED;

    AppDispatcher.handleAction({
      actionType: type
    });
  }
};

export default MenuActions;
