import React from "react";
import { Modal } from "react-bootstrap";
import "./index.css";
import Form from '../Form'

export default function index({ showRSVP, rsvpClose }) {
  return (
    <div>
      <Modal show={showRSVP} onHide={rsvpClose} centered>
        <Modal.Header>
          <Modal.Title id="modalTitle">RSVP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form rsvpClose={rsvpClose}/>
        </Modal.Body>
      </Modal>
    </div>
  );
}
