import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import checkAuth from '../../utils/checkAuth';

import ServiceInfo from './ServiceInfo';
import ServiceRequests from './ServiceRequests';

class ServicesShow extends Component {

  componentWillMount() {
    const { match, history } = this.props

    this.props.fetchService(match.params.id, history)
  }

  renderServiceContent() {
    const { service } = this.props;
    return (
      <div key="2" style={{ backgroundColor: '#314459', minHeight: '100vh', paddingTop: '50px' }}>
        <div className="container" style={{ paddingTop: '50px', paddingBottom: '20px' }}>
          <div className="row">
            <ServiceInfo service={service} />
            <ServiceRequests service={service} />
          </div>
        </div>
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

function mapStateToProps({ service }) {
  return { service };
}

export default connect(mapStateToProps, actions)(ServicesShow);