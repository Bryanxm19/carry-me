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