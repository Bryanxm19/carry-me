import React, { Component } from 'react';

class ServicesShow extends Component {
  render() {
    console.log(this.props.match.params.id)
    return (
      <h1>Test</h1>
    );
  }
}

export default ServicesShow;