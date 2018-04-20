import _ from 'lodash';
import React, { Component } from 'react';

import ActiveServices from './ActiveServices';

class CarriesContainer extends Component {

  find(carryType) {
    const { carries } = this.props.auth;

    return _.filter(carries, ({ type }) => {
      return carryType === type
    });
  }

  render() {
    return (
      <div className="row">
        <ActiveServices type="Carries" services={this.find('carries')} />
        <div className="col-lg-2"></div>
        <ActiveServices type="Goals" services={this.find('goals')} />
      </div>
    );
  }
}

export default CarriesContainer;