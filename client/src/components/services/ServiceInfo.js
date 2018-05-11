import React, { Component } from 'react';

import { InfoFieldDiv, InfoFieldP, InfoFieldSpan } from '../styledComponents/Services';

class ServiceInfo extends Component {

  renderTitleLabel(service) {
    return service.type === "goals" ? "The Goal" : "Carry Being Offered"
  }

  statusTextColor(status) {
    switch (status) {
      case "Accepting Requests":
        return 'green'
      default:
        break
    }
  }

  render() {
    const { service } = this.props;
    return (
      <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12" style={{ backgroundColor: 'white', borderRadius: '.25rem', marginBottom: '10px' }}>
        <div className="row" style={{ borderBottom: '2px solid #314459' }}>
          <div className="col-xs-12 text-center">
            <h1 style={{ marginTop: '10px' }}>Service Info</h1>
          </div>
        </div>
        <div className="row" style={{ marginTop: '10px' }}>
          <InfoFieldDiv className="col-xs-12">
            <InfoFieldP>{ service && this.renderTitleLabel(service) }: <InfoFieldSpan>{ service && service.title }</InfoFieldSpan></InfoFieldP>
          </InfoFieldDiv>
          <InfoFieldDiv className="col-xs-12">
            <InfoFieldP>Description: <InfoFieldSpan>{ service && service.description }</InfoFieldSpan></InfoFieldP>
          </InfoFieldDiv>
          <InfoFieldDiv className="col-xs-12">
            <InfoFieldP>Game: <InfoFieldSpan>{ service && service.game }</InfoFieldSpan></InfoFieldP>
          </InfoFieldDiv>
          <InfoFieldDiv className="col-xs-12">
            <InfoFieldP>Platform: <InfoFieldSpan>{ service && service.platform }</InfoFieldSpan></InfoFieldP>
          </InfoFieldDiv>
          <InfoFieldDiv className="col-xs-12">
            <InfoFieldP>Price: <InfoFieldSpan>${ service && service.price }</InfoFieldSpan></InfoFieldP>
          </InfoFieldDiv>
          <InfoFieldDiv className="col-xs-12">
            <InfoFieldP>Status: <InfoFieldSpan style={{ color: service && this.statusTextColor(service.status)}}>{ service && service.status }</InfoFieldSpan></InfoFieldP>
          </InfoFieldDiv>
        </div>
      </div>
    );
  }
}

export default ServiceInfo;