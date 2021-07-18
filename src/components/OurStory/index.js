import React from "react";
import { Modal } from "react-bootstrap";
import "./index.css";
import CloseIcon from "@material-ui/icons/Close";
import Us from "../../image/Us.png";

export default function index({ showOurStory, OurStoryClose }) {
  return (
    <div>
      <Modal show={showOurStory} onHide={OurStoryClose} centered>
        <Modal.Header id="Header">
          <div id="headerSlug">
            <img id="us" src={Us} />
            <Modal.Title id="modalTitle">Our Story</Modal.Title>
          </div>
          <CloseIcon id="closeIcon" onClick={OurStoryClose} />
        </Modal.Header>
        <Modal.Body>
          <div>
            Marcus Bernard and Stephanie Wynn are both originally from Southern
            California, now living in Las Vegas. Stephanie, daughter to Richard
            and Betty Wynn and Marcus, son to Glenda Bernard. They are grateful
            to their parents for the unrelenting love, guidance and support.
          </div>
          <br></br>
          <div>
            Their first date at Adventuredome Theme Park consisted of seemingly
            endless joking and laughing with one another. They soon found that
            their communication flowed very easy, in addition to sharing many of
            the same ideas and wants in life. As the courtship progressed, they
            knew that it was love and felt made for one another.
          </div>
          <br></br>
          <div>
            Their relationship progressed to family and friend introductions,
            intent on receiving that extra stamp of approval , which led to
            Marcus asking Stephanie to be his wife. She gladly accepted. One
            year later they are preparing to say “I do” . Taking the steps to
            forge a new family deeply rooted in love, faith, honesty and
            communication - and especially blessed with a soon-to-be addition to
            the family. Shortly after their engagement, Stephanie found out she
            was pregnant. “Imani Simone Bernard” is still growing in mama’s
            belly, but both Marcus and Stephanie can’t wait to meet her.
          </div>
          <br></br>
          <i>
            “Love recognizes no barriers It jumps hurdles, leaps fences,
            penetrates walls to arrive at its destination full of hope” - Maya
            Angelou
          </i>
        </Modal.Body>
      </Modal>
    </div>
  );
}
