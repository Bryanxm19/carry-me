import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon } from 'react-bootstrap';

import ServiceList from './ServiceList';

class ActiveServices extends Component {
  render() {
    return (
      <div className="col-md-5" style={{ backgroundColor: 'white', borderRadius: '.25rem', marginBottom: '10px' }}>
        <div className="row" style={{ borderBottom: '2px solid #314459' }}>
          <div className="col-xs-8">
            <h1>Active {this.props.type}</h1>
          </div>
          <div className="col-xs-4" style={{ marginTop: '25px' }}>
            <div className="pull-right">
              <Link to={{ pathname: '/services/new', state: { type: this.props.type.toString().toLowerCase() } }}>
                <Glyphicon glyph="plus-sign" style={{ fontSize: '30px', color: '#314459' }} />
              </Link>
            </div>
          </div>
        </div>
        <ServiceList {...this.props} />
      </div>
    );
  }
}

export default ActiveServices;