import React, { useState } from "react";

const MegaMenu = ({ data }) => {
  // State to track the open/close state of each panel
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function to handle opening/closing of panels
  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle active index
  };

  return (
    <div className="accordionMenuDiv">
      <div className="accordionMenuDivInside">
        {data.map((category, index) => (
          <div key={index}>
            <button
              onClick={() => handleAccordionClick(index)} // Handle click to toggle panel
              className={`accordion ${activeIndex === index ? "active" : ""}`} // Add 'active' class when selected
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
                maxHeight:
                  activeIndex === index
                    ? `${category.subcategory_name.length * 50}px`
                    : "0",
              }} // Dynamically adjust panel height
            >
              <ul>
                {category.subcategory_name.map((subcategory, subIndex) => (
                  <li key={subIndex}>
                    <a href="#" className="accordionItem">
                      {subcategory.subcategory_name}
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

export default MegaMenu;
