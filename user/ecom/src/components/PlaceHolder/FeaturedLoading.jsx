import React from "react";
import PlaceholderGrid from "./PlaceholderGrid";

const FeaturedLoading = ({ show }) => (
  <PlaceholderGrid
    show={show}
    title="FEATURED PRODUCT"
    columnClassName="col-lg-2 col-md-2 col-sm-4 col-6 p-1"
    itemCount={6}
  />
);

export default FeaturedLoading;
