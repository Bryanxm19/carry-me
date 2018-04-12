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
        return this.renderDashboardContent()
    }
  }

  renderDashboardContent() {
    return ([
      <Header key="1" />,
      <h1 key="2">Dashboard</h1>
    ]);
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