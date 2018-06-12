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
        message: ''
    };
    this.socket = io('localhost:5000');

    this.socket.on('RECEIVE_MESSAGE', function(data){
      sendMessage(data)
    });

    const sendMessage = data => {
      this.props.sendMessage(data.requestId, { body: data.body })
    }
  }

  componentWillMount() {
    this.props.fetchMessages(this.props.request._id)
  }

  componentDidMount() {
    let listContainer = document.getElementById("message-list");
    listContainer.scrollTop = listContainer.scrollHeight;
  }

  handleChange(e) {
    this.setState({ message: e.target.value })
  }

  sendMessage(e) {
    e.preventDefault();
    this.socket.emit('SEND_MESSAGE', {
      body: this.state.message,
      requestId: this.props.request._id
    });
    this.setState({message: ''});
  }

  renderMessages() {
    const { messages, auth } = this.props;
    console.log(messages)
    _.forEach(messages.messages, message => {
      <ServiceMessage message={message} position={ message.user === auth._id ? "right" : "left" } />
    })
  }

  render() {
    return(
      <div className="row">
        <div id="message-list" style={{ overflowY: 'scroll', maxHeight: '300px', borderBottom: '2px solid #314459' }}>
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