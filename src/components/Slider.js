import React from "react";
import { Carousel } from "react-bootstrap";
import "./../assets/css/slider.css";

const Slider = () => {
  return (
    <div>
      <Carousel className="bg-info">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://vaekstovervand.dk/wp-content/uploads/2017/05/7wonders.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://upload.wikimedia.org/wikivoyage/en/thumb/d/da/RomanEmpireBanner1.jpg/1200px-RomanEmpireBanner1.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://d18lkz4dllo6v2.cloudfront.net/cumulus_uploads/entry/36500/1200x400px-Travel-lp.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
};

export default Slider;
