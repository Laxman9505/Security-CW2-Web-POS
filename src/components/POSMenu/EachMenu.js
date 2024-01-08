import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

function EachMenu({ category, itemClickHandler, activeCategory, itemId }) {
  const visibility = React.useContext(VisibilityContext);
  return (
    <li className="nav-item" role="presentation" itemID={itemId}>
      <button
        className={`nav-link ${
          category?.categoryId === activeCategory?.categoryId ? "active" : ""
        }`}
        data-bs-toggle="tab"
        onClick={(e) => {
          itemClickHandler(visibility);
        }}
        type="button"
        role="tab"
      >
        {category.categoryName}
      </button>
    </li>
  );
}

export default EachMenu;
