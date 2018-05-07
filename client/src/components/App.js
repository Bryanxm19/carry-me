import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Landing from './Landing';
import Dashboard from './dashboard/Dashboard';
import Settings from './settings/Settings';
import ServicesNew from './services/ServicesNew';
import ServicesShow from './services/ServicesShow';

class App extends Component {

  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/services/new" component={ServicesNew} />
          <Route path="/services/:id" component={ServicesShow} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);