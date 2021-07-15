import React, {useState} from "react";
import {Nav, Navbar} from 'react-bootstrap';
import Modal from '../Modal'
import Registry from '../Registry'
import '../../App.css'
import Us from '../../image/Us.png'

const Index = () => {
    const [showRSVP, setRSVP] = useState(false);
    const [showOurStory, setOurStory] = useState(false);
    const rsvpClose = () => setRSVP(false);
    const OurStoryClose = () => setOurStory(false);

    return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"><h1 id="siteName">Wynn | Bernard Wedding</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => setRSVP(true)}>RSVP</Nav.Link>
            <Nav.Link href="https://www.babylist.com/baby-registry-stephanie-wynn" target="_blank">Registry</Nav.Link>
            <Nav.Link id="location">Location</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Modal showRSVP={showRSVP} rsvpClose={rsvpClose}/>
      <Registry showOurStory={showOurStory} OurStoryClose={OurStoryClose}/>
    </div>
  );
}

export default Index
