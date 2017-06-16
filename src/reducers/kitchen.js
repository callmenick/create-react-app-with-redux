import * as types from '../actions/action-types';

export default (state, action) => {
  switch (action.type) {
    case types.KETTLE_FILL:
      return Object.assign({}, state, {isKettleFilled: true});
    case types.KETTLE_HEAT:
      return Object.assign({}, state, {isKettleHeated: true});
    case types.KETTLE_DRINK:
      return Object.assign({}, state, {isKettleFilled: false, isKettleHeated: false});
    default:
      return state;
  }
};
