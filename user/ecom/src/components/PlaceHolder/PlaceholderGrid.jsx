import React from "react";
import { Container } from "react-bootstrap";

const PlaceholderCard = () => (
  <div className="card image-box h-100 w-100 text-center">
    <div className="ph-picture" />
    <div className="ph-item">
      <div className="ph-col-12">
        <div className="ph-row">
          <div className="ph-col-12 small" />
          <div className="ph-col-12 small" />
        </div>
      </div>
    </div>
  </div>
);

const PlaceholderGrid = ({
  show,
  title,
  subtitle = "Some Of Our Exclusive Collection, You May Like",
  columnClassName = "col-lg-3 col-md-3 col-sm-4 col-6 p-1",
  itemCount = 8,
}) => {
  if (!show) {
    return null;
  }

  return (
    <div>
      <Container className="text-center" fluid>
        <div className="section-title text-center mb-55">
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
        <div className="row">
          {Array.from({ length: itemCount }).map((_, index) => (
            <div key={index} className={columnClassName}>
              <PlaceholderCard />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PlaceholderGrid;
