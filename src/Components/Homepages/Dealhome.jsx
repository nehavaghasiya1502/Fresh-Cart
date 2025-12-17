import React from "react";
import "./Dealhome.css";
import { Container } from "react-bootstrap";
import dealImg from "../../assets/home/h2.png";

const Dealhome = () => {
  return (
    <section className="deal-section">
      <Container>
        <div className="deal-container">

          {/* LEFT IMAGE */}
          <div className="deal-image">
            <div className="deal-badge">
              <span>30%</span>
              <small>off per kg</small>
            </div>
            <img src={dealImg} alt="Deal Product" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="deal-content">
            <h2>
              <span>Deal</span> of the month
            </h2>

            <h4>HIKAN STRAWBERRY</h4>

            <p>
              Quisquam minus maiores repudiandae nobis, minima saepe id,
              fugit ullam similique! Beatae, minima quisquam molestias
              facere ea. Perspiciatis unde omnis iste natus error sit
              voluptatem accusant.
            </p>

            <button className="deal-btn">🛒 Add to Cart</button>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Dealhome;
