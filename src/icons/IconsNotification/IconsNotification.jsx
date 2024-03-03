import React from "react";
import PropTypes from "prop-types";

export const IconsNotification = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_101_394)">
        <path
          d="M6.66666 3.33333C6.66666 2.97971 6.80714 2.64057 7.05719 2.39052C7.30724 2.14048 7.64638 2 8 2C8.35362 2 8.69276 2.14048 8.94281 2.39052C9.19285 2.64057 9.33333 2.97971 9.33333 3.33333C10.0989 3.69535 10.7516 4.25888 11.2214 4.96353C11.6911 5.66818 11.9603 6.48738 12 7.33333V9.33333C12.0502 9.7478 12.197 10.1447 12.4285 10.4921C12.6601 10.8395 12.97 11.1276 13.3333 11.3333H2.66666C3.02996 11.1276 3.33987 10.8395 3.57146 10.4921C3.80304 10.1447 3.94983 9.7478 4 9.33333V7.33333C4.0397 6.48738 4.30886 5.66818 4.77863 4.96353C5.2484 4.25888 5.90106 3.69535 6.66666 3.33333Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 11.3334V12C6 12.5305 6.21071 13.0392 6.58579 13.4143C6.96086 13.7893 7.46957 14 8 14C8.53043 14 9.03914 13.7893 9.41421 13.4143C9.78929 13.0392 10 12.5305 10 12V11.3334"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_101_394">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};
IconsNotification.propTypes = {
    className: PropTypes.string,
  };