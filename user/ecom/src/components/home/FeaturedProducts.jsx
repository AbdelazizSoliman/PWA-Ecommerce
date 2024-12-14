import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import AppURL from "../../api/AppURL";
import FeaturedLoading from "../PlaceHolder/FeaturedLoading";

const FeaturedProducts = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mainDivVisible, setMainDivVisible] = useState(false);

  useEffect(() => {
    axios
      .get(AppURL.ProductListByRemark("FEATURED"))
      .then((response) => {
        setProductData(response.data);
        setIsLoading(false);
        setMainDivVisible(true);
      })
      .catch((error) => {
        console.error("Error fetching featured products:", error);
      });
  }, []);

  const renderProductCard = (product) => {
    const { id, image, title, price, special_price } = product;
    return (
      <Col key={id} className="p-1" xl={2} lg={2} md={2} sm={4} xs={6}>
        <Link className="text-link" to={`/productdetails/${id}`}>
          <Card className="image-box card">
            <img className="center" src={image} alt={title} />
            <Card.Body>
              <p className="product-name-on-card">{title}</p>
              {special_price === "na" ? (
                <p className="product-price-on-card">Price: ${price}</p>
              ) : (
                <p className="product-price-on-card">
                  Price: <strike className="text-secondary">${price}</strike> $
                  {special_price}
                </p>
              )}
            </Card.Body>
          </Card>
        </Link>
      </Col>
    );
  };

  return (
    <>
      {/* Loading spinner */}
      <FeaturedLoading isLoading={isLoading ? "" : "d-none"} />

      {/* Main content */}
      {mainDivVisible && (
        <div>
          <Container className="text-center" fluid>
            <div className="section-title text-center mb-55">
              <h2>FEATURED PRODUCT</h2>
              <p>Some Of Our Exclusive Collection, You May Like</p>
            </div>
            <Row>{productData.map(renderProductCard)}</Row>
          </Container>
        </div>
      )}
    </>
  );
};

export default FeaturedProducts;
