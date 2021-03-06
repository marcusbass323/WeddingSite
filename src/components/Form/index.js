import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "./index.css";
import axios from "axios";

export default function Index({ rsvpClose }) {
  const [guestName, setGuestName] = useState("");
  const [partySize, setPartySize] = useState(1);
  const [guestName1, setGuestName1] = useState("");
  const [guestName2, setGuestName2] = useState("");
  const [notComing, setNotComing] = useState(false);
  const [rsvpSuccess, setrsvpSuccess] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://wynnbernardweddingserver.herokuapp.com/register", {
        guestName: guestName,
        guestName2: guestName1,
        guestName3: guestName2,
        partySize: partySize,
        notComing: false,
      })
      .then(function (response) {
        if (response.statusText === "Created") {
          setrsvpSuccess(true);
          document.getElementById("modalTitle").innerHTML =
            "Your Reservation is Confirmed";
        }
      });
  };

  const handleGuest = (e) => {
    let Guest = e.target.value;
    setGuestName(Guest);
  };

  const handleGuest1 = (e) => {
    let Guest = e.target.value;
    setGuestName1(Guest);
  };

  const handleGuest2 = (e) => {
    let Guest = e.target.value;
    setGuestName2(Guest);
  };

  return (
    <form onSubmit={onSubmit} id="form">
      {rsvpSuccess && (
        <div>
          <div id="message">Thank you for your RSVP</div>
          <br></br>
          <div id="message">
            We can't wait to share this special occassion with you!
          </div>
        </div>
      )}
      {!rsvpSuccess && (
        <div>
          <div className="form-group">
            <label for="exampleInputEmail1">
              <b>Your Name</b>
            </label>
            <input
              type="text"
              name="guestName"
              class="form-control"
              placeholder="Enter full name"
              onChange={handleGuest}
              value={guestName}
            />
          </div>
          {!notComing && (
            <div id="guestDetails">
              <label id="partySize">
                <b>How many in your party?</b>
              </label>
              <div id="rsvpButtons">
                <Button
                  id="btn"
                  variant="outlined"
                  color="primary"
                  onClick={() => setPartySize(1)}
                >
                  Only Me
                </Button>
                <Button
                  id="btn"
                  variant="outlined"
                  color="primary"
                  onClick={() => setPartySize(2)}
                >
                  +1
                </Button>
                <Button
                  id="btn"
                  variant="outlined"
                  color="primary"
                  onClick={() => setPartySize(3)}
                >
                  +2
                </Button>
              </div>
              {partySize === 2 && (
                <div>
                  <label>
                    <b>Extra guest name?</b>
                  </label>
                  <input
                    type="text"
                    name="guestName1"
                    class="form-control"
                    placeholder="Enter full name"
                    onChange={handleGuest1}
                    value={guestName1}
                  />
                </div>
              )}
              <br></br>
              {partySize === 3 && (
                <div>
                  <label>
                    <b>Extra guests names?</b>
                  </label>
                  <input
                    type="text"
                    name="guestName1"
                    class="form-control"
                    placeholder="Enter guest 2 full name"
                    onChange={handleGuest1}
                    value={guestName1}
                  />
                  <input
                    type="text"
                    name="guestName2"
                    class="form-control"
                    placeholder="Enter guest 3 full name"
                    onChange={handleGuest2}
                    value={guestName2}
                  />
                </div>
              )}
            </div>
          )}
          <div class="form-check" id="checkbox">
            <input
              type="checkbox"
              class="form-check-input"
              name="notComing"
              value={notComing}
              onClick={() => setNotComing(!notComing)}
            />
            <label class="form-check-label" for="exampleCheck1">
              <b>Unfortuntely, I can't make it.</b>
            </label>
            {notComing && (
              <label
                id="unfortunately"
                class="form-check-label"
                for="exampleCheck1"
              >
                We will miss sharing this special occasion with you! Thanks for
                your consideration.
              </label>
            )}
          </div>
          <Button
            id="btn"
            type="submit"
            disabled={guestName === "" ? true : false}
          >
            RSVP
          </Button>
          {rsvpSuccess && <Button onClick={() => rsvpClose()}>Close</Button>}
        </div>
      )}
    </form>
  );
}
