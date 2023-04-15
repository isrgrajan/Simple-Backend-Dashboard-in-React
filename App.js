import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col } from 'reactstrap';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Company Name</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">
                <FontAwesomeIcon icon={faHome} /> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <FontAwesomeIcon icon={faUser} /> Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <FontAwesomeIcon icon={faCog} /> Settings
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <FontAwesomeIcon icon={faEnvelope} /> Messages
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Container fluid>
        <Row>
          <Col xs="12" className="main-content">
            <h1>Welcome to the React and Font Awesome UI</h1>
            <p>
              This is a sample UI created using React and Font Awesome. The left-side menu is created using the reactstrap library, and the icons are from Font Awesome.
            </p>
          </Col>
        </Row>
      </Container>
      <footer className="footer">
        <p>&copy; 2023 Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
