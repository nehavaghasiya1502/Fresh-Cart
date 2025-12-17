import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Whyfreshcart.css";

import {
  FaTruck,
  FaDollarSign,
  FaBox,
  FaSyncAlt,
} from "react-icons/fa";

import whyImg from "../assets/about/about1.png";

const Whyfreshcart = () => {
  return (
    <section className="py-5 mb-5">
      <Container>
        <Row className="align-items-center">

          {/* LEFT CONTENT */}
          <Col lg={6}>
            <h2 className="fw-bold mb-5">
              Why{" "}
              <span style={{ color: "#f28123", fontSize: "40px" }}>
                Fresh-Cart
              </span>
            </h2>

            <Row className="gy-4">

              <Col md={6}>
                <div className="d-flex">
                  <div className="icon-circle">
                    <FaTruck />
                  </div>
                  <div>
                    <h5 className="fw-bold">Home Delivery</h5>
                    <p className="text-muted small">
                      sit voluptatem accusantium dolore mque laudantium,
                      totam rem aperiam.
                    </p>
                  </div>
                </div>
              </Col>

              <Col md={6}>
                <div className="d-flex">
                  <div className="icon-circle">
                    <FaDollarSign />
                  </div>
                  <div>
                    <h5 className="fw-bold">Best Price</h5>
                    <p className="text-muted small">
                      sit voluptatem accusantium dolore mque laudantium,
                      totam rem aperiam.
                    </p>
                  </div>
                </div>
              </Col>

              <Col md={6}>
                <div className="d-flex">
                  <div className="icon-circle">
                    <FaBox />
                  </div>
                  <div>
                    <h5 className="fw-bold">Custom Box</h5>
                    <p className="text-muted small">
                      sit voluptatem accusantium dolore mque laudantium,
                      totam rem aperiam.
                    </p>
                  </div>
                </div>
              </Col>

              <Col md={6}>
                <div className="d-flex">
                  <div className="icon-circle">
                    <FaSyncAlt />
                  </div>
                  <div>
                    <h5 className="fw-bold">Quick Refund</h5>
                    <p className="text-muted small">
                      sit voluptatem accusantium dolore mque laudantium,
                      totam rem aperiam.
                    </p>
                  </div>
                </div>
              </Col>

            </Row>
          </Col>

          {/* RIGHT IMAGE */}
          <Col lg={6} className="text-center">
            <img
              src={whyImg}
              alt="Why Fresh Cart"
              className="img-fluid rounded-4 shadow"
            />
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Whyfreshcart;
