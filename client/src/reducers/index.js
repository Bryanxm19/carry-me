import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import goalsReducer from './goalsReducer';
import serviceReducer from './serviceReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  auth: authReducer,
  goals: goalsReducer,
  service: serviceReducer,
  form: reduxForm,
  errors: errorReducer
});