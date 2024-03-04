import React from "react";
import PropTypes from "prop-types";

export const IconsDefault11 = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="17"
      viewBox="0 0 16 17"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_101_173)">
        <path
          d="M12 3.16666H4.00002C3.26364 3.16666 2.66669 3.76362 2.66669 4.5V12.5C2.66669 13.2364 3.26364 13.8333 4.00002 13.8333H12C12.7364 13.8333 13.3334 13.2364 13.3334 12.5V4.5C13.3334 3.76362 12.7364 3.16666 12 3.16666Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M2.66669 8.5H8.00002" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 10.5H13.3333" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 6.5H13.3333" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 3.16666V13.8333" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_101_173">
          <rect fill="white" height="16" transform="translate(0 0.5)" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

IconsDefault11.propTypes = {
    className: PropTypes.string,
  };