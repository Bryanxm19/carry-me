import React, { Component } from 'react';
import { connect } from 'react-redux';
import checkAuth from '../../utils/checkAuth';

import ServicesForm from './ServicesForm';
import { DIV } from '../styledComponents/Services';

class Settings extends Component {

  renderServicesContent() {
    const { state } = this.props.history.location;

    return (
      <div key="2" style={{ backgroundColor: '#314459', minHeight: '100vh', paddingTop: '50px' }}>
        <DIV className="container" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
          <ServicesForm serviceType={state ? state.type : 'carries'} history={this.props.history} />
        </DIV>
      </div>
    );
  }

  render() {
    return (
      <div>
        {checkAuth(this.props.auth, this.renderServicesContent.bind(this))}
      </div>
    );
  }

}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Settings);
