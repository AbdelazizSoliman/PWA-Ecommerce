import React, { useState, useEffect, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import HomeSlider from "./HomeSlider";
import AppURL from "../../api/AppURL";
import axios from "axios";
import SliderLoading from "../PlaceHolder/SliderLoading";

const HomeTop = () => {
  const [menuData, setMenuData] = useState([]);
  const [sliderData, setSliderData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isSubscribed = true;

    const loadContent = async () => {
      try {
        const [categoriesResponse, sliderResponse] = await Promise.all([
          axios.get(AppURL.AllCategoryDetails),
          axios.get(AppURL.AllSlider),
        ]);

        if (isSubscribed) {
          setMenuData(categoriesResponse.data);
          setSliderData(sliderResponse.data);
        }
      } catch (error) {
        console.error("Error fetching home top data:", error);
      } finally {
        if (isSubscribed) {
          setIsLoading(false);
        }
      }
    };

    loadContent();

    return () => {
      isSubscribed = false;
    };
  }, []);

  return (
    <Fragment>
      <SliderLoading show={isLoading} />

      {!isLoading && (
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
      )}
    </Fragment>
  );
};

export default HomeTop;
