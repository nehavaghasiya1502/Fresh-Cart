import React from "react";
import "./Contacthero.css";
import { Container, Col, Row } from "react-bootstrap";

function Contacthero() {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col className="mb-5">
          <div className="box">
            <div className="fresh">Get 24/7 Support</div>
            <div className="p1">Contact us</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contacthero;
