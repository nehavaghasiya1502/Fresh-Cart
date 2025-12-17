import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from "react-icons/fa";
import "./Address.css";

const Address = () => {
  return (
    <section className="address-section">
      <Container>
        <Row>
          {/* LEFT FORM */}
          <Col lg={8} md={12}>
            <div className="contact-form">
              <h2>Have you any question?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur, ratione! Laboriosam est, assumenda.
                Perferendis, quo alias quaerat aliquid.
              </p>

              <form>
                <Row>
                  <Col md={6}>
                    <input type="text" placeholder="Name" />
                  </Col>
                  <Col md={6}>
                    <input type="email" placeholder="Email" />
                  </Col>
                  <Col md={6}>
                    <input type="text" placeholder="Phone" />
                  </Col>
                  <Col md={6}>
                    <input type="text" placeholder="Subject" />
                  </Col>
                  <Col md={12}>
                    <textarea placeholder="Message"></textarea>
                  </Col>
                </Row>

                <button type="submit" className="submit-btn">
                  SUBMIT
                </button>
              </form>
            </div>
          </Col>

          {/* RIGHT INFO */}
          <Col lg={4} md={12}>
            <div className="contact-info">

              <div className="info-box">
                <FaMapMarkerAlt />
                <div>
                  <h5>Shop Address</h5>
                  <p>
                    34/8, East Hukupara <br />
                    Gifrtok, Sadan <br />
                    Country Name
                  </p>
                </div>
              </div>

              <div className="info-box">
                <FaClock />
                <div>
                  <h5>Shop Hours</h5>
                  <p>
                    MON - FRIDAY: 8 to 9 PM <br />
                    SAT - SUN: 10 to 8 PM
                  </p>
                </div>
              </div>

              <div className="info-box">
                <FaPhoneAlt />
                <div>
                  <h5>Contact</h5>
                  <p>
                    Phone: +00 111 222 3333 <br />
                    Email: support@fruitkha.com
                  </p>
                </div>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Address;
