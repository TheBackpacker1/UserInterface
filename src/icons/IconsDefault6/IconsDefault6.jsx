import React from "react";
import PropTypes from "prop-types";

export const IconsDefault6 = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_101_166)">
        <path
          d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.666667"
        />
        <path
          d="M8 8.66667C9.10457 8.66667 10 7.77124 10 6.66667C10 5.5621 9.10457 4.66667 8 4.66667C6.89543 4.66667 6 5.5621 6 6.66667C6 7.77124 6.89543 8.66667 8 8.66667Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.666667"
        />
        <path
          d="M4.112 12.566C4.27701 12.0168 4.61465 11.5355 5.07483 11.1933C5.53502 10.8512 6.09323 10.6665 6.66667 10.6667H9.33333C9.90751 10.6665 10.4664 10.8516 10.9269 11.1945C11.3874 11.5374 11.725 12.0199 11.8893 12.57"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.666667"
        />
      </g>
      <defs>
        <clipPath id="clip0_101_166">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

IconsDefault6.propTypes = {
  className: PropTypes.string,
};