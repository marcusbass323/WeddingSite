import React, {useState} from "react";
import {Nav, Navbar} from 'react-bootstrap';
import Modal from '../Modal'
import Registry from '../Registry'
import '../../App.css'

const Index = () => {
    const [showRSVP, setRSVP] = useState(false);
    const [showRegistry, setRegistry] = useState(false);
    const rsvpClose = () => setRSVP(false);
    const registryClose = () => setRegistry(false);

    console.log(showRegistry)
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"><h1>Wynn | Bernard Wedding</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => setRSVP(true)}>RSVP</Nav.Link>
            <Nav.Link >Our Story</Nav.Link>
            <Nav.Link id="location">Location</Nav.Link>
            <Nav.Link onClick={() => setRegistry(true)}>Registry</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Modal showRSVP={showRSVP} rsvpClose={rsvpClose}/>
      <Registry showRegistry={showRegistry} registryClose={registryClose}/>
    </div>
  );
}

export default Index
