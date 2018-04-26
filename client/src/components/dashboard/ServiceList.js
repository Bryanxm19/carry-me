import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ServiceItem from './ServiceItem';

class ServiceList extends Component {
  checkServices() {
    const { services, type } = this.props;

    if (services.length) {
      return this.renderServices(services)
    } else {
      return <p className="text-center" style={{ fontSize: '18px', marginTop: '10px' }}>No Active {type}. You can add a new one <Link to={{ pathname: '/services/new', state: { type: type.toString().toLowerCase() } }}>here</Link></p> 
    }
  }

  renderServices(services) {
    return _.map(services, (service, i) => {
      return <ServiceItem key={i} service={service} />
    });
  }

  render() {
    return (
      <div className="row">
        {this.checkServices()}
      </div>
    );
  }
}

export default ServiceList;