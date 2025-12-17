import React from "react";
import Slider from "react-slick";
import { Container, Card } from "react-bootstrap";
import t1 from "../../assets/about/about3.png";
import t2 from "../../assets/about/about4.png";
import t3 from "../../assets/about/about5.png";

const testimonials = [
  {
    name: "Saira Hakim",
    role: "Local shop owner",
    img: t1,
    text: "Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae dict eaque ipsa quae"
  },
  {
    name: "John Doe",
    role: "Online Entrepreneur",
    img: t2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
  },
  {
    name: "Jane Smith",
    role: "Freelancer",
    img: t3,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex."
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <Container className="py-5">
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index}>
            <Card className="text-center border-0">
              <Card.Img 
                variant="top" 
                src={item.img} 
                style={{ width: "120px", height: "120px", borderRadius: "50%", margin: "0 auto" }}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle className="mb-3 text-muted">{item.role}</Card.Subtitle>
                <Card.Text className="fst-italic" style={{ color: "#777" }}>
                  "{item.text}"
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default TestimonialSlider;
