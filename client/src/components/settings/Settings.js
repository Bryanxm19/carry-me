import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../header/Header';
import SettingsForm from './SettingsForm';

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
          this.renderSettingsContent()
        ]
    }
  }

  renderSettingsContent() {
    const { auth, history } = this.props;
    return (
      <div key="2" style={{ backgroundColor: '#314459', minHeight: '100vh', paddingTop: '50px' }}>
        <div className="container" style={{ paddingTop: '50px' }}>
          <SettingsForm initialValues={auth} history={history} />
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

export default connect(mapStateToProps)(Settings);
