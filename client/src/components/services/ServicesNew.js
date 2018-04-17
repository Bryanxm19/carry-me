import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../header/Header';
import ServicesForm from './ServicesForm';
import { DIV } from '../styledComponents/Services';

class Settings extends Component {
  checkAuth() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <Redirect to='/'/>;
      default:
        return [
          <Header key="1" />,
          this.renderServicesContent()
        ]
    }
  }

  renderServicesContent() {
    const { state } = this.props.history.location;

    return (
      <div key="2" style={{ backgroundColor: '#314459', minHeight: '100vh', paddingTop: '50px' }}>
        <DIV className="container" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
          <ServicesForm serviceType={state ? state.type : 'carries'} />
        </DIV>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.checkAuth()}
      </div>
    );
  }

}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Settings);
