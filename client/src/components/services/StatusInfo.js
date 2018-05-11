import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class StatusInfo extends Component {

  checkServiceType(service) {
    if (service.type === "goals") {
      return this.renderGoalInfo(service)
    } else {

    }
  }

  renderGoalInfo(service) {
    const { auth } = this.props
    var content
    // check if user has merchant id
    if (!auth) {
      content = this.merchantSignUpMessage()
    }
    const id = service.requests.find(req => {
      return auth.sentRequests.includes(req._id)
    })

    if (!id) {
      console.log(auth.sentRequests)
      content = this.sendRequestMessage()
    }

    return (
      <div className="col-xs-12 text-center">
        {content}
      </div>
    );
  }

  merchantSignUpMessage() {
    return <p style={{ fontSize: '16px' }}>You must first sign up to become a carrier before helping people finish their goals. You can register in your <Link to="/settings">Settings Page</Link></p>
  }

  sendRequestMessage() {
    return <p style={{ fontSize: '16px' }}>Request to Carry</p>
  }

  render() {
    const { service } = this.props
    return service && this.checkServiceType(service)
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps, null)(StatusInfo);