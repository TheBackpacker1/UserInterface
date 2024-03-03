import React from "react";
import PropTypes from "prop-types";

export const IconsChanges1 = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_101_136)">
        <path
          d="M2.66667 8V6C2.66667 5.46957 2.87738 4.96086 3.25245 4.58579C3.62753 4.21071 4.13623 4 4.66667 4H13.3333M13.3333 4L11.3333 2M13.3333 4L11.3333 6"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.666667"
        />
        <path
          d="M13.3333 8V10C13.3333 10.5304 13.1226 11.0391 12.7475 11.4142C12.3725 11.7893 11.8638 12 11.3333 12H2.66667M2.66667 12L4.66667 14M2.66667 12L4.66667 10"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.666667"
        />
      </g>
      <defs>
        <clipPath id="clip0_101_136">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};
IconsChanges1.propTypes = {
  className: PropTypes.string,
};