import React from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
TimeAgo.locale(en)

const ServiceMessage = ({ position, message }) => {
  const timeAgo = new TimeAgo('en-US')
  let content = null
  if (position === "left") {
    content =  
      <div className="col-xs-12 text-left">
        <p style={{ marginBottom: '2px', opacity: 0.9 }}><em>{message.user.username}</em></p>
        <p style={{ fontSize: '16px', display: 'inline-block', padding: '5px', borderRadius: '10px', border: '1px solid black', margin: '0', maxWidth: '50%', wordWrap: 'break-word' }}>{message.body}</p>
        <p style={{ marginTop: '2px', opacity: 0.9 }}>{timeAgo.format(new Date(message.createdAt))}</p>
      </div>
  } else {
    content =
      <div className="col-xs-12 text-right">
        <p style={{ marginBottom: '2px', opacity: 0.9 }}><em>You</em></p>
        <p style={{ fontSize: '16px', display: 'inline-block', padding: '5px', borderRadius: '10px', margin: '0', backgroundColor: '#33cc33', color: 'white', maxWidth: '50%', wordWrap: 'break-word', textAlign: 'left' }}>{message.body}</p>
        <p style={{ marginTop: '2px', opacity: 0.9 }}>{ message.createdAt ? timeAgo.format(new Date(message.createdAt)) : "just now" }</p>
      </div>
  }

  return content
};

export default ServiceMessage;