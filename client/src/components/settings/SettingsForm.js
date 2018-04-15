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
      return (
        <Field
          key={name}
          component={SettingsField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  renderErrors() {
    if (this.props.errors) {
      return _.map(this.props.errors, (error) => {
        return (
          <p className="text-danger" key={error}>{error}</p>
        );
      });
    }
  }

  submitForm(values) {
    const { submitUserSettings, history } = this.props
    submitUserSettings(values, history);
  }

  render() {
    return (
      <div>
        {this.renderErrors()}
        <form onSubmit={this.props.handleSubmit(this.submitForm.bind(this))}>
          {this.renderFields()}
          <Link to="/dashboard" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Update
          </button>
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