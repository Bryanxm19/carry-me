import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function renderMessage(props) {
  const { owner, request, service, handleStripeToken } = props
  if (owner) {
    if (!request.chargeId) {
      return notPaidOwnerMessage()
    }
  } else {
    if (!request.chargeId) {
      return notPaidGuestMessage(service, request, handleStripeToken)
    }
  }
}

function notPaidOwnerMessage() {
  return (
    <div>
      <div className="col-xs-12 text-left text-danger" style={{ fontSize: '16px' }}>
        <p><em>The other user has not paid yet. Do not continue with the carry until the user has paid. Please use this chat below to communicate with the other user to make this carry happen.</em></p>
      </div>
    </div>
  )
}

function notPaidGuestMessage(service, request, handleToken) {
  return (
    <div>
      <div className="col-xs-12 text-left text-danger" style={{ fontSize: '16px' }}>
        <p><em>Please use this chat below to communicate with the other user to make this carry happen. Once you agree on when this carry will take place, please pay by clicking the 'Pay' button below.</em></p>
      </div>
      <div className="col-xs-12">
        <p>
          <StripeCheckout
            name="Carry Me"
            amount={service.price * 100}
            token={token => handleToken(request._id, token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
          >
            <button className="btn btn-primary" style={{ fontSize: '20px', width: '30%', backgroundColor: '#314459', border: 'none' }}>
              Pay
            </button>
          </StripeCheckout>
        </p>
      </div>
    </div>
  )
}

const StatusMessage = (props) => {
  console.log(props)
  return (
    <div className="row" style={{ borderBottom: '2px solid #314459', paddingBottom: '10px' }}>
      { renderMessage(props) }
    </div>
  )
}

export default StatusMessage;