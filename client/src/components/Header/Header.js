import React from 'react';
import { Navbar, Nav, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import 
{ 
  NAVITEM,
  NAVBAR,
  LINK,
  FORM
} from '../styledComponents/Header';
import Search from './Search';

const Header = () => {
  return (
    <NAVBAR collapseOnSelect fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <LINK to="/dashboard">Home</LINK>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <FORM pullLeft>
          <Search />
        </FORM>
        <Nav pullRight>
          <NAVITEM>
            <Glyphicon glyph="envelope" />
          </NAVITEM>
          <LinkContainer to="/settings" activeClassName="">
            <NAVITEM href="/settings">
              Settings
            </NAVITEM>
          </LinkContainer>
          <NAVITEM href="/api/logout">
            Log Out
          </NAVITEM>
        </Nav>
      </Navbar.Collapse>
    </NAVBAR>
  );
};

export default Header;