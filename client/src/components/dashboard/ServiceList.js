import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ServiceList extends Component {
  checkServices() {
    const { services, type } = this.props;

    if (services.length) {

    } else {
      return <p className="text-center" style={{ fontSize: '18px' }}>No Active {type}. You can add a new one <Link to={{ pathname: '/services/new', state: { type: type.toString().toLowerCase() } }}>here</Link></p> 
    }
  }

  render() {
    return (
      <div>
        {this.checkServices()}
      </div>
    );
  }
}

export default ServiceList;