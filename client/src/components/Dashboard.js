import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header/Header';

class Dashboard extends Component {

  checkAuth() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <Redirect to='/'/>;
      default:
        return [
          <Header key="1" />,
          this.renderDashboardContent()
        ]
    }
  }

  renderDashboardContent() {
    return (
      <div key="2" style={{ backgroundColor: '#314459', height: '2000px', paddingTop: '50px' }}>
        <div className="container">
          <h1>Dashboard</h1>
        </div>
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

export default connect(mapStateToProps)(Dashboard);