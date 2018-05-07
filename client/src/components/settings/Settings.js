import React, { Component } from 'react';
import { connect } from 'react-redux';
import checkAuth from '../../utils/checkAuth';

import SettingsForm from './SettingsForm';

class Settings extends Component {

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
        {checkAuth(this.props.auth, this.renderSettingsContent.bind(this))}
      </div>
    );
  }

}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Settings);
