import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import validation from "../../validation/validation";
import axios from "axios";
import AppURL from "../../api/AppURL";
import { ToastContainer, toast } from "react-toastify";
import parse from "html-react-parser";
import "react-toastify/dist/ReactToastify.css";

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [siteInfo, setSiteInfo] = useState(null);

  useEffect(() => {
    axios
      .get(AppURL.AllSiteInfo)
      .then((response) => {
        setSiteInfo(response.data?.[0] ?? null);
      })
      .catch((error) => {
        console.error("Error fetching site information:", error);
      });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.message.trim()) {
      toast.error("Please write your message");
      return;
    }
    if (!formData.name.trim()) {
      toast.error("Please write your name");
      return;
    }
    if (!formData.email.trim()) {
      toast.error("Please write your email");
      return;
    }
    if (!validation.NameRegx.test(formData.name)) {
      toast.error("Invalid name");
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await axios.post(AppURL.PostContact, formData);
      if (response.status === 200 && response.data === 1) {
        toast.success("Message sent successfully");
        setFormData(INITIAL_FORM_STATE);
      } else {
        toast.error("We could not send your message. Please try again.");
      }
    } catch (error) {
      const serverErrors = error.response?.data?.errors;
      if (serverErrors) {
        toast.error(serverErrors.join("\n"));
      } else {
        toast.error("We could not send your message. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const { name, email, message } = formData;
  const addressMarkup = siteInfo?.address
    ? parse(siteInfo.address)
    : parse(
        "1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104 <br /> Email: support@example.com",
      );

  return (
    <>
      <Container>
        <Row className="p-2">
          <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
            <Row className="text-center">
              <Col
                className="d-flex justify-content-center"
                md={6}
                lg={6}
                sm={12}
                xs={12}
              >
                <Form onSubmit={handleSubmit} className="onboardForm">
                  <h4 className="section-title-login">CONTACT WITH US</h4>
                  <h6 className="section-sub-title">Please contact with us</h6>

                  <Form.Control
                    name="name"
                    value={name}
                    onChange={handleChange}
                    className="form-control m-2"
                    type="text"
                    placeholder="Enter your name"
                  />

                  <Form.Control
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className="form-control m-2"
                    type="email"
                    placeholder="Enter email"
                  />

                  <Form.Control
                    name="message"
                    value={message}
                    onChange={handleChange}
                    className="form-control m-2"
                    as="textarea"
                    rows={3}
                    placeholder="Message"
                  />

                  <Button
                    type="submit"
                    className="btn btn-block m-2 site-btn-login"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                  </Button>
                </Form>
              </Col>

              <Col className="p-0 Desktop m-0" md={6} lg={6} sm={12} xs={12}>
                <div className="section-title-contact">{addressMarkup}</div>

                <iframe
                  title="Office location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162771.1102477064!2d-74.10054944459704!3d40.70681480276415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1627241390779!5m2!1sen!2sbd"
                  width="550"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </>
  );
};

export default Contact;
