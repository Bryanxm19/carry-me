import axios from 'axios';
import { FETCH_USER, FETCH_ERRORS, CLEAR_ERRORS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
}

export const submitUserSettings = (values, history) => dispatch => {
    axios.put('/api/settings', values)
      .then(function(res){
        dispatch({ type: FETCH_USER, payload: res.data });
        history.push("/dashboard");
      })
      .catch(function(error){
        dispatch({ type: FETCH_ERRORS, payload: error.response.data.error });
      });

}

export const clearErrors = () => dispatch => {
  dispatch({ type: CLEAR_ERRORS });
}