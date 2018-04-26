import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Header from '../header/Header';
import CarriesContainer from './CarriesContainer';

class Dashboard extends Component {

  componentWillMount() {
    this.props.fetchUserGoals(6)
  }

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
      <div key="2" style={{ backgroundColor: '#314459', minHeight: '100vh', paddingTop: '50px' }}>
        <div className="container" style={{ paddingTop: '50px' }}>
          <CarriesContainer {...this.props} />
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

function mapStateToProps({ auth, goals }) {
  return { auth, goals };
}

export default connect(mapStateToProps, actions)(Dashboard);