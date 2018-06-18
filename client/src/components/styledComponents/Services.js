import styled from 'styled-components';

export const DIV = styled.div`
  @media (min-width: 992px) {
    width: 55%;
  }
`

export const LABELDIV = styled.div`
  @media (max-width: 767px) {
    text-align: center !important;
  }
`

export const LI = styled.li`
  @media (max-width: 767px) and (min-width: 397px) {
    padding-left: 9%;
  }

  @media (max-width: 1200px) and (min-width: 992px) {
    padding-left: 0;
  }
`

export const ITEM = styled.div`
  cursor: pointer;

  &:hover > .service-item-overlay {
    background-color: #000;
    opacity: 0.7;
  }
`

export const ItemDiv = styled.div`
  @media (max-width: 500px) {
    width: 50%;
  }
`

export const InfoFieldDiv = styled.div`
  font-size: 18px;
`

export const InfoFieldP = styled.p`
 font-weight: bold;
`

export const InfoFieldSpan = styled.span`
  margin-left: 3px;
  font-weight: normal;
`

export const RequestCarryButton = styled.button`
  background-color: #314459;
  border: none;
  margin-bottom: 10px;
  font-size: 18px;
  color: white;
  width: 70%;

  &:hover {
    color: white;
    opacity: 0.9;
  }
`

export const DisabledRequestButton = styled.button`
  background-color: #314459;
  opacity: 0.7;
  color: white;
  width: 70%;
  margin-bottom: 10px;

  &:hover {
    color: white;
  }
`