import _ from 'lodash';
import React, { Component } from 'react';

import { LABELDIV } from '../styledComponents/Services';

class ServicesField extends Component {

  changeType(e) {
    this.props.changeType(e.target.value)
  }

  renderInput(type) {
    const { input, placeholder, serviceType } = this.props
    input.placeholder = typeof placeholder === 'string' ? placeholder : placeholder[serviceType]
    switch (type) {
      case 'select':
        const { options } = this.props
        input.value = serviceType
        input.onChange = this.changeType.bind(this)
        return <select {...input} style={{ marginBottom: '5px', width: '75%' }}>{this.renderSelectOptions(options)}</select>;
      case 'textarea':
        input.rows = "3"
        return <textarea {...input} style={{ marginBottom: '5px', width: '75%', resize: 'none' }}></textarea>
      default:
        return <input {...input} style={{ marginBottom: '5px', width: '75%' }} />
    }
  }

  renderSelectOptions(options) {

    const labels = {
      "carries": "Help carry other gamers",
      "goals": "Get carried by another gamer"
    }

    return _.map(options, (option, i) => {
      return <option key={i} value={option}>{labels[option]}</option>
    });
  }

  render() {
    const { label, type, meta: { error, touched } } = this.props;

    return (
      <div className="col-xs-12" style={{ marginTop: '10px' }}>
        <div className="row">
          <div className="col-sm-2"></div>
          <LABELDIV className="col-sm-2 col-xs-12" style={{ textAlign: 'left' }}>
            <label style={{ fontSize: '16px' }}>{label}</label>
          </LABELDIV>
          <div className="col-sm-6 col-xs-12">
            {this.renderInput(type)}
          </div>
          <div className="col-sm-2"></div>
          <div className="text-danger col-sm-10 col-sm-offset-2" style={{ marginBottom: '20px' }}>
            {touched && error}
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesField;