import React from "react";
import PropTypes from "prop-types";

export const IconsChanges = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="17"
      viewBox="0 0 16 17"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_245_35)">
        <path
          d="M2.66663 8.5V6.5C2.66663 5.96957 2.87734 5.46086 3.25241 5.08579C3.62749 4.71071 4.13619 4.5 4.66663 4.5H13.3333M13.3333 4.5L11.3333 2.5M13.3333 4.5L11.3333 6.5"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.3333 8.5V10.5C13.3333 11.0304 13.1226 11.5391 12.7475 11.9142C12.3724 12.2893 11.8637 12.5 11.3333 12.5H2.66663M2.66663 12.5L4.66663 14.5M2.66663 12.5L4.66663 10.5"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_245_35">
          <rect fill="white" height="16" transform="translate(0 0.5)" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};
IconsChanges.propTypes = {
    className: PropTypes.string,
  };