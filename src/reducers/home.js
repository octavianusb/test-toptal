import { FETCH } from '../constants/actionTypes';

export default (home = [], action) => {
  switch (action.type) {
    case FETCH:
      return action.payload;
    default:
      return home;
  }
}