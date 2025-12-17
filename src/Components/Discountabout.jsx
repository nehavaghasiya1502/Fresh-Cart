import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Discountabout.css";

import discountImg from "../assets/about/about2.png"; 
const Discountabout = () => {
  return (
    <section
      className="discount-about"
      style={{ backgroundImage: `url(${discountImg})` }}
    >
      <div className="overlay">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="discount-title">
                December Sale is On!
              </h2>
              <h3 className="discount-off">
                <span>50%</span> OFF
              </h3>
              <p className="discount-text">
                Fresh & Organic Fruits available at best price.
                Limited time offer — don’t miss it!
              </p>

              <Button className="discount-btn">
                Shop Now
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Discountabout;
