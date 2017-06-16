import * as types from '../actions/action-types';
import kitchen from './kitchen.js';
import bedroom from './bedroom.js';

const reducers = [
  bedroom,
  kitchen
];

const initialState = {
  light: 'OFF',
  isKettleFilled: false,
  isKettleHeated: false,
};

export default function house(state = initialState, action) {
  let newState;

  switch (action.type) {
    case types.LIGHT_DIM:
      newState = {
        ...state,
        isKettleFilled: true,
        isKettleHeated: true
      };
      break;
    default:
      newState = state;
      break;
  }

  return reducers.reduce((s, r) => {
    // s is the accumulating state, r is the reducer
    return r(s, action);
  }, newState);
}
