import React, { useState, useEffect, Fragment } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Spinner,
} from "react-bootstrap";
import AppURL from "../../api/AppURL";
import axios from "axios";

const Notification = () => {
  const [notificationData, setNotificationData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [notificationDetails, setNotificationDetails] = useState({
    title: "",
    message: "",
    date: "",
  });
  const [error, setError] = useState(false);

  // Fetch notifications on component mount
  useEffect(() => {
    axios
      .get(AppURL.NotificationHistory)
      .then((response) => {
        setNotificationData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching notifications:", error);
        setError(true);
        setIsLoading(false);
      });
  }, []); // Empty dependency array ensures it runs only once on mount

  const handleShow = (notification) => {
    setShow(true);
    setNotificationDetails({
      title: notification.title,
      message: notification.message,
      date: notification.date,
    });
  };

  const handleClose = () => setShow(false);

  // Loading state
  if (isLoading) {
    return (
      <Container className="text-center">
        <Spinner animation="border" variant="primary" />
        <p>Loading notifications...</p>
      </Container>
    );
  }

  // Error state
  if (error) {
    return (
      <Container className="text-center">
        <p className="text-danger">
          Failed to load notifications. Please try again later.
        </p>
      </Container>
    );
  }

  // Notification list
  const MyView =
    notificationData.length > 0 ? (
      notificationData.map((notification, i) => (
        <Col className="p-1" md={6} lg={6} sm={12} xs={12} key={i}>
          <Card
            onClick={() => handleShow(notification)}
            className="notification-card"
          >
            <Card.Body>
              <h6>{notification.title}</h6>
              <p className="py-1 px-0 text-primary m-0">
                <i className="fa fa-bell"></i> Date: {notification.date} |
                Status: Unread
              </p>
              <Button
                onClick={() => handleShow(notification)}
                className="btn btn-danger"
              >
                Details
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))
    ) : (
      <p className="text-center">No notifications available</p>
    );

  return (
    <Fragment>
      <Container className="TopSection">
        <Row>{MyView}</Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h6>
            <i className="fa fa-bell"></i> Date: {notificationDetails.date}
          </h6>
        </Modal.Header>
        <Modal.Body>
          <h6>{notificationDetails.title}</h6>
          <p>{notificationDetails.message}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default Notification;
