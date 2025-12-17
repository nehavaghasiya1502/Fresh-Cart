import React from "react";
import "./Newssection.css";
import { Container, Row, Col } from "react-bootstrap";

import img1 from "../../assets/home/h3.png";
import img2 from "../../assets/home/h4.png";
import img3 from "../../assets/home/h5.png";
import img4 from "../../assets/news/n1.png";
import img5 from "../../assets/news/n2.png";
import img6 from "../../assets/news/n3.png";

const newsData = [
  {
    img: img1,
    title: "You will vainly look for fruit on it in autumn.",
  },
  {
    img: img2,
    title: "A man's worth has its season, like tomato.",
  },
  {
    img: img3,
    title: "Good thoughts bear good fresh juicy fruit.",
  },
   {
    img: img4,
    title: "You will vainly look for fruit on it in autumn.",
  },
  {
    img: img5,
    title: "A man's worth has its season, like tomato.",
  },
  {
    img: img6,
    title: "Good thoughts bear good fresh juicy fruit.",
  }
];

const Newssection = () => {
  return (
    <section className="news-section">
      <Container>

       
        <div className="news-heading text-center">
          <h2>
            <span><b>Our</b></span> <b>News</b>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aliquid, fuga quas itaque eveniet beatae optio.
          </p>
        </div>

        {/* CARDS */}
        <Row>
          {newsData.map((item, index) => (
            <Col md={4} sm={12} key={index}>
              <div className="news-card">

                <div className="news-img">
                  <img src={item.img} alt="news" />
                </div>

                <div className="news-content">
                  <h4>{item.title}</h4>

                  <div className="news-meta">
                    <span>Admin</span>
                    <span>27 December, 2019</span>
                  </div>

                  <p>
                    Vivamus lacus enim, pulvinar vel nulla sed,
                    scelerisque rhoncus nisi. Praesent vitae
                    mattis nunc.
                  </p>

                  <a href="#">read more →</a>
                </div>

              </div>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
};

export default Newssection;
