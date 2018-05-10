import React, { Component } from 'react';

class ServiceRequests extends Component {
  render() {
    return (
      <div className="col-sm-offset-1 col-lg-7 col-md-6 col-sm-5 col-xs-12" style={{ backgroundColor: 'white', borderRadius: '.25rem' }}>
        <div className="row" style={{ borderBottom: '2px solid #314459' }}>
          <div className="col-xs-12 text-center">
            <h1 style={{ marginTop: '10px' }}>Requests</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceRequests;