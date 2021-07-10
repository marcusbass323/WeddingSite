import React from "react";
import { Modal } from "react-bootstrap";
import "./index.css";
import CloseIcon from '@material-ui/icons/Close';

export default function index({ showOurStory, OurStoryClose }) {
  return (
    <div>
      <Modal show={showOurStory} onHide={OurStoryClose} centered>
        <Modal.Header>
          <Modal.Title>Our Story</Modal.Title>
          <CloseIcon id="closeIcon" onClick={OurStoryClose}/>
        </Modal.Header>
        <Modal.Body>
          <div>Our Story</div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
