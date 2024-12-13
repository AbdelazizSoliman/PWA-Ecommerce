import React, { useState, useEffect, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AppURL from "../../api/AppURL";
import axios from "axios";
import CollectionLoading from "../PlaceHolder/CollectionLoading";

const Collection = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState("");
  const [mainDiv, setMainDiv] = useState("d-none");

  useEffect(() => {
    axios
      .get(AppURL.ProductListByRemark("COLLECTION"))
      .then((response) => {
        setProductData(response.data);
        setIsLoading("d-none");
        setMainDiv("");
      })
      .catch((error) => {
        console.error("Error fetching collection products:", error);
      });
  }, []);

  const MyView = productData.map((product, i) => {
    return (
      <Col className="p-0" key={i} xl={3} lg={3} md={3} sm={6} xs={6}>
        <Card className="image-box card w-100">
          <img
            className="center w-75"
            src={product.image}
            alt={product.title}
          />
          <Card.Body>
            <p className="product-name-on-card">{product.title}</p>
            {product.special_price === "na" ? (
              <p className="product-price-on-card">Price: ${product.price}</p>
            ) : (
              <p className="product-price-on-card">
                Price:{" "}
                <strike className="text-secondary">${product.price}</strike> $
                {product.special_price}
              </p>
            )}
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return (
    <Fragment>
      <CollectionLoading isLoading={isLoading} />
      <div className={mainDiv}>
        <Container className="text-center" fluid>
          <div className="section-title text-center mb-55">
            <h2>PRODUCT COLLECTION</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>
          <Row>{MyView}</Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Collection;
