import React from "react";
import { Container, Row, Col, Card, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { resolveImageUrl } from "../../utils/imageHelpers";

const SubCategory = ({ ProductData, Category, SubCategory }) => {
  const MyView = ProductData.map((ProductList, i) => {
    const { id, image, title, price, special_price } = ProductList;
    const imageUrl = resolveImageUrl(image);

    return (
      <Col key={i} className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
        <Link className="text-link" to={`/productdetails/${id}`}>
          <Card className="image-box card w-100">
            <img className="center w-75" src={imageUrl} alt={title} />
            <Card.Body>
              <p className="product-name-on-card">{title}</p>
              <p className="product-price-on-card">
                Price :
                {special_price === "na" ? (
                  `$${price}`
                ) : (
                  <>
                    <strike className="text-secondary">${price}</strike> $
                    {special_price}
                  </>
                )}
              </p>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    );
  });

  return (
    <>
      <Container className="text-center" fluid={true}>
        <div className="breadbody">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/"> Home </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to={`/productcategory/${Category}`}>{Category}</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to={`/productsubcategory/${Category}/${SubCategory}`}>
                {SubCategory}
              </Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="section-title text-center mb-40 mt-2">
          <h2>
            {Category} / {SubCategory}
          </h2>
        </div>

        <Row>{MyView}</Row>
      </Container>
    </>
  );
};

export default SubCategory;
