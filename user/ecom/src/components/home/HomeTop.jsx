import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import HomeSlider from "./HomeSlider";
import AppURL from "../../api/AppURL";
import axios from "axios";

const HomeTop = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    // Fetch category data when the component mounts
    axios
      .get(AppURL.AllCategoryDetails)
      .then((response) => {
        setMenuData(response.data); // Set the data in state
      })
      .catch((error) => {
        console.error("Error fetching category data:", error);
      });
  }, []); // Empty dependency array ensures this runs only once

  return (
    <Container className="p-0 m-0 overflow-hidden" fluid={true}>
      <Row>
        <Col lg={3} md={3} sm={12}>
          <MegaMenu data={menuData} />
        </Col>
        <Col lg={9} md={9} sm={12}>
          <HomeSlider />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeTop;
