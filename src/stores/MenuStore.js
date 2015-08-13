// MenuStore.js

import AppDispatcher from '../dispatcher/AppDispatcher';
import EventEmitter from 'events';
import ActionTypes from '../constants/ActionTypes';
import _ from 'underscore';

// Initial state
let data = {};
let isOpen = false;

function setData(newValue) {
  data = newValue;
}

function setIsOpen(newValue) {
  isOpen = newValue;
}

let MenuStore = _.extend({}, EventEmitter.prototype, {
  getMenuItems: () => {
    return data;
  },

  isOpen: () => {
    return isOpen;
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

AppDispatcher.register((payload) => {
  let action = payload.action;

  switch(action.actionType) {
    case ActionTypes.MOBILE_MENU_TOGGLE_OPEN:
      setIsOpen(true);
      break;

    case ActionTypes.MOBILE_MENU_TOGGLE_CLOSED:
      setIsOpen(false);
      break;

    case ActionTypes.MOBILE_MENU_RECEIVE_DATA:
      setData(payload.action.data);
      break;

    default:
      return true;
  }

  MenuStore.emitChange();
  return true;
});

export default MenuStore;
