import { Icon } from "@iconify/react";
import React, { useState } from "react";

function Sort(props: {
  onByPriceClick?: () => void;
  onByRatingClick?: () => void;
  onByCountClick?: () => void;
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="sort" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
      <div className="sort__sort-title">Sort by:</div>
      <div className="sort__sort-icon">
        <Icon
          icon="ant-design:arrow-down-outlined"
          color="#546c87"
          width="30"
          height="30"
        />
      </div>
      {isDropdownOpen && (
        <div className="sort__sort-dropdown">
          <div
            onClick={props.onByPriceClick}
            className="sort__sort-dropdown-item"
          >
            By price
          </div>
          <div
            onClick={props.onByRatingClick}
            className="sort__sort-dropdown-item"
          >
            By rating
          </div>
          <div
            onClick={props.onByCountClick}
            className="sort__sort-dropdown-item"
          >
            By count
          </div>
        </div>
      )}
    </div>
  );
}

export default Sort;
