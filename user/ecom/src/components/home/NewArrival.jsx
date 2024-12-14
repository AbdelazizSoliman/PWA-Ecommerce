import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import AppURL from "../../api/AppURL";
import NewArrivalLoading from "../PlaceHolder/NewArrivalLoading";
import { Link } from "react-router-dom";

const NewArrival = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mainDivVisible, setMainDivVisible] = useState(false);

  const sliderRef = useRef(null);

  const next = () => sliderRef.current.slickNext();
  const previous = () => sliderRef.current.slickPrev();

  useEffect(() => {
    axios
      .get(AppURL.ProductListByRemark("NEW"))
      .then((response) => {
        setProductData(response.data);
        setIsLoading(false);
        setMainDivVisible(true);
      })
      .catch((error) => {
        console.error("Error fetching new arrivals:", error);
      });
  }, []);

  const renderProductCard = (product) => {
    const { id, image, title, price, special_price } = product;
    return (
      <div key={id}>
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
      </div>
    );
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Loading spinner */}
      <NewArrivalLoading isLoading={isLoading ? "" : "d-none"} />

      {/* Main content */}
      {mainDivVisible && (
        <div>
          <Container className="text-center" fluid>
            <div className="section-title text-center mb-55">
              <h2>
                NEW ARRIVAL &nbsp;
                <button className="btn btn-sm ml-2 site-btn" onClick={previous}>
                  <i className="fa fa-angle-left"></i>
                </button>
                &nbsp;
                <button className="btn btn-sm ml-2 site-btn" onClick={next}>
                  <i className="fa fa-angle-right"></i>
                </button>
              </h2>
              <p>Some Of Our Exclusive Collection, You May Like</p>
            </div>
            <Row>
              <Slider ref={sliderRef} {...sliderSettings}>
                {productData.map(renderProductCard)}
              </Slider>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};

export default NewArrival;
