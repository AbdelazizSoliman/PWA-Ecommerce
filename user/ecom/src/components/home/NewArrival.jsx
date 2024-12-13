import React, { useState, useEffect, Fragment, useRef } from "react";
import { Container, Row, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppURL from "../../api/AppURL";
import axios from "axios";

const NewArrival = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  useEffect(() => {
    let isMounted = true;
    axios
      .get(AppURL.ProductListByRemark("NEW"))
      .then((response) => {
        if (isMounted) {
          setProductData(response.data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching new arrival products:", error);
        if (isMounted) {
          setIsError(true);
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false; // Cleanup on unmount
    };
  }, []);

  const settings = {
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
          initialSlide: 2,
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
    <div key={index}>
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
    </div>
  ));

  return (
    <Fragment>
      <Container className="text-center" fluid={true}>
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
          <Slider ref={sliderRef} {...settings}>
            {MyView}
          </Slider>
        </Row>
      </Container>
    </Fragment>
  );
};

export default NewArrival;
