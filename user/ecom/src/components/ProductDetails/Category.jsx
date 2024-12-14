import React from "react";
import { Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Category = ({ ProductData, Category }) => {
  const renderProductCard = (product) => {
    const { id, image, title, price, special_price: specialPrice } = product;

    return (
      <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6} key={id}>
        <Link className="text-link" to={`/productdetails/${id}`}>
          <Card className="image-box card w-100">
            <img className="center w-75" src={image} alt={title} />
            <Card.Body>
              <p className="product-name-on-card">{title}</p>
              {specialPrice === "na" ? (
                <p className="product-price-on-card">Price: ${price}</p>
              ) : (
                <p className="product-price-on-card">
                  Price: <strike className="text-secondary">${price}</strike> $
                  {specialPrice}
                </p>
              )}
            </Card.Body>
          </Card>
        </Link>
      </Col>
    );
  };

  return (
    <Fragment>
      <Container className="text-center" fluid>
        <div className="section-title text-center mb-55">
          <h2>{Category}</h2>
        </div>
        <Row>{ProductData.map(renderProductCard)}</Row>
      </Container>
    </Fragment>
  );
};

export default Category;
