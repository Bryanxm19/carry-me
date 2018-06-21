import React from 'react';

import { SectionDiv } from '../styledComponents/Settings';

function checkConnectedToStripe(user) {
  let header, content, link

  if (user.stripeID) {
    header = 'Your Carrier Account'
    content = 'Click below to login with the Stripe account you connected to your Carry Me account. Here you can see incoming payments, as well as set up payouts to a bank account or valid debit/credit card.'
    link = <a style={{ color: 'white' }} target="_blank" href='https://dashboard.stripe.com/dashboard'>Connect to Stripe</a>
  } else {
    header = 'Become A Carrier Today!'
    content = 'Click below to connect to an existing Stripe account or set up a new account. Stripe is a third-party service where your funds will be sent to and able to be paid out.'
    link = <a style={{ color: 'white' }} href={"https://connect.stripe.com/oauth/authorize?response_type=code&client_id=" + process.env.REACT_APP_STRIPE_CLIENT_ID + "&scope=read_write"}>Connect to Stripe</a>
  }

  return renderContent(header, content, link)
}

function renderContent(header, content, link) {
  return (
    <div className="row text-center" style={{ marginTop: '30px' }}>
      <SectionDiv className="col-xs-offset-2 col-xs-8">
        <h2>{header}</h2>
      </SectionDiv>
      <SectionDiv className="col-xs-offset-2 col-xs-8" style={{ fontSize: '16px' }}>
        <p>{content}</p>
      </SectionDiv>
      <SectionDiv className="col-xs-offset-2 col-xs-8" style={{ fontSize: '16px' }}>
        <button className="btn btn-primary btn-lg" style={{ marginBottom: '10px', backgroundColor: '#314459', border: 'none' }}>
          {link}
        </button>
      </SectionDiv>
    </div>
  )
}

const CarrierSection = props => {
  return checkConnectedToStripe(props.auth)
}

export default CarrierSection;