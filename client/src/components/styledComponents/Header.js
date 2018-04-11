import styled from 'styled-components';
import { NavItem } from 'react-bootstrap';

export const NAVITEM = styled(NavItem)`
  & > a {
    color: white !important;
  }
  & > a:hover {
    color: white !important;
    text-decoration: underline !important;
    font-size: 105%;
  }
`