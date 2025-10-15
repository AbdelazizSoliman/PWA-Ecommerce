import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import AppURL from "../../api/AppURL";
import { resolveImageUrl } from "../../utils/imageHelpers";
import CategoryLoading from "../PlaceHolder/CategoryLoading";

const Categories = () => {
  const [menuData, setMenuData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(AppURL.AllCategoryDetails)
      .then((response) => {
        setMenuData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching category details:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const renderCategoryCard = (category) => {
    const { category_name: name, category_image: image } = category;
    const imageUrl = resolveImageUrl(image);
    return (
      <Col key={name} className="p-0" xl={2} lg={2} md={2} sm={6} xs={6}>
        <Link className="text-link" to={`/productcategory/${name}`}>
          <Card className="h-100 w-100 text-center">
            <Card.Body>
              <img className="center" src={imageUrl} alt={name} />
              <h5 className="category-name">{name}</h5>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    );
  };

  return (
    <>
      <CategoryLoading show={isLoading} />

      {!isLoading && (
        <div>
          <Container className="text-center" fluid>
            <div className="section-title text-center mb-55">
              <h2>CATEGORIES</h2>
              <p>Some Of Our Exclusive Collection, You May Like</p>
            </div>
            <Row>{menuData.map(renderCategoryCard)}</Row>
          </Container>
        </div>
      )}
    </>
  );
};

export default Categories;
