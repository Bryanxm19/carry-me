import _ from 'lodash';
import React, { Component } from 'react';

import ActiveServices from './ActiveServices';

class CarriesContainer extends Component {

  find(carryType) {
    const { carries, goals } = this.props.auth;
    if (carryType === "carries") {
      return carries
    }
    return goals
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