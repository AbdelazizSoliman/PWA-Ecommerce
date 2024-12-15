import React, { Fragment, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import ReactDOM from "react-dom";

const ProductDetails = ({ data }) => {
  const [previewImg, setPreviewImg] = useState(
    data.productDetails[0].image_one
  );

  const imgOnClick = (event) => {
    const imgSrc = event.target.getAttribute("src");
    setPreviewImg(imgSrc);
  };

  const PriceOption = (price, specialPrice) => {
    if (specialPrice === "na") {
      return <p className="product-price-on-card"> Price: ${price} </p>;
    } else {
      return (
        <p className="product-price-on-card">
          Price: <strike className="text-secondary">${price}</strike> $
          {specialPrice}
        </p>
      );
    }
  };

  const productData = data.productList[0];
  const productDetails = data.productDetails[0];
  const longDescription = productDetails.long_description;

  const {
    title,
    brand,
    category,
    subcategory,
    price,
    special_price: specialPrice,
    product_code: productCode,
    short_description: shortDescription,
  } = productData;

  const { image_one, image_two, image_three, image_four, color, size } =
    productDetails;

  const renderOptions = (options) =>
    options.split(",").map((option, i) => (
      <option key={i} value={option.trim()}>
        {option.trim()}
      </option>
    ));

  return (
    <Fragment>
      <Container fluid className="BetweenTwoSection">
        <Row className="p-2">
          <Col className="shadow-sm bg-white pb-3 mt-4" md={12}>
            <Row>
              {/* Image Section */}
              <Col className="p-3" md={6}>
                <img
                  id="previewImg"
                  className="bigimage"
                  src={previewImg}
                  alt="Product Preview"
                />
                <Container className="my-3">
                  <Row>
                    {[image_one, image_two, image_three, image_four].map(
                      (img, i) => (
                        <Col className="p-0 m-0" md={3} key={i}>
                          <img
                            onClick={imgOnClick}
                            className="w-100 smallimage product-sm-img"
                            src={img}
                            alt={`Thumbnail ${i + 1}`}
                          />
                        </Col>
                      )
                    )}
                  </Row>
                </Container>
              </Col>

              {/* Details Section */}
              <Col className="p-3" md={6}>
                <h5 className="Product-Name">{title}</h5>
                <h6 className="section-sub-title">{shortDescription}</h6>

                {PriceOption(price, specialPrice)}
                <h6 className="mt-2">
                  Category: <b>{category}</b>
                </h6>
                <h6 className="mt-2">
                  SubCategory: <b>{subcategory}</b>
                </h6>
                <h6 className="mt-2">
                  Brand: <b>{brand}</b>
                </h6>
                <h6 className="mt-2">
                  Product Code: <b>{productCode}</b>
                </h6>

                {/* Color Options */}
                {color !== "na" && (
                  <div>
                    <h6 className="mt-2">Choose Color</h6>
                    <Form.Select>
                      <option>Choose Color</option>
                      {renderOptions(color)}
                    </Form.Select>
                  </div>
                )}

                {/* Size Options */}
                {size !== "na" && (
                  <div>
                    <h6 className="mt-2">Choose Size</h6>
                    <Form.Select>
                      <option>Choose Size</option>
                      {renderOptions(size)}
                    </Form.Select>
                  </div>
                )}

                {/* Quantity Selection */}
                <div>
                  <h6 className="mt-2">Choose Quantity</h6>
                  <Form.Select>
                    <option>Choose Quantity</option>
                    {Array.from({ length: 10 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </Form.Select>
                </div>

                {/* Action Buttons */}
                <div className="input-group mt-3">
                  <button className="btn site-btn m-1">
                    <i className="fa fa-shopping-cart"></i> Add To Cart
                  </button>
                  <button className="btn btn-primary m-1">
                    <i className="fa fa-car"></i> Order Now
                  </button>
                  <button className="btn btn-primary m-1">
                    <i className="fa fa-heart"></i> Favourite
                  </button>
                </div>
              </Col>
            </Row>

            {/* Additional Details */}
            <Row>
              <Col md={6}>
                <h6 className="mt-2">DETAILS</h6>
                {longDescription}
              </Col>
              <Col md={6}>
                <h6 className="mt-2">REVIEWS</h6>
                {[1, 2, 3].map((review, i) => (
                  <div key={i}>
                    <p className="p-0 m-0">
                      <span className="Review-Title">Aziz Soliman</span>
                      <span className="text-success">
                        {[...Array(4)].map((_, j) => (
                          <i key={j} className="fa fa-star"></i>
                        ))}
                      </span>
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </p>
                  </div>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ProductDetails;
