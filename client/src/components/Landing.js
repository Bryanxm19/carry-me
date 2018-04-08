import React from 'react';
import styled, { css } from 'styled-components';
import bg from '../images/background.jpg';

const textStyles = css`
  color: white;
  text-shadow: 1px 1px #000;
`

const H1 = styled.h1`
  ${textStyles}
  font-size: 5rem;
`

const DIV1 = styled.div`
  padding-top: 30vh;

  @media (max-width: 320px) {
    padding-top: 20vh;
  }
`

const IMG = styled.img`
  position: fixed; 
  top: 0; 
  left: 0; 
  z-index: -1;
  max-width: 100%;
  min-height: 100%;
  height: auto;
`

const P = styled.p`
  ${textStyles}
  font-size: 2.5rem;
`

const A = styled.a`
  ${textStyles}
  float: right;
  padding: 10px 20px 0 0;
  font-size: 18px;

  &:hover {
    ${textStyles}
    font-size: 19px;
  }
`

const Landing = () => {
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

export default Landing;