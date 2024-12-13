import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import HomeSlider from "./HomeSlider";
import AppURL from "../../api/AppURL";
import axios from "axios";

const HomeTop = () => {
  const [menuData, setMenuData] = useState([]);
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    // Fetch category data
    axios
      .get(AppURL.AllCategoryDetails)
      .then((response) => {
        setMenuData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching category data:", error);
      });

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
    <Container className="p-0 m-0 overflow-hidden" fluid>
      <Row>
        <Col lg={3} md={3} sm={12}>
          <MegaMenu data={menuData} />
        </Col>
        <Col lg={9} md={9} sm={12}>
          <HomeSlider data={sliderData} />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeTop;
