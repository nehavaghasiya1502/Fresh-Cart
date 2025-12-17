import React from "react";
import "./Intro.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaTruck, FaPhoneAlt, FaUndo } from "react-icons/fa";

const Intro = () => {
  return (
    <>
      <section className="intro-hero">
        <div className="hero-overlay">
          <Container>
            <h6 className="hero-subtitle">FRESH & ORGANIC</h6>
            <h1 className="hero-title">Delicious Seasonal Fruits</h1>

            <div className="hero-buttons">
              <button className="btn-orange">Fruit Collection</button>
              <button className="btn-outline">Contact Us</button>
            </div>
          </Container>
        </div>
      </section>

      <section className="intro-info mb-5">
        <Container>
          <Row className="text-center">
            <Col md={4} className="info-box">
              <div className="icon-circle">
                <FaTruck />
              </div>
              <h5>Free Shipping</h5>
              <p>When order over $75</p>
            </Col>

            <Col md={4} className="info-box">
              <div className="icon-circle">
                <FaPhoneAlt />
              </div>
              <h5>24/7 Support</h5>
              <p>Get support all day</p>
            </Col>

            <Col md={4} className="info-box">
              <div className="icon-circle">
                <FaUndo />
              </div>
              <h5>Refund</h5>
              <p>Get refund within 3 days!</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Intro;
