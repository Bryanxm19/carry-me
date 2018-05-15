import React, { Component } from 'react';

import ServiceRequest from './ServiceRequest';

class ServiceRequests extends Component {

  checkServiceType(service) {
    if (service.type === "goals") {
      return this.renderGoalRequests(service.requests)
    } else {

    }
  }

  renderGoalRequests(requests) {
    if (requests.length) {
      return this.renderRequests(requests)
    } else {
      return <p style={{ fontSize: '16px' }}>Currently, this goal has no requests. You will be notified when someone requests to carry you.</p>
    }
  }

  renderRequests(requests) {
    return requests.map((req, i) => {
      if (!req.accepted) {
        return (
          <div className="col-md-6" key={i} style={{ padding: '5px' }}>
            <ServiceRequest request={req} />
          </div>
        )
      }
    })
  }

  render() {
    const { service } = this.props
    return (
      <div className="col-xs-12 text-center">
        {service && this.checkServiceType(service)}
      </div>
    )
  }
}

export default ServiceRequests;