import React from "react";
import { Button, Col, Container, Row } from "reactstrap";

// Replace these starter images with your Instagram photography as the portfolio grows.
const photos = [
  {
    src: require("assets/img/portfolio1.png"),
    alt: "Photography portfolio starter image 1",
  },
  {
    src: require("assets/img/portfolio2.png"),
    alt: "Photography portfolio starter image 2",
  },
  {
    src: require("assets/img/portfolio3.png"),
    alt: "Photography portfolio starter image 3",
  },
  {
    src: require("assets/img/portfolio4.png"),
    alt: "Photography portfolio starter image 4",
  },
  {
    src: require("assets/img/portfolio5.png"),
    alt: "Photography portfolio starter image 5",
  },
  {
    src: require("assets/img/portfolio6.png"),
    alt: "Photography portfolio starter image 6",
  },
  {
    src: require("assets/img/portfolio7.png"),
    alt: "Photography portfolio starter image 7",
  },
  {
    src: require("assets/img/portfolio8.png"),
    alt: "Photography portfolio starter image 8",
  },
  {
    src: require("assets/img/portfolio9.png"),
    alt: "Photography portfolio starter image 9",
  },
];

export default function PhotographyPortfolio() {
  return (
    <section className="section photography-section" id="photography-section">
      <Container>
        <Row className="align-items-end mb-4">
          <Col md="8">
            <h3 className="photography-title">Photography Portfolio</h3>
            <p className="profile-description photography-description">
              The moments I capture are collections of feelings, people,
              stories, places, and life. Through photography and videography, I
              love creating visual stories that flow with the mood and scoring
              of music.
            </p>
          </Col>
          <Col className="text-md-right" md="4">
            <Button
              className="btn-simple"
              color="primary"
              href="https://www.instagram.com/yoshima.photography/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-instagram" /> View on Instagram
            </Button>
          </Col>
        </Row>
        <div className="photography-grid">
          {photos.map((photo, index) => (
            <a
              className={`photography-item photography-item-${index + 1}`}
              href="https://www.instagram.com/yoshima.photography/"
              key={photo.alt}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img alt={photo.alt} src={photo.src} />
              <span>
                <i className="fab fa-instagram" /> View photo
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
