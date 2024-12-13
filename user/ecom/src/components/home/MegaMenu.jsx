import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const MegaMenu = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMenuItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderMenuItems = () =>
    data.map((category, index) => {
      const isActive = activeIndex === index;
      return (
        <div key={index}>
          <button
            onClick={() => handleMenuItemClick(index)}
            className={`accordion ${isActive ? "active" : ""}`}
          >
            <img
              className="accordionMenuIcon"
              src={category.category_image}
              alt={category.category_name}
            />
            &nbsp; {category.category_name}
          </button>
          <div
            className="panel"
            style={{
              maxHeight: isActive
                ? `${category.subcategory_name.length * 40}px`
                : "0",
            }}
          >
            <ul>
              {category.subcategory_name.map((subCategory, subIndex) => (
                <li key={subIndex}>
                  <Link
                    to={`/productsubcategory/${category.category_name}/${subCategory.subcategory_name}`}
                    className="accordionItem"
                  >
                    {subCategory.subcategory_name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    });

  return (
    <div className="accordionMenuDiv">
      <div className="accordionMenuDivInside">{renderMenuItems()}</div>
    </div>
  );
};

export default MegaMenu;
