import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Sorts } from "../Helpers/Enums";

function Sort(props: {
  onByPriceClick?: () => void;
  onByRatingClick?: () => void;
  onByCountClick?: () => void;
  sortType: string;
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="sort" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
      <div className="sort__sort-title">
        {props.sortType === "" && "Sort by:"}
        {props.sortType === Sorts.byPrice && "by Price"}
        {props.sortType === Sorts.byRate && "by Rate"}
        {props.sortType === Sorts.byCount && "by Count"}
      </div>
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
            className={`sort__sort-dropdown-item ${
              props.sortType === Sorts.byPrice &&
              "sort__sort-dropdown-item--selected"
            }`}
          >
            By price
          </div>
          <div
            onClick={props.onByRatingClick}
            className={`sort__sort-dropdown-item ${
              props.sortType === Sorts.byRate &&
              "sort__sort-dropdown-item--selected"
            }`}
          >
            By rating
          </div>
          <div
            onClick={props.onByCountClick}
            className={`sort__sort-dropdown-item ${
              props.sortType === Sorts.byCount &&
              "sort__sort-dropdown-item--selected"
            }`}
          >
            By count
          </div>
        </div>
      )}
    </div>
  );
}

export default Sort;
