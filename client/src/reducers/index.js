import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import goalsReducer from './goalsReducer';
import serviceReducer from './serviceReducer';
import messageReducer from './messageReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  auth: authReducer,
  goals: goalsReducer,
  service: serviceReducer,
  messages: messageReducer,
  form: reduxForm,
  errors: errorReducer
});