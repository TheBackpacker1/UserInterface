import React from "react";
import PropTypes from "prop-types";

export const IconsDefault13 = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="17"
      viewBox="0 0 16 17"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_101_179)">
        <path
          d="M8.59669 6.5H7.40335C6.9965 6.5 6.66669 6.82982 6.66669 7.23667V13.7633C6.66669 14.1702 6.9965 14.5 7.40335 14.5H8.59669C9.00354 14.5 9.33335 14.1702 9.33335 13.7633V7.23667C9.33335 6.82982 9.00354 6.5 8.59669 6.5Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.2633 2.5H12.07C11.6631 2.5 11.3333 2.82982 11.3333 3.23667V13.7633C11.3333 14.1702 11.6631 14.5 12.07 14.5H13.2633C13.6702 14.5 14 14.1702 14 13.7633V3.23667C14 2.82982 13.6702 2.5 13.2633 2.5Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.33333 14.5C4.06971 14.5 4.66667 13.903 4.66667 13.1667C4.66667 12.4303 4.06971 11.8333 3.33333 11.8333C2.59695 11.8333 2 12.4303 2 13.1667C2 13.903 2.59695 14.5 3.33333 14.5Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_101_179">
          <rect fill="white" height="16" transform="translate(0 0.5)" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

IconsDefault13.propTypes = {
    className: PropTypes.string,
  };