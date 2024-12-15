import React, { useState, useEffect } from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import AppURL from "../../api/AppURL";
import ReactHtmlParser from "html-react-parser";

const Privacy = () => {
  const [privacy, setPrivacy] = useState("");
  const [loaderDiv, setLoaderDiv] = useState("");
  const [mainDiv, setMainDiv] = useState("d-none");

  useEffect(() => {
    axios
      .get(AppURL.AllSiteInfo)
      .then((response) => {
        const StatusCode = response.status;
        if (StatusCode === 200) {
          const JsonData = response.data[0]["privacy"];
          setPrivacy(JsonData);
          setLoaderDiv("d-none");
          setMainDiv("");
        }
      })
      .catch((error) => {
        // Handle error
      });
  }, []);

  return (
    <Container>
      <div className="breadbody">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/privacy">Privacy</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Row className="p-2">
        <Col
          className="shadow-sm bg-white mt-2"
          md={12}
          lg={12}
          sm={12}
          xs={12}
        >
          <div className={loaderDiv}>
            <div className="ph-item">
              <div className="ph-col-12">
                <div className="ph-row">
                  <div className="ph-col-4"></div>
                  <div className="ph-col-8 empty"></div>
                  <div className="ph-col-6"></div>
                  <div className="ph-col-6 empty"></div>
                  <div className="ph-col-12"></div>
                  <div className="ph-col-12"></div>
                  <div className="ph-col-12"></div>
                  <div className="ph-col-12"></div>
                </div>
              </div>
            </div>
            <div className="ph-item">
              <div className="ph-col-12">
                <div className="ph-row">
                  <div className="ph-col-4"></div>
                  <div className="ph-col-8 empty"></div>
                  <div className="ph-col-6"></div>
                  <div className="ph-col-6 empty"></div>
                  <div className="ph-col-12"></div>
                  <div className="ph-col-12"></div>
                  <div className="ph-col-12"></div>
                  <div className="ph-col-12"></div>
                </div>
              </div>
            </div>
          </div>

          <div className={mainDiv}>
            <h4 className="section-title-login">Privacy Page</h4>
            <p className="section-title-contact">{ReactHtmlParser(privacy)}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Privacy;
