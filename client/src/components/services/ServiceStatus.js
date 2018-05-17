import React, { Component } from 'react';

import StatusInfo from './StatusInfo';
import ServiceRequests from './ServiceRequests';

class ServiceStatus extends Component {

  renderHeaderText() {
    return this.props.ownership === "owner" ? "Requests" : "Status"
  }

  renderContent() {
    const { service, ownership, history } = this.props
    if (service && ownership === "owner") {
      return <ServiceRequests service={service} history={history} />
    } else if (service && ownership === "guest") {
      return <StatusInfo service={service} history={history} />
    }
  }

  render() {
    return (
      <div className="col-sm-offset-1 col-lg-7 col-md-6 col-sm-5 col-xs-12" style={{ backgroundColor: 'white', borderRadius: '.25rem' }}>
        <div className="row" style={{ borderBottom: '2px solid #314459' }}>
          <div className="col-xs-12 text-center">
            <h1 style={{ marginTop: '10px' }}>{this.renderHeaderText()}</h1>
          </div>
        </div>
        <div className="row" style={{ marginTop: '10px' }}>
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

export default ServiceStatus;