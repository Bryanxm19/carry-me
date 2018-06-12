import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import ServiceMessages from './ServiceMessages';

import { RequestCarryButton, DisabledRequestButton } from '../styledComponents/Services';

class StatusInfo extends Component {

  handleRequestClick(service) {
    const obj = this
    obj.props.sendServiceRequest(service, obj.props.history)
  }

  checkServiceType(service) {
    if (service.type === "goals") {
      return this.renderGoalInfo(service)
    } else {

    }
  }

  renderGoalInfo(service) {
    const { auth } = this.props
    var content
    const request = service.requests.find(req => {
      return req.requester._id === auth._id
    })
    
    if (request) {
      if (request.accepted) {
        content = <ServiceMessages owner={false} request={request} />
      } else {
        content = this.requestSentMessage()
      }
    }
    else if (service.status !== "Accepting Requests") {
      content = <p style={{ fontSize: '16px', color: 'red' }}>I'm sorry, this goal is no longer accepting requests</p>
    }
    // check if user has merchant id
    else if (!auth) {
      content = this.merchantSignUpMessage()
    } else if (!request) {
      content = this.sendRequestMessage(service)
    }

    return (
      <div className="col-xs-12 text-center">
        { content }
      </div>
    );
  }

  merchantSignUpMessage() {
    return <p style={{ fontSize: '16px' }}>You must first sign up to become a carrier before helping people finish their goals. You can register in your <Link to="/settings">Settings Page</Link></p>
  }

  sendRequestMessage(service) {
    return (
      <RequestCarryButton className="btn btn-lg" onClick={() => this.handleRequestClick(service)}>
        Request to Carry
      </RequestCarryButton>
    )
  }

  requestSentMessage() {
    return <DisabledRequestButton className="btn btn-lg" disabled>Request Sent</DisabledRequestButton>
  }

  render() {
    const { service } = this.props
    return service && this.checkServiceType(service)
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps, actions)(StatusInfo);