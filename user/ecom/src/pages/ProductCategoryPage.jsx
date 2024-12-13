import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppURL from "../api/AppURL";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import Category from "../components/ProductDetails/Category";
import axios from "axios";

const ProductCategoryPage = () => {
  const { category } = useParams();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        window.scrollTo(0, 0); // Ensure the page starts at the top
        const response = await axios.get(
          AppURL.ProductListByCategory(category)
        );
        setProductData(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <Fragment>
      <div className="Desktop">
        <NavMenuDesktop />
      </div>
      <div className="Mobile">
        <NavMenuMobile />
      </div>
      <Category Category={category} ProductData={productData} />
      <div className="Desktop">
        <FooterDesktop />
      </div>
      <div className="Mobile">
        <FooterMobile />
      </div>
    </Fragment>
  );
};

export default ProductCategoryPage;
