import React from "react";
import PropTypes from "prop-types";

import { IconsDefault } from "../../icons/IconsDefault";

export const FrameWrapper = ({ /*showFrame = true*/ className }) => {
  return (
    <div className={`flex w-[90px] items-center gap-[4px] relative ${className}`}>
      <IconsDefault className="!relative !w-[16px] !h-[16px]" />
      <div className="relative w-[62px] h-[15px]">
        <div className="absolute -top-px left-0 [font-family:'Inter',Helvetica] font-normal text-neutral-50 text-[12px] tracking-[0] leading-[normal]">
          Log Out
        </div>
      </div>
    </div>
  );
};
FrameWrapper.propTypes = {
  className: PropTypes.string,
};