import React, { useState} from "react";
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

  const onSubmit = e => {
    e.preventDefault()
      axios.post("http://localhost:7000/register", {
          guestName: guestName,
          guestName2: guestName1,
          guestName3: guestName2,
          partySize: partySize,
          notComing: false,
        })
        .then(function (response) {
          if(response.statusText === 'Created'){
            setrsvpSuccess(true)
            document.getElementById('modalTitle').innerHTML = 'Thank you for your RSVP';
          }
        });
    }

  const handleGuest = e =>{
    let Guest = e.target.value
    setGuestName(Guest)
  }

  const handleGuest1 = e =>{
    let Guest = e.target.value
    setGuestName1(Guest)
  }

  const handleGuest2 = e =>{
    let Guest = e.target.value
    setGuestName2(Guest)
  }


  const handleNotComing = e => {
    let Coming = e.target.value
    setNotComing(!Coming)
    console.log(notComing)
  }

  return (
    <form onSubmit={onSubmit} id="form">
      {!rsvpSuccess && (
        <div>
          <div className="form-group">
            <label for="exampleInputEmail1">Full Name</label>
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
            <div>
              <label for="exampleInputEmail1">How many in your party?</label>
              <div id="rsvpButtons">
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => setPartySize(1)}
                >
                  Only Me
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => setPartySize(2)}
                >
                  +1
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => setPartySize(3)}
                >
                  +2
                </Button>
              </div>
              {partySize === 2 && (
                <div>
                  <label>Extra guest name?</label>
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
              {partySize === 3 && (
                <div>
                  <label>Extra guests names?</label>
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
              onChange={handleNotComing}
              onClick={() => setNotComing(!true)}
            />
            <label class="form-check-label" for="exampleCheck1">
              Unfortuntely, I can't make it.
            </label>
            {notComing && (
              <label class="form-check-label" for="exampleCheck1">
                We will miss sharing this occasion with you, but we would like
                to extend our thanks for your consideration.
              </label>
            )}
          </div>
          <Button class="btn btn-primary" type="submit">RSVP</Button>
          {rsvpSuccess && (
            <Button onClick={()=> rsvpClose()}>Close</Button>
          )}
        </div>
      )}
    </form>
  );
}
