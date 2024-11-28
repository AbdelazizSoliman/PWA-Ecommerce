import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
class Refund extends Component {
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
              <h4 className="section-title-login">Refund Page </h4>
              <p className="section-title-contact">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt neque culpa illum natus quis saepe, cum assumenda
                magnam fugiat repellendus quod corrupti in dolor ea sint
                necessitatibus, odio impedit eaque!
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
export default Refund;
