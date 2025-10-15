import React from "react";

const SliderLoading = ({ show }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="row">
      <div className="col-3">
        <div className="ph-row">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="ph-col-12" />
          ))}
        </div>
      </div>
      <div className="col-9">
        <div className="ph-picture" />
      </div>
    </div>
  );
};

export default SliderLoading;
