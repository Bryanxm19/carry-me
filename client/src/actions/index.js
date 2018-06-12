import axios from 'axios';
import { 
  FETCH_USER,
  FETCH_USER_GOALS,
  FETCH_SERVICE,
  FETCH_MESSAGES,
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
    .then(res => {
      dispatch({ type: FETCH_USER, payload: res.data });
      history.push("/dashboard");
    })
    .catch(error => {
      dispatch({ type: FETCH_ERRORS, payload: error.response.data });
    });
}

export const sendServiceRequest = (service, history) => dispatch => {
  axios.put('/api/services/' + service._id + '/request')
    .then(res => {
      dispatch({ type: FETCH_SERVICE, payload: res.data})
    })
    .catch(error => {
      history.push("/404")
    })
}

export const acceptServiceRequest = (request, history) => dispatch => {
  axios.put('/api/requests/' + request._id + '/accept')
    .then(res => {
      dispatch({ type: FETCH_SERVICE, payload: res.data })
    })
    .catch(error => {
      history.push("/404")
    })
}

export const declineServiceRequest = (request, history) => dispatch => {
  axios.delete('/api/requests/' + request._id + '/decline')
    .then(res => {
      dispatch({ type: FETCH_SERVICE, payload: res.data })
    })
    .catch(error => {
      history.push("/404")
    })
}

export const fetchMessages = (requestId) => dispatch => {
  axios.get('/api/requests/' + requestId + '/messages')
    .then(res => {
      dispatch({ type: FETCH_MESSAGES, payload: res.data })
    })
    .catch(error => {
      console.log(error)
    })
}

export const sendMessage = (requestId, values) => dispatch => {
  axios.post('/api/requests/' + requestId + '/message', values)
    .then(res => {
      dispatch({ type: FETCH_MESSAGES, payload: res.data });
    })
    .catch(error => {
      console.log(error)
    });
}