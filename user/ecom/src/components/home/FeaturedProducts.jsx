import React, { useState, useEffect, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppURL from "../../api/AppURL";
import axios from "axios";

const FeaturedProducts = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let isMounted = true; // Prevent state updates if the component unmounts
    axios
      .get(AppURL.ProductListByRemark("FEATURED"))
      .then((response) => {
        if (isMounted) {
          setProductData(response.data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching featured products:", error);
        if (isMounted) {
          setIsError(true);
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false; // Cleanup
    };
  }, []);

  if (isLoading) {
    return (
      <Container className="text-center">
        <h4>Loading...</h4>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container className="text-center">
        <h4>Failed to load products. Please try again later.</h4>
      </Container>
    );
  }

  const MyView = productData.map((product, index) => (
    <Col className="p-1" key={index} xl={2} lg={2} md={2} sm={4} xs={6}>
      <Link to="/productdetails">
        <Card className="image-box card">
          <img className="center" src={product.image} alt={product.title} />
          <Card.Body>
            <p className="product-name-on-card">{product.title}</p>
            {product.special_price !== "na" ? (
              <p className="product-price-on-card">
                Price:{" "}
                <strike className="text-secondary">${product.price}</strike> $
                {product.special_price}
              </p>
            ) : (
              <p className="product-price-on-card">Price: ${product.price}</p>
            )}
          </Card.Body>
        </Card>
      </Link>
    </Col>
  ));

  return (
    <Fragment>
      <Container className="text-center" fluid={true}>
        <div className="section-title text-center mb-55">
          <h2>FEATURED PRODUCT</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
        </div>
        <Row>{MyView}</Row>
      </Container>
    </Fragment>
  );
};

export default FeaturedProducts;
