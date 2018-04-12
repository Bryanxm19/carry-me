import React, { Component } from 'react';
import { FormGroup, FormControl, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { BUTTON } from '../styledComponents/Header';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchText: ''
    }
  }

  onChange(e) {
    this.setState({searchText: e.target.value});
  }
  render() {
    return (
      <div>
        <FormGroup>
          <FormControl name="search" type="text" placeholder="Search" onChange={this.onChange.bind(this)} />
        </FormGroup>
        <BUTTON type="submit"><Glyphicon glyph="search" onClick={() => console.log([this.state, this.props])}/></BUTTON>
      </div>
    );
  }
};

export default connect(null, actions)(Search);