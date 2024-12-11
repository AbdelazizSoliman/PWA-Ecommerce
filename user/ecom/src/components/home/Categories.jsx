import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AppURL from "../../api/AppURL";
import axios from "axios";

const Categories = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    // Fetch category details from the API when the component mounts
    axios
      .get(AppURL.AllCategoryDetails)
      .then((response) => {
        setMenuData(response.data); // Store the data in state
      })
      .catch((error) => {
        console.error("Error fetching category data", error);
      });
  }, []); // Empty dependency array ensures this effect runs only once (on mount)

  return (
    <Container className="text-center" fluid={true}>
      <div className="section-title text-center mb-55">
        <h2>CATEGORIES</h2>
        <p>Some Of Our Exclusive Collection, You May Like</p>
      </div>
      <Row>
        {menuData.map((category, i) => (
          <Col key={i} className="p-0" xl={2} lg={2} md={2} sm={6} xs={6}>
            <Card className="h-100 w-100 text-center">
              <Card.Body>
                <img
                  className="center"
                  src={category.category_image}
                  alt={category.category_name}
                />
                <h5 className="category-name">{category.category_name}</h5>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categories;
