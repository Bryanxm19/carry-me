import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import validateEmail from '../../utils/validateEmail';
import SettingsField from './SettingsField';
import formFields from './formFields';

class SettingsForm extends Component {

  componentWillUnmount() {
    this.props.clearErrors();
  }

  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      const error = this.props.errors ? this.props.errors[name] : false
      return (
        <Field
          key={name}
          component={SettingsField}
          type="text"
          label={label}
          name={name}
          err={error}
        />
      );
    });
  }

  submitForm(values) {
    const { submitUserSettings, history } = this.props
    submitUserSettings(values, history);
  }

  render() {
    return (
      <div className="row text-center">
        <form onSubmit={this.props.handleSubmit(this.submitForm.bind(this))}>
          {this.renderFields()}
          <div className="col-md-12">
            <Link to="/dashboard" className="red btn-flat white-text">
              Cancel
            </Link>
            <button type="submit" className="teal btn-flat right white-text">
              Update
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  if(!errors['email']) {
    errors.email = validateEmail(values.email);
  }

  return errors;
}

function mapStateToProps({ errors }) {
  return { errors };
}

export default connect(mapStateToProps, actions)(
  reduxForm({
    validate,
    form: 'settingsForm',
    destroyOnUnmount: true
  })(SettingsForm));