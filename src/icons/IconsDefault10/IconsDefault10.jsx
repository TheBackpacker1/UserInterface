import React from "react";
import PropTypes from "prop-types";

export const IconsDefault10 = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_101_150)">
        <path
          d="M12 2.66667H4C3.26362 2.66667 2.66667 3.26362 2.66667 4V12C2.66667 12.7364 3.26362 13.3333 4 13.3333H12C12.7364 13.3333 13.3333 12.7364 13.3333 12V4C13.3333 3.26362 12.7364 2.66667 12 2.66667Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.666667"
        />
        <path d="M2.66667 8H8" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.666667" />
        <path d="M8 10H13.3333" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.666667" />
        <path d="M8 6H13.3333" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.666667" />
        <path
          d="M8 2.66667V13.3333"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.666667"
        />
      </g>
      <defs>
        <clipPath id="clip0_101_150">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

IconsDefault10.propTypes = {
    className: PropTypes.string,
  };