import React, { useState, useEffect, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AppURL from "../../api/AppURL";
import axios from "axios";

const Collection = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let isMounted = true; // Prevent state updates if component unmounts
    axios
      .get(AppURL.ProductListByRemark("COLLECTION"))
      .then((response) => {
        if (isMounted) {
          setProductData(response.data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching collection products:", error);
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
    <Col className="p-0" key={index} xl={3} lg={3} md={3} sm={6} xs={6}>
      <Card className="image-box card w-100">
        <img className="center w-75" src={product.image} alt={product.title} />
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
    </Col>
  ));

  return (
    <Fragment>
      <Container className="text-center" fluid={true}>
        <div className="section-title text-center mb-55">
          <h2>PRODUCT COLLECTION</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
        </div>
        <Row>{MyView}</Row>
      </Container>
    </Fragment>
  );
};

export default Collection;
