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
      <Col md={4}>
        <div className="info-box">
          <div className="icon-circle">
            <FaTruck />
          </div>
          <div className="text">
            <h5>Free Shipping</h5>
            <p>When order over $75</p>
          </div>
        </div>
      </Col>

      <Col md={4}>
        <div className="info-box">
          <div className="icon-circle">
            <FaPhoneAlt />
          </div>
          <div className="text">
            <h5>24/7 Support</h5>
            <p>Call us anytime</p>
          </div>
        </div>
      </Col>

      <Col md={4}>
        <div className="info-box">
          <div className="icon-circle">
            <FaUndo />
          </div>
          <div className="text">
            <h5>Easy Returns</h5>
            <p>30 days money back</p>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</section>

    </>
  );
};

export default Intro;
