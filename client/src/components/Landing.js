import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import bg from '../images/background.jpg';
import 
{
  A,
  DIV1,
  IMG,
  H1,
  P
} from './styledComponents/Landing';

class Landing extends Component {

  renderContent() {
    return (
      <div>
        <A href="/auth/google">Sign In</A>
        <DIV1 className="text-center">
          <IMG src={bg} alt=""></IMG>
          <div className="container">
            <H1>WELCOME TO CARRY ME</H1>
            <P>The ultimate network for gamers looking to help others accomplish goals while earning some money</P>
          </div>
        </DIV1>
      </div>
    );
  }

  checkAuth() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return this.renderContent();
      default:
        return <Redirect to='/dashboard'/>;
    }
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

export default connect(mapStateToProps)(Landing);
