import React from "react";
import { IconsChanges } from "../../icons/IconsChanges";
import { IconsDefault11 } from "../../icons/IconsDefault11";
import { IconsDefault13 } from "../../icons/IconsDefault13";
import { IconsDefault3 } from "../../icons/IconsDefault3";
import { IconsDefault5 } from "../../icons/IconsDefault5";

export const Frame = ({ showFrame = true, property1, className, divClassName, text = "Analyze" }) => {
  return (
    <div className={`inline-flex items-center gap-[8px] justify-center relative ${className}`}>
      {property1 === "default" && <IconsDefault11 className="!relative !w-[16px] !h-[16px]" />}

      {property1 === "variant-2" && <IconsDefault3 className="!relative !w-[16px] !h-[16px]" />}

      {["default", "variant-2"].includes(property1) && (
        <div
          className={`[font-family:'Istok_Web',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[16px] text-neutral-50 font-normal leading-[normal] relative ${divClassName}`}
        >
          {property1 === "default" && <>Dashboard</>}

          {property1 === "variant-2" && <>My Wallet</>}
        </div>
      )}

      {property1 === "variant-3" && (
        <>
          <IconsDefault13 className="!relative !w-[16px] !h-[16px]" />
          <div
            className={`relative w-fit mt-[-1.00px] [font-family:'Istok_Web',Helvetica] font-normal text-neutral-50 text-[16px] tracking-[0] leading-[normal] ${divClassName}`}
          >
            {text}
          </div>
        </>
      )}

      {property1 === "variant-4" && (
        <>
          <IconsChanges className="!relative !w-[16px] !h-[16px]" />
          <div
            className={`relative w-fit mt-[-1.00px] [font-family:'Istok_Web',Helvetica] font-normal text-neutral-50 text-[16px] tracking-[0] leading-[normal] ${divClassName}`}
          >
            Exchange
          </div>
        </>
      )}

      {property1 === "variant-5" && (
        <>
          <IconsDefault5 className="!relative !w-[16px] !h-[16px]" />
          <div
            className={`relative w-fit mt-[-1.00px] [font-family:'Istok_Web',Helvetica] font-normal text-neutral-50 text-[16px] tracking-[0] leading-[normal] ${divClassName}`}
          >
            Profile
          </div>
        </>
      )}
    </div>
  );
};
