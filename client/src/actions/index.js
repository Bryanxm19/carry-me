import axios from 'axios';
import { 
  FETCH_USER,
  FETCH_USER_GOALS,
  FETCH_SERVICE,
  FETCH_ERRORS,
  CLEAR_ERRORS 
} from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
}

export const fetchUserGoals = (limit = 10) => async dispatch => {
  const res = await axios.get('/api/goals?limit={limit}');

  dispatch({ type: FETCH_USER_GOALS, payload: res.data })
}

export const fetchService = (id, history) => dispatch => {
  axios.get("/api/services/" + id)
    .then(res => {
      dispatch({ type: FETCH_SERVICE, payload: res.data})
    })
    .catch(error => {
      history.push("/404")
    })
}

export const submitUserSettings = (values, history) => dispatch => {
    axios.put('/api/settings', values)
      .then(res => {
        dispatch({ type: FETCH_USER, payload: res.data });
        history.push("/dashboard");
      })
      .catch(error =>{
        dispatch({ type: FETCH_ERRORS, payload: error.response.data });
      });

}

export const clearErrors = () => dispatch => {
  dispatch({ type: CLEAR_ERRORS });
}

export const submitService = (values, history) => dispatch => {
  axios.post('/api/services', values)
    .then(function(res) {
      dispatch({ type: FETCH_USER, payload: res.data });
      history.push("/dashboard");
    })
    .catch(function(error){
      dispatch({ type: FETCH_ERRORS, payload: error.response.data });
    });
}