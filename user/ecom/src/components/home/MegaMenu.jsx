import React, { useEffect } from "react";

const MegaMenu = ({ data }) => {
  // Define the event handler function separately
  const handleAccordionClick = (event) => {
    // Toggle the active class on the clicked accordion button
    event.currentTarget.classList.toggle("active");

    // Get the panel next to the clicked accordion button
    const panel = event.currentTarget.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null; // Close the panel
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px"; // Open the panel with smooth transition
    }
  };

  useEffect(() => {
    const acc = document.getElementsByClassName("accordion");

    // Add event listeners
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", handleAccordionClick);
    }

    // Cleanup function to remove event listeners on component unmount
    return () => {
      for (let i = 0; i < acc.length; i++) {
        acc[i].removeEventListener("click", handleAccordionClick);
      }
    };
  }, []); // Empty dependency array to run only on mount and unmount

  return (
    <div className="accordionMenuDiv">
      <div className="accordionMenuDivInside">
        <button className="accordion">
          <img
            className="accordionMenuIcon"
            src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
          />
          &nbsp; Men's Clothing
        </button>
        <div className="panel">
          <ul>
            <li>
              <a href="#" className="accordionItem">
                {" "}
                Mans Tshirt 1
              </a>
            </li>
            <li>
              <a href="#" className="accordionItem">
                {" "}
                Mans Tshirt 2
              </a>
            </li>
          </ul>
        </div>
        <button className="accordion">
          <img
            className="accordionMenuIcon"
            src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
          />
          &nbsp; Men's Clothing
        </button>
        <div className="panel">
          <ul>
            <li>
              <a href="#" className="accordionItem">
                {" "}
                Mans Tshirt 1
              </a>
            </li>
            <li>
              <a href="#" className="accordionItem">
                {" "}
                Mans Tshirt 2
              </a>
            </li>
          </ul>
        </div>
        <button className="accordion">
          <img
            className="accordionMenuIcon"
            src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
          />
          &nbsp; Men's Clothing
        </button>
        <div className="panel">
          <ul>
            <li>
              <a href="#" className="accordionItem">
                {" "}
                Mans Tshirt 1
              </a>
            </li>
            <li>
              <a href="#" className="accordionItem">
                {" "}
                Mans Tshirt 2
              </a>
            </li>
          </ul>
        </div>
        <button className="accordion">
          <img
            className="accordionMenuIcon"
            src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
          />
          &nbsp; Men's Clothing
        </button>
        <div className="panel">
          <ul>
            <li>
              <a href="#" className="accordionItem">
                {" "}
                Mans Tshirt 1
              </a>
            </li>
            <li>
              <a href="#" className="accordionItem">
                {" "}
                Mans Tshirt 2
              </a>
            </li>
          </ul>
        </div>
        <button className="accordion">
          <img
            className="accordionMenuIcon"
            src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
          />
          &nbsp; Men's Clothing
        </button>
        <div className="panel">
          <ul>
            <li>
              <a href="#" className="accordionItem">
                {" "}
                Mans Tshirt 1
              </a>
            </li>
            <li>
              <a href="#" className="accordionItem">
                {" "}
                Mans Tshirt 2
              </a>
            </li>
          </ul>
        </div>
        <button className="accordion">
          <img
            className="accordionMenuIcon"
            src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
          />
          &nbsp; Men's Clothing
        </button>
        <div className="panel">
          <ul>
            <li>
              <a href="#" className="accordionItem">
                {" "}
                Mans Tshirt 1
              </a>
            </li>
            <li>
              <a href="#" className="accordionItem">
                {" "}
                Mans Tshirt 2
              </a>
            </li>
          </ul>
        </div>
        <button className="accordion">
          <img
            className="accordionMenuIcon"
            src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
          />
          &nbsp; Men's Clothing
        </button>
        <div className="panel">
          <ul>
            <li>
              <a href="#" className="accordionItem">
                {" "}
                Mans Tshirt 1
              </a>
            </li>
            <li>
              <a href="#" className="accordionItem">
                {" "}
                Mans Tshirt 2
              </a>
            </li>
          </ul>
        </div>
        <button className="accordion">
          <img
            className="accordionMenuIcon"
            src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
          />
          &nbsp; Men's Clothing
        </button>
        <div className="panel">
          <ul>
            <li>
              <a href="#" className="accordionItem">
                {" "}
                Mans Tshirt 1
              </a>
            </li>
            <li>
              <a href="#" className="accordionItem">
                {" "}
                Mans Tshirt 2
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
