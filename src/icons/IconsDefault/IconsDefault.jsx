import React from "react";
import PropTypes from "prop-types";

export const IconsDefault = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 17 16"
      width="17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_101_295)">
        <path
          d="M9.83333 5.33341V4.00008C9.83333 3.64646 9.69286 3.30732 9.44281 3.05727C9.19276 2.80722 8.85362 2.66675 8.5 2.66675H3.83333C3.47971 2.66675 3.14057 2.80722 2.89052 3.05727C2.64048 3.30732 2.5 3.64646 2.5 4.00008V12.0001C2.5 12.3537 2.64048 12.6928 2.89052 12.9429C3.14057 13.1929 3.47971 13.3334 3.83333 13.3334H8.5C8.85362 13.3334 9.19276 13.1929 9.44281 12.9429C9.69286 12.6928 9.83333 12.3537 9.83333 12.0001V10.6667"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.666667"
        />
        <path
          d="M5.16663 8H14.5M14.5 8L12.5 6M14.5 8L12.5 10"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.666667"
        />
      </g>
      <defs>
        <clipPath id="clip0_101_295">
          <rect fill="white" height="16" transform="translate(0.5)" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};
IconsDefault.propTypes = {
    className: PropTypes.string,
  };