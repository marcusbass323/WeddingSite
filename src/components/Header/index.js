import React, {useState} from "react";
import {Nav, Navbar} from 'react-bootstrap';
import Modal from '../Modal';
import OurStory from '../OurStory';
import Itinerary from '../Itinerary';
import '../../App.css';

const Index = () => {
    const [showRSVP, setRSVP] = useState(false);
    const [showOurStory, setOurStory] = useState(false);
    const [showItinerary, setItinerary] = useState(false);
    const rsvpClose = () => setRSVP(false);
    const ItineraryClose = () => setItinerary(false)
    const OurStoryClose = () => setOurStory(false);

    return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"><h1 id="siteName">Wynn | Bernard Wedding</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => setOurStory(true)}>Our Story</Nav.Link>
            <Nav.Link onClick={() => setRSVP(true)}>RSVP</Nav.Link>
            <Nav.Link href="https://www.babylist.com/baby-registry-stephanie-wynn" target="_blank">Baby Registry</Nav.Link>
            <Nav.Link onClick={() => setItinerary(true)}>Locations & Times</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Itinerary showItinerary={showItinerary} ItineraryClose={ItineraryClose}/>
      <Modal showRSVP={showRSVP} rsvpClose={rsvpClose}/>
      <OurStory showOurStory={showOurStory} OurStoryClose={OurStoryClose}/>
    </div>
  );
}

export default Index
