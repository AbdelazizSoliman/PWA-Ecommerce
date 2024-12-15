import React, { useState, useEffect } from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import AppURL from "../../api/AppURL";
import ReactHtmlParser from "html-react-parser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Purchase = () => {
  const [purchase, setPurchase] = useState("");
  const [loaderDiv, setLoaderDiv] = useState("");
  const [mainDiv, setMainDiv] = useState("d-none");

  useEffect(() => {
    const SiteInfoPurchase = sessionStorage.getItem("AllSiteInfo");

    if (SiteInfoPurchase === null) {
      axios
        .get(AppURL.AllSiteInfo)
        .then((response) => {
          const StatusCode = response.status;
          if (StatusCode === 200) {
            const JsonData = response.data[0]["parchase_guide"];
            setPurchase(JsonData);
            setLoaderDiv("d-none");
            setMainDiv("");
            sessionStorage.setItem("SiteInfoPurchase", JsonData);
          } else {
            toast.error("Something Went Wrong", { position: "bottom-center" });
          }
        })
        .catch((error) => {
          toast.error("Something Went Wrong", { position: "bottom-center" });
        });
    } else {
      setPurchase(SiteInfoPurchase);
      setLoaderDiv("d-none");
      setMainDiv("");
    }
  }, []);

  return (
    <Container>
      <div className="breadbody">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/purchase">Purchase</Link>
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
            <h4 className="section-title-login">Purchase Page</h4>
            <p className="section-title-contact">{ReactHtmlParser(purchase)}</p>
          </div>
        </Col>
      </Row>

      <ToastContainer />
    </Container>
  );
};

export default Purchase;
