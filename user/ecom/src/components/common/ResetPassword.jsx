import React, { Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ForgetImage from "../../assets/images/forget.jpg";

const ResetPassword = () => {
  return (
    <Fragment>
      <Container>
        <Row className="p-2">
          <Col className="shadow-sm bg-white mt-2" md={12}>
            <Row className="text-center">
              {/* Form Section */}
              <Col className="d-flex justify-content-center" md={6}>
                <Form className="onboardForm">
                  <h4 className="section-title-login">RESET PASSWORD</h4>

                  <Form.Control
                    className="m-2"
                    type="text"
                    placeholder="Enter Your Pin Code"
                  />
                  <Form.Control
                    className="m-2"
                    type="email"
                    placeholder="Enter Your Email"
                  />
                  <Form.Control
                    className="m-2"
                    type="password"
                    placeholder="Your New Password"
                  />
                  <Form.Control
                    className="m-2"
                    type="password"
                    placeholder="Confirm Your Password"
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
                  alt="Reset Password"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ResetPassword;
