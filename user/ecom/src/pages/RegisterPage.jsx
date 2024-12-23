import React, { useEffect } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import Register from "../components/common/Register";

const RegisterPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const isMobile = window.innerWidth <= 768; // or use a better method to detect screen size

  return (
    <>
      <Register />
      {isMobile ? (
        <>
          <NavMenuMobile />
          <FooterMobile />
        </>
      ) : (
        <>
          <NavMenuDesktop />
          <FooterDesktop />
        </>
      )}
    </>
  );
};

export default RegisterPage;
