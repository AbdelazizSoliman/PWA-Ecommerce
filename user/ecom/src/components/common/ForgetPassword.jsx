import React, { Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ForgetImage from "../../assets/images/forget.jpg";

const ForgetPassword = () => {
  return (
    <Fragment>
      <Container>
        <Row className="p-2">
          <Col className="shadow-sm bg-white mt-2" md={12}>
            <Row className="text-center">
              {/* Form Section */}
              <Col className="d-flex justify-content-center" md={6}>
                <Form className="onboardForm">
                  <h4 className="section-title-login">FORGET PASSWORD?</h4>
                  <Form.Control
                    type="email"
                    placeholder="Enter Your Email"
                    className="m-2"
                  />
                  <Button className="btn btn-block m-2 site-btn-login">
                    Reset Password
                  </Button>
                </Form>
              </Col>

              {/* Image Section */}
              <Col className="p-0 Desktop m-0" md={6}>
                <img
                  className="onboardBanner"
                  src={ForgetImage}
                  alt="Forget Password"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ForgetPassword;
