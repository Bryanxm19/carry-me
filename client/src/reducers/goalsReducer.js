import { FETCH_USER_GOALS } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
      case FETCH_USER_GOALS:
        return action.payload
      default:
        return state;
    }
}