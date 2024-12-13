import React, { useEffect, useState } from "react";
import AppURL from "../../api/AppURL";
import axios from "axios";
import { Link } from "react-router-dom";

const MegaMenuAll = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    axios
      .get(AppURL.AllCategoryDetails)
      .then((response) => {
        setMenuData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const handleMenuItemClick = (event) => {
    event.target.classList.toggle("active");
    const panel = event.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    }
  };

  const renderMenuItems = () =>
    menuData.map((category, index) => (
      <div key={index}>
        <button onClick={handleMenuItemClick} className="accordionAll">
          <img
            className="accordionMenuIconAll"
            src={category.category_image}
            alt={category.category_name}
          />
          &nbsp; {category.category_name}
        </button>
        <div className="panelAll">
          <ul>
            {category.subcategory_name.map((subcategory, subIndex) => (
              <li key={subIndex}>
                <Link
                  to={`/productsubcategory/${category.category_name}/${subcategory.subcategory_name}`}
                  className="accordionItem"
                >
                  {subcategory.subcategory_name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ));

  return (
    <div className="accordionMenuDivAll">
      <div className="accordionMenuDivInsideAll">{renderMenuItems()}</div>
    </div>
  );
};

export default MegaMenuAll;
