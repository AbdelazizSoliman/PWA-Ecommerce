import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AppURL from "../api/AppURL";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import axios from "axios";
import SearchList from "../components/ProductDetails/SearchList";

const SearchPage = () => {
  const { searchkey } = useParams(); // Get the search key from the route parameters
  const [searchKey, setSearchKey] = useState(searchkey);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    window.scroll(0, 0); // Scroll to the top when the component is mounted

    // Fetch product data based on the search key
    axios
      .get(AppURL.ProductBySearch(searchKey))
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [searchKey]); // Re-run the effect when the search key changes

  return (
    <Fragment>
      <div className="Desktop">
        <NavMenuDesktop />
      </div>
      <div className="Mobile">
        <NavMenuMobile />
      </div>
      <SearchList SearchKey={searchKey} ProductData={productData} />
      <div className="Desktop">
        <FooterDesktop />
      </div>
      <div className="Mobile">
        <FooterMobile />
      </div>
    </Fragment>
  );
};

export default SearchPage;
