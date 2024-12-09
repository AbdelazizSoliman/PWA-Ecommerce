import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
class About extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <h4 className="section-title-login">About Us Page </h4>
              <p className="section-title-contact">
                Hi! I'm Adelaziz Soliman. I'm a web developer
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
export default About;
