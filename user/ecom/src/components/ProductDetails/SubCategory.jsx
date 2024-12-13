import React, { Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const SubCategory = ({ ProductData, Category, SubCategory }) => {
  const renderProducts = () => {
    return ProductData.map((product, index) => {
      if (product.special_price === "na") {
        return (
          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6} key={index}>
            <Card className="image-box card w-100">
              <img
                className="center w-75"
                src={product.image}
                alt={product.title}
              />
              <Card.Body>
                <p className="product-name-on-card">{product.title}</p>
                <p className="product-price-on-card">Price: ${product.price}</p>
              </Card.Body>
            </Card>
          </Col>
        );
      } else {
        return (
          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6} key={index}>
            <Card className="image-box card w-100">
              <img
                className="center w-75"
                src={product.image}
                alt={product.title}
              />
              <Card.Body>
                <p className="product-name-on-card">{product.title}</p>
                <p className="product-price-on-card">
                  Price:{" "}
                  <strike className="text-secondary">${product.price}</strike> $
                  {product.special_price}
                </p>
              </Card.Body>
            </Card>
          </Col>
        );
      }
    });
  };

  return (
    <Fragment>
      <Container className="text-center" fluid={true}>
        <div className="section-title text-center mb-55">
          <h2>
            {Category} / {SubCategory}
          </h2>
        </div>
        <Row>{renderProducts()}</Row>
      </Container>
    </Fragment>
  );
};

export default SubCategory;
