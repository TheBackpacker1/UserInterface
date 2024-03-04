import React from "react";
import PropTypes from "prop-types";

export const IconsDefault1 = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_101_191)">
        <path
          d="M9.33333 5.33333V4C9.33333 3.64638 9.19286 3.30724 8.94281 3.05719C8.69276 2.80714 8.35362 2.66667 8 2.66667H3.33333C2.97971 2.66667 2.64057 2.80714 2.39052 3.05719C2.14048 3.30724 2 3.64638 2 4V12C2 12.3536 2.14048 12.6928 2.39052 12.9428C2.64057 13.1929 2.97971 13.3333 3.33333 13.3333H8C8.35362 13.3333 8.69276 13.1929 8.94281 12.9428C9.19286 12.6928 9.33333 12.3536 9.33333 12V10.6667"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.666667"
        />
        <path
          d="M4.66667 8H14M14 8L12 6M14 8L12 10"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.666667"
        />
      </g>
      <defs>
        <clipPath id="clip0_101_191">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};
IconsDefault1.propTypes = {
    className: PropTypes.string,
  };