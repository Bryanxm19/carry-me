import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import checkAuth from '../../utils/checkAuth';

import { DIV } from '../styledComponents/Services';

class ServicesShow extends Component {

  componentWillMount() {
    const { match, history } = this.props

    this.props.fetchService(match.params.id, history)
  }

  renderServiceContent() {
    return (
      <div key="2" style={{ backgroundColor: '#314459', minHeight: '100vh', paddingTop: '50px' }}>
        <DIV className="container" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
          <div className="row">
          </div>
        </DIV>
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