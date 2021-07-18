import React from "react";
import { Modal } from "react-bootstrap";
import "./index.css";
import Form from "../Form";
import CloseIcon from "@material-ui/icons/Close";
import Us from '../../image/Us.png';

export default function index({ showRSVP, rsvpClose }) {
  return (
    <div>
      <Modal show={showRSVP} onHide={rsvpClose} centered>
        <Modal.Header id="Header">
          <div id="headerSlug">
          <img id="us" src={Us} />
          <Modal.Title id="modalTitle">RSVP</Modal.Title>
          </div>
          <CloseIcon id="closeIcon" onClick={rsvpClose} />
        </Modal.Header>
        <Modal.Body id="modal">
          <div id="modalBackground">
            <Form rsvpClose={rsvpClose} />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
