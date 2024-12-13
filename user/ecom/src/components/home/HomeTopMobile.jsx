import React, { useState, useEffect, Fragment } from "react";
import HomeSlider from "./HomeSlider";
import { Container, Row, Col } from "react-bootstrap";
import AppURL from "../../api/AppURL";
import axios from "axios";

const HomeTopMobile = () => {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    // Fetch slider data
    axios
      .get(AppURL.AllSlider)
      .then((response) => {
        setSliderData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching slider data:", error);
      });
  }, []);

  return (
    <Fragment>
      <Container className="p-0 m-0 overflow-hidden" fluid>
        <Row className="p-0 m-0 overflow-hidden">
          <Col lg={12} md={12} sm={12}>
            <HomeSlider data={sliderData} />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default HomeTopMobile;
