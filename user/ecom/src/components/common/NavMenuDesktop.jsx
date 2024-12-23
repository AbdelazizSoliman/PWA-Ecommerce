import React, { useState, Fragment } from "react";
import { Navbar, Container, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"; // useNavigate instead of useHistory
import MegaMenuAll from "../home/MegaMenuAll";
import Logo from "../../assets/images/logo.png";
import Bars from "../../assets/images/bars.png";

const NavMenuDesktop = () => {
  const [sideNavState, setSideNavState] = useState("sideNavClose");
  const [contentOverState, setContentOverState] = useState(
    "ContentOverlayClose"
  );
  const [searchKey, setSearchKey] = useState("");
  const navigate = useNavigate(); // useNavigate hook

  const sideNavOpenClose = () => {
    if (sideNavState === "sideNavOpen") {
      setSideNavState("sideNavClose");
      setContentOverState("ContentOverlayClose");
    } else {
      setSideNavState("sideNavOpen");
      setContentOverState("ContentOverlayOpen");
    }
  };

  const menuBarClickHandler = () => {
    sideNavOpenClose();
  };

  const contentOverlayClickHandler = () => {
    sideNavOpenClose();
  };

  const searchOnChange = (event) => {
    setSearchKey(event.target.value);
  };

  const searchOnClick = () => {
    if (searchKey.length >= 2) {
      navigate(`/productbysearch/${searchKey}`); // Replaced history.push with navigate
    }
  };

  return (
    <Fragment>
      <div className="TopSectionDown">
        <Navbar fixed={"top"} className="navbar" bg="light">
          <Container
            fluid={"true"}
            className="fixed-top shadow-sm p-2 mb-0 bg-white"
          >
            <Row>
              <Col lg={4} md={4} sm={12} xs={12}>
                <img
                  onClick={menuBarClickHandler}
                  className="bar-img"
                  src={Bars}
                  alt="Menu"
                />
                <Link to="/">
                  <img className="nav-logo" src={Logo} alt="Logo" />
                </Link>
              </Col>

              <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                <div className="input-group w-100">
                  <input
                    type="text"
                    className="form-control"
                    onChange={searchOnChange}
                    placeholder="Search..."
                  />
                  <Button
                    type="button"
                    className="btn site-btn"
                    onClick={searchOnClick}
                  >
                    <i className="fa fa-search"> </i>
                  </Button>
                </div>
              </Col>

              <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                <Link to="/favourite" className="btn">
                  <i className="fa h4 fa-heart"></i>
                  <sup>
                    <span className="badge text-white bg-danger">3</span>
                  </sup>
                </Link>

                <Link to="/notification" className="btn">
                  <i className="fa h4 fa-bell"></i>
                  <sup>
                    <span className="badge text-white bg-danger">5</span>
                  </sup>
                </Link>
                <a className="btn" href="#!">
                  <i className="fa h4 fa-mobile-alt"></i>
                </a>
                <Link to="/login" className="h4 btn">
                  LOGIN
                </Link>

                <Link to="/cart" className="cart-btn">
                  <i className="fa fa-shopping-cart"></i> 3 Items
                </Link>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </div>

      <div className={sideNavState}>
        <MegaMenuAll />
      </div>

      <div
        onClick={contentOverlayClickHandler}
        className={contentOverState}
      ></div>
    </Fragment>
  );
};

export default NavMenuDesktop;
