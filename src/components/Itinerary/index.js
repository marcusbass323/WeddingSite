import React from "react";
import { Modal } from "react-bootstrap";
import "./index.css";
import CloseIcon from "@material-ui/icons/Close";
import { GoogleMap } from "@react-google-maps/api";
import { useLoadScript as UseLoadScript } from "@react-google-maps/api";
import Us from "../../image/Us.png";

export default function index({ showItinerary, ItineraryClose }) {
  const mapContainerStyle = {
    width: "450px",
    height: "300px",
  };
  const wedding = {
    lat: 36.12824277351106,
    lng: -114.92170827322968,
  };

  const babyShower = {
    lat: 36.027610170510876,
    lng: -115.17880165191771,
  };

  const { isLoaded, loadError } = UseLoadScript({
    googleMapsApiKey: "AIzaSyAjoyUQ9oVrKkfrqsg1vN59Bxiyn-5b8lA",
  });

  return (
    <div>
      <Modal show={showItinerary} onHide={ItineraryClose} centered>
        <Modal.Header id="Header">
          <div id="headerSlug">
            <Modal.Title id="modalTitle">Wedding & Baby Shower Itinerary</Modal.Title>
          </div>
          <CloseIcon id="closeIcon" onClick={ItineraryClose} />
        </Modal.Header>
        <Modal.Body id="modal">
          <div id="modalBackground">
            <div>
              <b>Wedding</b> @{" "}
              <a
                target="blank"
                href="https://www.marriott.com/hotels/travel/laswi-the-westin-lake-las-vegas-resort-and-spa/"
              >
                The Westin Lake Las Vegas Resort & Spa
              </a>
            </div>
            <div>September 10, 2021 @ 6PM PST</div>
            <div>101 Montelago Blvd, Henderson, NV 89011</div>
            <br></br>
            <div>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={11}
                center={wedding}
              />
              <br></br>
              <div>
                <b>Baby Shower</b> @ Loft5
              </div>
              <div>September 11, 2021 @ 2PM PST</div>
              <div>2855 W Pebble Rd, Las Vegas, NV 89123</div>
              <br></br>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={11}
                center={babyShower}
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
