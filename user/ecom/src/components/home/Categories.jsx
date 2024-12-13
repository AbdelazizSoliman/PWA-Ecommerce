import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppURL from "../../api/AppURL";
import axios from "axios";

const Categories = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(AppURL.AllCategoryDetails);
        setMenuData(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Fragment>
      <Container className="text-center" fluid={true}>
        <div className="section-title text-center mb-55">
          <h2>CATEGORIES</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
        </div>
        <Row>
          {menuData.map((category, index) => (
            <Col key={index} className="p-0" xl={2} lg={2} md={2} sm={6} xs={6}>
              <Link to={`/productcategory/${category.category_name}`}>
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
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Categories;
