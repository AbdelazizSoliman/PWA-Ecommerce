import React from "react";
import PlaceholderGrid from "./PlaceholderGrid";

const NewArrivalLoading = ({ show }) => (
  <PlaceholderGrid
    show={show}
    title="NEW ARRIVAL"
    columnClassName="col-lg-3 col-md-3 col-sm-4 col-6 p-1"
    itemCount={4}
  />
);

export default NewArrivalLoading;
