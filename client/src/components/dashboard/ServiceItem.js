import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ITEM } from '../styledComponents/Services';

class ServiceItem extends Component {

  state = { hovered: false }

  handleMouseHover() {
    this.setState({ hovered: !this.state.hovered })
  }

  renderContent() {
    if (this.state.hovered) {
      const { service } = this.props;
      return (
        <div className="text-center service-item-overlay" style={{ position: 'absolute', top: 0, bottom: '20px', left: '15px', right: '15px', borderRadius: '4px' }}>
          <h3 style={{ color: 'white', opacity: 1, marginTop: '40px' }}>{service.title} for ${service.price}</h3>
        </div>
      )
    }
  }

  render() {
    const { service } = this.props;
    return (
      <Link to={"/services/" + service._id}>
        <div className="col-xs-6 col-sm-4 col-md-6" style={{ marginTop: '10px' }}>
          <ITEM className="thumbnail" style={{ backgroundImage: `url(${service.imageURL})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', overflow: 'hidden', height: '150px' }} onMouseEnter={this.handleMouseHover.bind(this)} onMouseLeave={this.handleMouseHover.bind(this)}>
            {this.renderContent()}
          </ITEM>
        </div>
      </Link>
    )
  }
};

export default ServiceItem;