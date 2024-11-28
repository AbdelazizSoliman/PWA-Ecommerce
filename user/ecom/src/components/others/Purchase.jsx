import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
export class Purchase extends Component {
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
              <h4 className="section-title-login">Purchase Page </h4>
              <p className="section-title-contact">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                hic fugit, itaque molestias temporibus voluptate placeat impedit
                suscipit. Reprehenderit consectetur totam corrupti. Quo,
                voluptatum quam aperiam eius ea explicabo numquam.
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
export default Purchase;
