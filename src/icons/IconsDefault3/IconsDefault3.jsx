import React from "react";
import PropTypes from "prop-types";

export const IconsDefault3 = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="17"
      viewBox="0 0 16 17"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_101_176)">
        <path
          d="M11.3334 5.83333V3.83333C11.3334 3.65652 11.2631 3.48695 11.1381 3.36193C11.0131 3.2369 10.8435 3.16666 10.6667 3.16666H4.00002C3.6464 3.16666 3.30726 3.30714 3.05721 3.55719C2.80716 3.80724 2.66669 4.14638 2.66669 4.5M2.66669 4.5C2.66669 4.85362 2.80716 5.19276 3.05721 5.44281C3.30726 5.69286 3.6464 5.83333 4.00002 5.83333H12C12.1768 5.83333 12.3464 5.90357 12.4714 6.02859C12.5964 6.15362 12.6667 6.32319 12.6667 6.5V8.5M2.66669 4.5V12.5C2.66669 12.8536 2.80716 13.1928 3.05721 13.4428C3.30726 13.6929 3.6464 13.8333 4.00002 13.8333H12C12.1768 13.8333 12.3464 13.7631 12.4714 13.6381C12.5964 13.513 12.6667 13.3435 12.6667 13.1667V11.1667"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.3333 8.5V11.1667H10.6666C10.313 11.1667 9.97389 11.0262 9.72384 10.7761C9.47379 10.5261 9.33331 10.187 9.33331 9.83333C9.33331 9.47971 9.47379 9.14057 9.72384 8.89052C9.97389 8.64048 10.313 8.5 10.6666 8.5H13.3333Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_101_176">
          <rect fill="white" height="16" transform="translate(0 0.5)" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

IconsDefault3.propTypes = {
  className: PropTypes.string,
};