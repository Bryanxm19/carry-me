import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, FormGroup, FormControl, Button } from 'react-bootstrap';

import { NAVITEM } from './styledComponents/Header';

const Header = () => {
  return (
    <Navbar collapseOnSelect style={{ border: 'none', borderRadius: 0, backgroundColor: '#14282d' }}>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/dashboard" style={{ color: 'white' }}>Home</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Form pullLeft style={{ border: 'none', boxShadow: 'none' }}>
          <FormGroup>
            <FormControl type="text" placeholder="Search" />
          </FormGroup>
          <Button type="submit" style={{ marginLeft: '10px' }}>Search</Button>
        </Navbar.Form>
        <Nav pullRight>
          <NAVITEM eventKey={1} className="foo">
            Settings
          </NAVITEM>
          <NAVITEM eventKey={2} href="/api/logout">
            Log Out
          </NAVITEM>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;