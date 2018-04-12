import React from 'react';
import { Navbar, Nav, FormGroup, FormControl, Glyphicon } from 'react-bootstrap';

import { NAVITEM, NAVBAR, LINK, FORM, BUTTON } from './styledComponents/Header';

const Header = () => {
  return (
    <NAVBAR collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <LINK to="/dashboard">Home</LINK>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <FORM pullLeft>
          <FormGroup>
            <FormControl type="text" placeholder="Search" />
          </FormGroup>
          <BUTTON type="submit"><Glyphicon glyph="search" /></BUTTON>
        </FORM>
        <Nav pullRight>
          <NAVITEM eventKey={1}>
            <Glyphicon glyph="envelope" />
          </NAVITEM>
          <NAVITEM eventKey={2}>
            Settings
          </NAVITEM>
          <NAVITEM eventKey={3} href="/api/logout">
            Log Out
          </NAVITEM>
        </Nav>
      </Navbar.Collapse>
    </NAVBAR>
  );
};

export default Header;