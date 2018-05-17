import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Glyphicon } from 'react-bootstrap';

class ServiceRequest extends Component {

  handleRequestAccept() {
    const { request, history, acceptServiceRequest } = this.props

    acceptServiceRequest(request, history)
  }

  handleRequestDecline() {
    const { request, history, declineServiceRequest } = this.props

    declineServiceRequest(request, history)
  }

  render() {
    const { request } = this.props
    return (
      <div className="row">
        <div className="col-xs-6 col-sm-8 col-md-8 col-lg-6 text-left">
          <p style={{ fontSize: '14px' }}><b>{request.requester.username}</b></p>
        </div>
        <div className="col-xs-2 text-left" style={{ paddingLeft: '5px' }}>
          <button onClick={this.handleRequestAccept.bind(this)}>
            <Glyphicon glyph="ok" />
          </button>
        </div>
        <div className="col-xs-2 text-left" style={{ padding: 0 }}>
          <button onClick={this.handleRequestDecline.bind(this)}>
            <Glyphicon glyph="remove" />
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(ServiceRequest);