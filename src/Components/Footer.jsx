import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGlobe } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-bg text-light pt-5">
      <Container>
        <Row className="pb-4">
          {/* About Us */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="footer-title">About us</h5>
            <div className="footer-line"></div>
            <p className="footer-text">
              Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae.
            </p>
          </Col>

          {/* Get in Touch */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="footer-title">Get in Touch</h5>
            <div className="footer-line"></div>
            <p className="footer-text">34/8, East Hukupara, Gifirtok, Sadan.</p>
            <p className="footer-text">support@freshcart.com</p>
            <p className="footer-text">+00 111 222 3333</p>
          </Col>

          {/* Pages */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="footer-title">Pages</h5>
            <div className="footer-line"></div>
            <ul className="footer-links">
              <li>› Home</li>
              <li>› About</li>
              <li>› Shop</li>
              <li>› News</li>
              <li>› Contact</li>
            </ul>
          </Col>

          {/* Subscribe */}
          <Col md={3} sm={6}>
            <h5 className="footer-title">Subscribe</h5>
            <div className="footer-line"></div>
            <p className="footer-text">
              Subscribe to our mailing list to get the latest updates.
            </p>
            <Form className="d-flex">
              <Form.Control
                type="email"
                placeholder="Email"
                className="footer-input"
              />
              <Button className="footer-btn">➤</Button>
            </Form>
          </Col>
        </Row>

        <hr className="footer-divider" />

        {/* Bottom Bar */}
        <Row className="align-items-center pb-3">
          <Col md={6} className="footer-bottom-text">
            Copyrights © 2019 - <span className="highlight">Imran Hossain</span>,
            All Rights Reserved. <br />
            Distributed By - <span className="highlight">Themewagon</span>
          </Col>

          <Col md={6} className="text-md-end mt-3 mt-md-0">
            <span className="social-icon"><FaFacebookF /></span>
            <span className="social-icon"><FaTwitter /></span>
            <span className="social-icon"><FaInstagram /></span>
            <span className="social-icon"><FaLinkedinIn /></span>
            <span className="social-icon"><FaGlobe /></span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
