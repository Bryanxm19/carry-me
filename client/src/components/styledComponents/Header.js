import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavItem, Navbar, Button } from 'react-bootstrap';

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
export const NAVBAR = styled(Navbar)`
  border: none;
  border-radius: 0;
  background-color: #14282d;
  margin-bottom: 0;
`

export const LINK = styled(Link)`
  color: white !important;
`

export const FORM = styled(Navbar.Form)`
  border: none;
  box-shadow: none;
`

export const BUTTON = styled(Button)`
  margin-left: 10px;

  @media (max-width: 767px) {
    margin-left: 0;
  }
`
