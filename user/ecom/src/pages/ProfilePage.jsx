import React, { useEffect } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import Profile from "../components/common/Profile";

const ProfilePage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const isMobile = window.innerWidth <= 768; // or use a better method to detect screen size

  return (
    <>
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
      <Profile />
    </>
  );
};

export default ProfilePage;
