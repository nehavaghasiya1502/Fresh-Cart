// import React from "react";
// import "./Newshero.css";
// import { Col, Row } from "react-bootstrap";


// function Newshero() {
//   return (
    
//      <Row>
//       <Col className="mb-5">
//        <div className="box">
//         <div className="fresh">ORGANIC INFORMATION</div>
//         <div className="p1">News Article</div>
//       </div>
//       </Col>
//      </Row>
  
//   );
// }

// export default Newshero;


import React from "react";
import "./Newshero.css";
import { Container, Col, Row } from "react-bootstrap";

function Newshero() {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col className="mb-5">
          <div className="box">
            <div className="fresh">ORGANIC INFORMATION</div>
            <div className="p1">News Article</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Newshero;
