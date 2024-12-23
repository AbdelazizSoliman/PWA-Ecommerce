import React, { useEffect, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import ForgetPassword from "../components/common/ForgetPassword";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";

const ForgetPasswordPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      {/* Desktop Navigation */}
      <div className="Desktop">
        <NavMenuDesktop />
      </div>

      {/* Mobile Navigation */}
      <div className="Mobile">
        <NavMenuMobile />
      </div>

      {/* Forget Password Component */}
      <ForgetPassword />

      {/* Desktop Footer */}
      <div className="Desktop">
        <FooterDesktop />
      </div>

      {/* Mobile Footer */}
      <div className="Mobile">
        <FooterMobile />
      </div>
    </Fragment>
  );
};

export default ForgetPasswordPage;
