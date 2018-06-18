import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import checkAuth from '../../utils/checkAuth';
import { ContainerDiv } from '../styledComponents/Dashboard';

import CarriesContainer from './CarriesContainer';

class Dashboard extends Component {

  componentWillMount() {
    this.props.fetchUserGoals(6)
  }

  renderDashboardContent() {
    return (
      <div key="2" style={{ backgroundColor: '#314459', minHeight: '100vh', paddingTop: '50px' }}>
        <ContainerDiv className="container" style={{ paddingTop: '50px' }}>
          <CarriesContainer {...this.props} />
        </ContainerDiv>
      </div>
    );
  }

  render() {
    return (
      <div>
        {checkAuth(this.props.auth, this.renderDashboardContent.bind(this))}
      </div>
    );
  }

}

function mapStateToProps({ auth, goals }) {
  return { auth, goals };
}

export default connect(mapStateToProps, actions)(Dashboard);