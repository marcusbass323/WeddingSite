import React from "react";
import { Modal } from "react-bootstrap";
import "./index.css";

export default function index({ showRegistry, registryClose }) {
  return (
    <div>
      <Modal show={showRegistry} onHide={registryClose} centered>
        <Modal.Header>
          <Modal.Title>Registry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Registry</div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
