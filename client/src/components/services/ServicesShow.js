import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import checkAuth from '../../utils/checkAuth';
import { ContainerDiv } from '../styledComponents/Dashboard';

import ServiceInfo from './ServiceInfo';
import ServiceStatus from './ServiceStatus';

class ServicesShow extends Component {

  componentWillMount() {
    const { match, history } = this.props

    this.props.fetchService(match.params.id, history)
  }

  checkServiceOwnership() {
    const { auth, service } = this.props
    return service && auth._id === service.creator ? "owner" : "guest"
  }

  renderServiceContent() {
    const { service, history } = this.props;
    return (
      <div key="2" style={{ backgroundColor: '#314459', minHeight: '100vh', paddingTop: '50px' }}>
        <ContainerDiv className="container" style={{ paddingTop: '50px', paddingBottom: '20px' }}>
          <div className="row">
            <ServiceInfo service={service} />
            <ServiceStatus service={service} ownership={this.checkServiceOwnership()} history={history} />
          </div>
        </ContainerDiv>
      </div>
    );
  }

  render() {
    return (
      <div>
        {checkAuth(this.props.auth, this.renderServiceContent.bind(this))}
      </div>
    );
  }
}

function mapStateToProps({ service, auth }) {
  return { service, auth };
}

export default connect(mapStateToProps, actions)(ServicesShow);