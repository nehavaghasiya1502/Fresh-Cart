import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import './Productpage.css';
import p1 from "../assets/products/p1.png";
import p2 from "../assets/products/p2.png";
import p3 from "../assets/products/p3.png";
import p4 from "../assets/products/p4.png";
import p5 from "../assets/products/p5.png";
import p6 from "../assets/products/p6.png";

const products = [
  {
    id: 1,
    name: "Strawberry",
    price: "85$",
    category: "strawberry",
    img:p1,
  },
  {
    id: 2,
    name: "Berry",
    price: "70$",
    category: "berry",
    img: p2,
  },
  {
    id: 3,
    name: "Lemon",
    price: "35$",
    category: "lemon",
    img: p3,
  },
   {
    id: 3,
    name: "Kiwi",
    price: "35$",
    category: "lemon",
    img: p4,
  },
   {
    id: 3,
    name: "Green Apple",
    price: "35$",
    category: "lemon",
    img: p5,
  },
   {
    id: 3,
    name: "Cherry",
    price: "35$",
    category: "lemon",
    img: p6,
  },
];

const Productpage = () => {
  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((item) => item.category === filter);

  return (
    <Container className="py-5 text-center">
      {/* FILTER BUTTONS */}
      {/* <div className="mb-5">
        {['all', 'strawberry', 'berry', 'lemon'].map((cat) => (
          <Button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`mx-2 px-4 rounded-pill ${
              filter === cat ? 'btn-warning text-white' : 'btn-outline-dark'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </Button>
        ))}
      </div> */}

      {/* PRODUCTS */}
      <Row className="g-4">
        {filteredProducts.map((item) => (
          <Col md={4} sm={6} key={item.id}>
            <Card className="product-card h-100 border-0  rounded-4 p-3">
              <Card.Img
                variant="top"
                src={item.img}
                style={{ height: '160px', objectFit: 'contain' }}
              />
              <Card.Body>
                <h4>{item.name}</h4>
                <p className="text-muted">Per Kg</p>
                <h3>{item.price}</h3>
                <Button variant="warning" className="rounded-pill px-4 mt-5 text-white">
                  🛒 Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Productpage;
