import styled, { css } from 'styled-components';

const textStyles = css`
  color: white;
  text-shadow: 1px 1px #000;
`

export const H1 = styled.h1`
  ${textStyles}
  font-size: 5rem;
`

export const DIV1 = styled.div`
  padding-top: 30vh;

  @media (max-width: 320px) {
    padding-top: 20vh;
  }
`

export const IMG = styled.img`
  position: fixed; 
  top: 0; 
  left: 0; 
  z-index: -1;
  max-width: 100%;
  min-height: 100%;
  height: auto;
`

export const P = styled.p`
  ${textStyles}
  font-size: 2.5rem;
`

export const A = styled.a`
  ${textStyles}
  float: right;
  padding: 10px 20px 0 0;
  font-size: 18px;

  &:hover {
    ${textStyles}
    font-size: 19px;
  }
`