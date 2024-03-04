import React from "react";
import PropTypes from "prop-types";

export const IconsDefault9 = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_101_161)">
        <path
          d="M8.59667 6H7.40333C6.99648 6 6.66667 6.32982 6.66667 6.73667V13.2633C6.66667 13.6702 6.99648 14 7.40333 14H8.59667C9.00352 14 9.33333 13.6702 9.33333 13.2633V6.73667C9.33333 6.32982 9.00352 6 8.59667 6Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.666667"
        />
        <path
          d="M13.2633 2H12.07C11.6631 2 11.3333 2.32982 11.3333 2.73667V13.2633C11.3333 13.6702 11.6631 14 12.07 14H13.2633C13.6702 14 14 13.6702 14 13.2633V2.73667C14 2.32982 13.6702 2 13.2633 2Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.666667"
        />
        <path
          d="M3.33333 14C4.06971 14 4.66667 13.403 4.66667 12.6667C4.66667 11.9303 4.06971 11.3333 3.33333 11.3333C2.59695 11.3333 2 11.9303 2 12.6667C2 13.403 2.59695 14 3.33333 14Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.666667"
        />
      </g>
      <defs>
        <clipPath id="clip0_101_161">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};


IconsDefault9.propTypes = {
  className: PropTypes.string,
};