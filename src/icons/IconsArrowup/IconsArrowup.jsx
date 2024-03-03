import React from "react";
import PropTypes from "prop-types";

export const IconsArrowup = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_101_195)">
        <path d="M8 3.33333V12.6667" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.6667 6L8 3.33333" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.33333 6L8 3.33333" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_101_195">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};
IconsArrowup.propTypes = {
    className: PropTypes.string,
  };