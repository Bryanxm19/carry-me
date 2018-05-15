import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';

class ServiceRequest extends Component {
  render() {
    const { request } = this.props
    return (
      <div className="row">
        <div className="col-xs-6 col-sm-8 col-md-8 col-lg-6 text-left">
          <p style={{ fontSize: '14px' }}><b>{request.requester.username}</b></p>
        </div>
        <div className="col-xs-2 text-left" style={{ paddingLeft: '5px' }}>
          <Glyphicon glyph="ok" />
        </div>
        <div className="col-xs-2 text-left" style={{ padding: 0 }}>
          <Glyphicon glyph="remove" />
        </div>
      </div>
    );
  }
}

export default ServiceRequest;