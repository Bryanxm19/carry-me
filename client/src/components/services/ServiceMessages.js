import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import io from "socket.io-client";

import ServiceMessage from './ServiceMessage';

class ServiceMessages extends Component {

  constructor(props){
    super(props);

    this.state = {
      message: '',
      messages: this.props.messages
    };
    this.socket = io('http://localhost:5000/');

    this.socket.on('RECEIVE_MESSAGE', (data) => {
      sendMessage(data)
    });

    const sendMessage = data => {
      this.props.sendMessage(data.request, data)
    }
  }

  componentDidMount() {
    this.props.fetchMessages(this.props.request._id)
    let listContainer = document.getElementById("message-list");
    listContainer.scrollTop = listContainer.scrollHeight;
  }

  componentDidUpdate() {
    let listContainer = document.getElementById("message-list");
    listContainer.scrollTop = listContainer.scrollHeight;
  }

  handleChange(e) {
    this.setState({ message: e.target.value })
  }

  sendMessage(e) {
    e.preventDefault();
    const { request, auth } = this.props
    const message = {
      body: this.state.message,
      request: request._id,
      user: auth
    }
    this.socket.emit('SEND_MESSAGE', message);
    this.setState({ message: '', messages: this.props.messages.push(message) });
  }

  renderMessages() {
    const { messages, auth } = this.props;
    if (messages.length) {
      return _.map(messages, (message, i) => {
        return <ServiceMessage key={i} message={message} position={ message.user._id === auth._id ? "right" : "left" } />
      })
    } else {
      return(
        <div className="col-xs-12 text-left">
          <p className="text-center">There are no messages currently. Start this conversation and plan out when this carry will take place before sending payments.</p>
        </div>
      )
    }
  }

  render() {
    return(
      <div className="row">
        <div id="message-list" style={{ overflowY: 'scroll', maxHeight: '300px', borderBottom: '2px solid #314459', paddingBottom: '10px' }}>
          {this.props.messages && this.renderMessages()}
        </div>
        <div className="col-xs-9 text-left" style={{ padding: '0', height: '50px', fontSize: '16px' }}>
          <input style={{ paddingLeft: '10px', width: '100%', height: '100%', border: 'none' }} type="text" placeholder="Type Message..." value={this.state.message} onChange={this.handleChange.bind(this)}/>
        </div>
        <div className="col-xs-3 text-center" style={{ padding: '0', height: '50px' }}>
          <button className="btn btn-primary" style={{ width: '100%', height: '100%', borderRadius: 0, fontSize: '18px' }} onClick={this.sendMessage.bind(this)}>Send</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ messages, auth }) {
  return { messages, auth }
}

export default connect(mapStateToProps, actions)(ServiceMessages);