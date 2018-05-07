import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/header/Header';

export default (auth, cb) => {
  switch (auth) {
    case null:
      return;
    case false:
      return <Redirect to='/'/>;
    default:
      return [
        <Header key="1" />,
        cb(),
      ]
  }
};