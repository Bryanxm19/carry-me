import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../Header/Header';

class Settings extends Component {
  checkAuth() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <Redirect to='/'/>;
      default:
        return this.renderSettingsContent()
    }
  }

  renderSettingsContent() {
    return ([
      <Header key="1" />,
      <div key="2" style={{ backgroundColor: '#314459', height: '2000px', paddingTop: '50px' }}>
        <div className="container">
          <h1>Settings</h1>
        </div>
      </div>
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

export default connect(mapStateToProps)(Settings);