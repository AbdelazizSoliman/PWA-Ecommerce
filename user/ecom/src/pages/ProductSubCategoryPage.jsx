import React, { useEffect, useState, Fragment } from "react";
import AppURL from "../api/AppURL";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import SubCategory from "../components/ProductDetails/SubCategory";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductSubCategoryPage = () => {
  const { category, subcategory } = useParams(); // Extract route params using useParams
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
    axios
      .get(AppURL.ProductListBySubCategory(category, subcategory))
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching subcategory products:", error);
      });
  }, [category, subcategory]); // Dependency array ensures the effect runs on param changes

  return (
    <Fragment>
      <div className="Desktop">
        <NavMenuDesktop />
      </div>
      <div className="Mobile">
        <NavMenuMobile />
      </div>
      <SubCategory
        Category={category}
        SubCategory={subcategory}
        ProductData={productData}
      />
      <div className="Desktop">
        <FooterDesktop />
      </div>
      <div className="Mobile">
        <FooterMobile />
      </div>
    </Fragment>
  );
};

export default ProductSubCategoryPage;
