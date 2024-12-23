import React, { Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginImage from "../../assets/images/login.png";

const Register = () => {
  return (
    <Fragment>
      <Container>
        <Row className="p-2">
          <Col className="shadow-sm bg-white mt-2" md={12}>
            <Row className="text-center">
              {/* Form Section */}
              <Col className="d-flex justify-content-center" md={6}>
                <Form className="onboardForm">
                  <h4 className="section-title-login">USER REGISTER</h4>

                  <Form.Control
                    className="m-2"
                    type="text"
                    placeholder="Enter Your Name"
                  />
                  <Form.Control
                    className="m-2"
                    type="email"
                    placeholder="Enter Your Email"
                  />
                  <Form.Control
                    className="m-2"
                    type="password"
                    placeholder="Enter Your Password"
                  />
                  <Form.Control
                    className="m-2"
                    type="password"
                    placeholder="Confirm Your Password"
                  />

                  <Button className="btn btn-block m-2 site-btn-login">
                    Sign Up
                  </Button>
                  <hr />

                  <p>
                    <b>Forget My Password? </b>
                    <Link to="/forget">
                      <b>Forget Password</b>
                    </Link>
                  </p>

                  <p>
                    <b>Already Have An Account? </b>
                    <Link to="/login">
                      <b>Login</b>
                    </Link>
                  </p>
                </Form>
              </Col>

              {/* Image Section */}
              <Col className="p-0 Desktop m-0" md={6}>
                <img
                  className="onboardBanner"
                  src={LoginImage}
                  alt="User Registration"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Register;
