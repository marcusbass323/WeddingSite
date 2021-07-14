import React from "react";
import { Modal } from "react-bootstrap";
import "./index.css";
import Form from '../Form'
import CloseIcon from '@material-ui/icons/Close';

export default function index({ showRSVP, rsvpClose }) {
  return (
    <div>
      <Modal show={showRSVP} onHide={rsvpClose} centered>
        <Modal.Header>
          <Modal.Title id="modalTitle">RSVP</Modal.Title>
          <CloseIcon id="closeIcon" onClick={rsvpClose}/>
        </Modal.Header>
        <Modal.Body id="modal">
          <Form rsvpClose={rsvpClose}/>
        </Modal.Body>
      </Modal>
    </div>
  );
}
