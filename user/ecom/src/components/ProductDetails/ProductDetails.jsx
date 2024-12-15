import React, { useState } from "react";
import { Container, Row, Col, Breadcrumb, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductDetails = ({ data }) => {
  const [previewImg, setPreviewImg] = useState(
    data.productDetails[0].image_one
  );

  const {
    title,
    brand,
    category,
    subcategory,
    price,
    product_code,
    special_price,
    star,
  } = data.productList[0];

  const {
    image_one,
    image_two,
    image_three,
    image_four,
    color,
    size,
    product_id,
    short_description,
    long_description,
  } = data.productDetails[0];

  const PriceOption = (price, special_price) => {
    if (special_price === "na") {
      return <p className="product-price-on-card"> Price : {price}$ </p>;
    } else {
      return (
        <p className="product-price-on-card">
          Price : <strike className="text-secondary">{price}$</strike>{" "}
          {special_price}$
        </p>
      );
    }
  };

  const handleImageClick = (event) => {
    setPreviewImg(event.target.getAttribute("src"));
  };

  const ColorOption =
    color !== "na"
      ? color.split(",").map((ColorList, i) => (
          <option value={ColorList} key={i}>
            {ColorList}
          </option>
        ))
      : null;

  const SizeOption =
    size !== "na"
      ? size.split(",").map((SizeList, i) => (
          <option value={SizeList} key={i}>
            {SizeList}
          </option>
        ))
      : null;

  return (
    <Container fluid={true} className="BetweenTwoSection">
      <div className="breadbody">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/"> Home </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={`/productcategory/${category}`}>{category}</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={`/productsubcategory/${category}/${subcategory}`}>
              {subcategory}
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={`/productdetails/${product_id}`}>{title}</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Row className="p-2">
        <Col
          className="shadow-sm bg-white pb-3 mt-4"
          md={12}
          lg={12}
          sm={12}
          xs={12}
        >
          <Row>
            <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
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
                      <Col
                        key={i}
                        className="p-0 m-0"
                        md={3}
                        lg={3}
                        sm={3}
                        xs={3}
                      >
                        <img
                          onClick={handleImageClick}
                          className="w-100 smallimage product-sm-img"
                          src={img}
                          alt={`Product Thumbnail ${i + 1}`}
                        />
                      </Col>
                    )
                  )}
                </Row>
              </Container>
            </Col>

            <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
              <h5 className="Product-Name">{title}</h5>
              <h6 className="section-sub-title">{short_description}</h6>

              {PriceOption(price, special_price)}

              <h6 className="mt-2">
                Category : <b>{category}</b>
              </h6>
              <h6 className="mt-2">
                SubCategory : <b>{subcategory}</b>
              </h6>
              <h6 className="mt-2">
                Brand : <b>{brand}</b>
              </h6>
              <h6 className="mt-2">
                Product Code : <b>{product_code}</b>
              </h6>

              {color !== "na" && (
                <div>
                  <h6 className="mt-2">Choose Color</h6>
                  <select className="form-control form-select">
                    <option>Choose Color</option>
                    {ColorOption}
                  </select>
                </div>
              )}

              {size !== "na" && (
                <div>
                  <h6 className="mt-2">Choose Size</h6>
                  <select className="form-control form-select">
                    <option>Choose Size</option>
                    {SizeOption}
                  </select>
                </div>
              )}

              <div>
                <h6 className="mt-2">Choose Quantity</h6>
                <select className="form-control form-select">
                  <option>Choose Quantity</option>
                  {[...Array(10).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                </select>
              </div>

              <div className="input-group mt-3">
                <Button className="btn site-btn m-1">
                  <i className="fa fa-shopping-cart"></i> Add To Cart
                </Button>
                <Button className="btn btn-primary m-1">
                  <i className="fa fa-car"></i> Order Now
                </Button>
                <Button className="btn btn-primary m-1">
                  <i className="fa fa-heart"></i> Favourite
                </Button>
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="" md={6} lg={6} sm={12} xs={12}>
              <h6 className="mt-2">DETAILS</h6>
              <p>{long_description}</p>
            </Col>

            <Col className="" md={6} lg={6} sm={12} xs={12}>
              <h6 className="mt-2">REVIEWS</h6>
              {[...Array(3).keys()].map((i) => (
                <div key={i}>
                  <p className="p-0 m-0">
                    <span className="Review-Title">Aziz Soliman</span>
                    <span className="text-success">
                      {[...Array(4).keys()].map((star) => (
                        <i key={star} className="fa fa-star" />
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
  );
};

export default ProductDetails;
