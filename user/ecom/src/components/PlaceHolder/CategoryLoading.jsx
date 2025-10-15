import React from "react";
import PlaceholderGrid from "./PlaceholderGrid";

const CategoryLoading = ({ show }) => (
  <PlaceholderGrid
    show={show}
    title="CATEGORIES"
    columnClassName="col-lg-3 col-md-3 col-sm-4 col-6 p-1"
    itemCount={8}
  />
);

export default CategoryLoading;
