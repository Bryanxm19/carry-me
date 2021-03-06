import { FETCH_ERRORS, CLEAR_ERRORS } from '../actions/types';

export default function(state = null, action) {
    switch (action.type) {
      case FETCH_ERRORS:
        return action.payload || ""
      case CLEAR_ERRORS:
        return null
      default:
        return state;
    }
}