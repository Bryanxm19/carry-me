import React, { Component } from 'react';

import ActiveServices from './ActiveServices';

class CarriesContainer extends Component {
  render() {
    const { goals } = this.props
    return (
      <div className="row">
        <ActiveServices type="Goals" services={goals} />
        <div className="col-md-2"></div>
        <ActiveServices type="Carries" services={[]} />
      </div>
    );
  }
}

export default CarriesContainer;