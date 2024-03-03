import React from "react";
import { Frame } from "../../components/Frame";
import { FrameVariant } from "../../components/FrameVariant";
import { FrameWrapper } from "../../components/FrameWrapper";
import { Frame7IconsSearch } from "../../icons/Frame7IconsSearch";
import { IconsNotification } from "../../icons/IconsNotification";

export const Version = () => {
  return (
    <div className="bg-[#151516] flex flex-row justify-center w-full">
      <div className="bg-bg w-[1280px] h-[832px] relative">
        <div className="flex flex-col w-[139px] h-[832px] items-center justify-between px-[8px] py-[32px] absolute top-0 left-0 rounded-[0px_16px_16px_0px] border border-solid border-[#6473fe8f] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] [background:linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(100,115,254,0.1)_100%)]">
          <div className="inline-flex flex-col items-center gap-[95px] relative flex-[0_0_auto] ml-[-7.50px] mr-[-7.50px]">
            <div className="inline-flex items-center gap-[4px] relative flex-[0_0_auto]">
              <img
                className="relative w-[31.2px] h-[12px]"
                alt="Logo"
                src="https://c.animaapp.com/C7lJEABh/img/logo.svg"
              />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Istok_Web',Helvetica] font-bold text-white text-[14px] tracking-[0] leading-[normal]">
                Investi
              </div>
            </div>
            <div className="flex flex-col w-[138px] items-center justify-center gap-[80px] relative flex-[0_0_auto]">
              <div className="flex flex-col items-start justify-center gap-[24px] relative self-stretch w-full flex-[0_0_auto]">
                <Frame
                  className="!flex-[0_0_auto] !px-[8px] !py-[4px] !flex ![background:linear-gradient(180deg,rgb(100,115,254)_0%,rgba(100,115,254,0)_100%)] !w-[138px]"
                  divClassName="!text-white"
                  property1="default"
                />
                <Frame className="!flex-[0_0_auto] !px-[8px] !py-0 !flex !w-[124px]" property1="variant-3" />
                <Frame
                  className="!flex-[0_0_auto] !px-[8px] !py-0 !flex !w-[124px]"
                  property1="variant-3"
                  text="Historique"
                />
                <Frame className="!self-stretch !flex-[0_0_auto] !px-[8px] !py-0 !flex !w-full" property1="variant-4" />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[137px] items-center justify-center gap-[16px] relative flex-[0_0_auto] ml-[-7.00px] mr-[-7.00px]">
            <FrameVariant className="!flex-[0_0_auto]" />
            <Frame
              className="!gap-[4px] !flex-[0_0_auto] ![justify-content:unset] !flex !w-[91px]"
              property1="variant-5"
            />
            <FrameWrapper className="!flex-[0_0_auto]" />
          </div>
        </div>
        <img
          className="absolute w-[1029px] h-[657px] top-[143px] left-[182px]"
          alt="Trending market"
          src="https://c.animaapp.com/C7lJEABh/img/trending-market.png"
        />
        <div className="inline-flex flex-col items-start absolute top-[42px] left-[182px]">
          <p className="relative w-fit mt-[-1.00px] font-web-body-semibold-XL font-[number:var(--web-body-semibold-XL-font-weight)] text-transparent text-[length:var(--web-body-semibold-XL-font-size)] tracking-[var(--web-body-semibold-XL-letter-spacing)] leading-[var(--web-body-semibold-XL-line-height)] whitespace-nowrap [font-style:var(--web-body-semibold-XL-font-style)]">
            <span className="text-white font-web-body-semibold-XL [font-style:var(--web-body-semibold-XL-font-style)] font-[number:var(--web-body-semibold-XL-font-weight)] tracking-[var(--web-body-semibold-XL-letter-spacing)] leading-[var(--web-body-semibold-XL-line-height)] text-[length:var(--web-body-semibold-XL-font-size)]">
              Welcome Back
            </span>
            <span className="font-[number:var(--web-body-semibold-XL-font-weight)] text-white font-web-body-semibold-XL [font-style:var(--web-body-semibold-XL-font-style)] tracking-[var(--web-body-semibold-XL-letter-spacing)] leading-[var(--web-body-semibold-XL-line-height)] text-[length:var(--web-body-semibold-XL-font-size)]">
              &nbsp;
            </span>
            <span className="font-[number:var(--web-body-semibold-XL-font-weight)] text-[#6473fe] font-web-body-semibold-XL [font-style:var(--web-body-semibold-XL-font-style)] tracking-[var(--web-body-semibold-XL-letter-spacing)] leading-[var(--web-body-semibold-XL-line-height)] text-[length:var(--web-body-semibold-XL-font-size)]">
              Mohamed!
            </span>
          </p>
          <p className="relative w-fit font-web-body-regular-s font-[number:var(--web-body-regular-s-font-weight)] text-base-80 text-[length:var(--web-body-regular-s-font-size)] tracking-[var(--web-body-regular-s-letter-spacing)] leading-[var(--web-body-regular-s-line-height)] whitespace-nowrap [font-style:var(--web-body-regular-s-font-style)]">
            I hope everything is fine today...
          </p>
        </div>
        <div className="inline-flex flex-col items-start justify-center absolute top-[52px] left-[690px]">
          <div className="inline-flex flex-col items-start gap-[42px] relative flex-[0_0_auto]">
            <div className="relative flex-[0_0_auto]" />
          </div>
        </div>
        <div className="inline-flex items-center gap-[8px] absolute top-[53px] left-[970px]">
          <div className="inline-flex items-center justify-center gap-[12px] relative flex-[0_0_auto]">
            <div className="flex w-[209px] items-center gap-[131px] px-[8px] py-[4px] relative self-stretch rounded-[8px] border border-solid border-transparent [border-image:linear-gradient(to_bottom,rgb(98,126,235),rgba(98,126,235,0.89))_1]">
              <div className="inline-flex items-center gap-[4px] relative flex-[0_0_auto]">
                <Frame7IconsSearch className="!relative !w-[16px] !h-[16px]" />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Istok_Web',Helvetica] font-normal text-[#6473fe66] text-[12px] tracking-[0] leading-[19.2px] whitespace-nowrap">
                  Search..
                </div>
              </div>
            </div>
          </div>
          <IconsNotification className="!relative !w-[16px] !h-[16px]" />
          <div className="inline-flex items-center justify-center relative flex-[0_0_auto]">
            <img
              className="relative w-[36px] h-[36px]"
              alt="Ellipse"
              src="https://c.animaapp.com/C7lJEABh/img/ellipse-2@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};