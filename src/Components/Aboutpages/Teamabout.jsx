import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Teamabout.css";

import t1 from "../../assets/about/about3.png";
import t2 from "../../assets/about/about4.png";
import t3 from "../../assets/about/about5.png";

const teamData = [
  {
    name: "Jimmy Doe",
    role: "Farmer",
    img: t1,
  },
  {
    name: "Marry Doe",
    role: "Farmer",
    img: t2,
  },
  {
    name: "Simon Joe",
    role: "Farmer",
    img: t3,
  },
];

const Teamabout = () => {
  return (
    <section className="team-section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="team-title">
            Our <span>Team</span>
          </h2>
          <p className="team-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aliquid, fuga quas itaque eveniet beatae optio.
          </p>
        </div>

        <Row>
          {teamData.map((item, index) => (
            <Col md={4} key={index}>
              <Card className="team-card">
                <div className="img-wrapper">
                  <Card.Img src={item.img} />
                  <div className="social-icons">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaInstagram /></a>
                  </div>
                </div>
                <Card.Body className="text-center">
                  <h5>{item.name}</h5>
                  <p>{item.role}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Teamabout;
