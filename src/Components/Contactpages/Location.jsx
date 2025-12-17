import React from "react";
import { Container } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Location.css";

const Location = () => {
  return (
    <section className="location-section">

      {/* TOP HEADING */}
      <div className="location-header">
        <h2>
          <FaMapMarkerAlt /> Find Our Location
        </h2>
      </div>

      {/* MAP */}
      <div className="map-wrapper mb-5">
        <iframe
          title="location-map"
          src="https://www.google.com/maps?q=Hollywood,Los%20Angeles,%20CA,%20USA&output=embed"
          loading="lazy"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </section>
  );
};

export default Location;
