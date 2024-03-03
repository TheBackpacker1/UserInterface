
import React from "react";
import PropTypes from "prop-types";

export const Eth = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_101_140)">
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#627EEA"
        />
        <path d="M12.3735 3V9.6525L17.9963 12.165L12.3735 3Z" fill="white" fillOpacity="0.602" />
        <path d="M12.3735 3L6.75 12.165L12.3735 9.6525V3Z" fill="white" />
        <path d="M12.3735 16.4761V20.9964L18 13.2121L12.3735 16.4761Z" fill="white" fillOpacity="0.602" />
        <path d="M12.3735 20.9964V16.4754L6.75 13.2121L12.3735 20.9964Z" fill="white" />
        <path d="M12.3735 15.4298L17.9963 12.165L12.3735 9.65405V15.4298Z" fill="white" fillOpacity="0.2" />
        <path d="M6.75 12.165L12.3735 15.4298V9.65405L6.75 12.165Z" fill="white" fillOpacity="0.602" />
      </g>
      <defs>
        <clipPath id="clip0_101_140">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};

Eth.propTypes = {
    className: PropTypes.string,
  };