import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./index.css";
import axios from "axios";

export default function Index({ rsvpClose }) {
  const [guestName, setGuestName] = useState("");
  const [partySize, setPartySize] = useState(1);
  const [guestName1, setGuestName1] = useState("");
  const [guestName2, setGuestName2] = useState("");
  const [notComing, setNotComing] = useState(false);
  const [rsvpSuccess, setrsvpSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      guestName: guestName,
      guestName1: guestName1,
      guestName2: guestName2,
      partySize: 1,
      notComing: false,
    },
    onSubmit: () => {
      axios
        .post("https://wedding-c0910-default-rtdb.firebaseio.com/", {
          guestName: guestName,
          guestName1: guestName1,
          guestName2: guestName2,
          partySize: partySize,
          notComing: false,
        })
        .then(function (response) {
          if(response.data.status === 'success'){
            document.getElementById('modalTitle').innerHTML = 'Thank you for your RSVP';
            () => rsvpClose()
          }
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} id="form">
      {!rsvpSuccess && (
        <div>
          <div class="form-group">
            <label for="exampleInputEmail1">Full Name</label>
            <input
              type="text"
              name="guestName"
              class="form-control"
              placeholder="Enter full name"
              onChange={formik.handleChange}
              value={formik.values.guestName}
            />
          </div>
          {!formik.values.notComing && (
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
                    onChange={formik.handleChange}
                    value={formik.values.guestName1}
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
                    onChange={formik.handleChange}
                    value={formik.values.guestName1}
                  />
                  <input
                    type="text"
                    name="guestName2"
                    class="form-control"
                    placeholder="Enter guest 3 full name"
                    onChange={formik.handleChange}
                    value={formik.values.guestName2}
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
              value={!formik.values.notComing}
              onChange={formik.handleChange}
              onClick={() => setNotComing(true)}
            />
            <label class="form-check-label" for="exampleCheck1">
              Unfortuntely, I can't make it.
            </label>
            {formik.values.notComing && (
              <label class="form-check-label" for="exampleCheck1">
                We will miss sharing this occasion with you, but we would like
                to extend our thanks for your consideration.
              </label>
            )}
          </div>
          <Button type="submit">Submit</Button>
          {rsvpSuccess && (
            <Button onClick={()=> rsvpClose()}>Close</Button>
          )}
        </div>
      )}
    </form>
  );
}
