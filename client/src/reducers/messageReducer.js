import { FETCH_MESSAGES } from '../actions/types';

export default function(state = null, action) {
    switch (action.type) {
      case FETCH_MESSAGES:
        return action.payload
      default:
        return state;
    }
}