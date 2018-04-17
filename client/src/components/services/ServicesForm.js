import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Glyphicon } from 'react-bootstrap';
import * as actions from '../../actions';

import formFields from './formFields';
import ServicesField from './ServicesField';

class ServicesForm extends Component {

  state = { serviceType: this.props.serviceType }

  renderFields() {
    return _.map(formFields, ({ label, name, type, placeholder, options }) => {
      return (
        <Field
          key={name}
          component={ServicesField}
          type={type}
          label={label}
          name={name}
          placeholder={placeholder}
          options={options || []}
          serviceType={this.state.serviceType}
          changeType={(type) => this.setState({ serviceType: type })}
        />
      );
    });
  }

  render() {
    return (
      <div className="row text-center" style={{ backgroundColor: 'white', borderRadius: '.25rem' }}>
        <div className="row">
          <div className="col-xs-9" style={{ textAlign: 'left' }}>
            <h1 style={{ marginLeft: '20px' }}>Add New Service</h1>
          </div>
          <div className="col-xs-3" style={{ marginTop: '20px' }}>
            <div className="pull-right">
              <Link to="/dashboard">
                <Glyphicon glyph="remove" style={{ fontSize: '30px', marginRight: '20px', color: '#314459' }} />
              </Link>
            </div>
          </div>
        </div>
        <form>
          {this.renderFields()}
          <div className="col-sm-12" style={{ marginBottom: '10px' }}>
            <button type="submit" className="btn btn-primary">
              Save
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
    if (!values[name] && name !== 'description') {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}

export default connect(null, actions)(
  reduxForm({
    validate,
    form: 'servicesForm',
    destroyOnUnmount: true
  })(ServicesForm));