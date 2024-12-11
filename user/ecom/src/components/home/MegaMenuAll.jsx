import React, { useState, useEffect } from "react";
import axios from "axios";
import AppURL from "../../api/AppURL";

const MegaMenuAll = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    axios
      .get(AppURL.AllCategoryDetails)
      .then((response) => setMenuData(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleAccordionClick = (event) => {
    event.currentTarget.classList.toggle("active");
    const panel = event.currentTarget.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };

  return (
    <div className="accordionMenuDivAll">
      <div className="accordionMenuDivInsideAll">
        {menuData.map((category, index) => (
          <div key={index}>
            <button onClick={handleAccordionClick} className="accordionAll">
              <img
                className="accordionMenuIconAll"
                src={category.category_image}
              />
              &nbsp; {category.category_name}
            </button>
            <div className="panelAll">
              <ul>
                {category.subcategory_name.map((sub, subIndex) => (
                  <li key={subIndex}>
                    <a href="#" className="accordionItemAll">
                      {sub.subcategory_name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenuAll;
