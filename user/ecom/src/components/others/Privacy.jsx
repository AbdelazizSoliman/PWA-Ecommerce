import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
class Privacy extends Component {
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
              <h4 className="section-title-login">Privacy Page </h4>
              <p className="section-title-contact">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
                fugiat, id explicabo numquam dolore totam quas unde quod
                repellendus quos voluptatibus similique magni nisi illo at
                dolorem repudiandae commodi ad.
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
export default Privacy;
