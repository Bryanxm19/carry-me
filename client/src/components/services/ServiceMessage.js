import React from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'
TimeAgo.locale(en)

const ServiceMessage = (props) => {
  const timeAgo = new TimeAgo('en-US')
  const { position, message } = props;
  let content

  if (position === "left") {
    content =  
      <div className="col-xs-12 text-left">
        <p style={{ marginBottom: '2px', opacity: 0.9 }}><em>{message.user.username}</em></p>
        <p style={{ fontSize: '16px', display: 'inline-block', padding: '5px', borderRadius: '10px', border: '1px solid black', margin: '0' }}>{message.body}</p>
        <p style={{ marginTop: '2px', opacity: 0.9 }}>{timeAgo.format(message.createdAt)}</p>
      </div>
  } else {
    content =
      <div className="col-xs-12 text-right">
        <p style={{ marginBottom: '2px', opacity: 0.9 }}><em>You</em></p>
        <p style={{ fontSize: '16px', display: 'inline-block', padding: '5px', borderRadius: '10px', margin: '0', backgroundColor: '#33cc33', color: 'white' }}>{message.body}</p>
        <p style={{ marginTop: '2px', opacity: 0.9 }}>{timeAgo.format(message.createdAt)}</p>
      </div>
  }

  return content
};

export default ServiceMessage;