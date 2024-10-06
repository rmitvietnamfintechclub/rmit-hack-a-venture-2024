"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const PartnerSection = () => {
  return (
    <div className="bg-black text-center mb-5">
      <h1 className="text-[32px] lg:text-[57px] text-white font-semibold mb-8">
        Our Partners
      </h1>
      <PartnerList />
    </div>
  );
};

export function PartnerList() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const fixedDivSize = "w-[250px] h-[150px]"; // Ensure all divs have the same size
  const imageStyle = "object-contain"; // Ensure image fits within the div

  return (
    <div className="slider-container bg-black w-3/5 p-10 mx-auto">
      <Slider {...settings}>
        {/*----------------------------Diamond Sponsors----------------------------*/}
        <div>
          <h3 className="text-[#9CA3AF] font-semibold text-20px lg:text-[30px] mb-6">
            Diamond Sponsors
          </h3>
          <div className="flex gap-10 items-center justify-center">
            <div className={`flex items-center justify-center bg-white ${fixedDivSize}`}>
              <Image
                src="/DC_VerticalLogo_Digital_RGB.png"
                alt="diamond-sponsor"
                width={250}
                height={250}
                className={imageStyle}
              />
            </div>
            <div className={`flex items-center justify-center bg-white ${fixedDivSize}`}>
              <Image
                src="/Monad Logo - Default - Horizontal Logo.png"
                alt="diamond-sponsor"
                width={250}
                height={250}
                className={imageStyle}
              />
            </div>
            <div className={`flex items-center justify-center bg-white ${fixedDivSize}`}>
              <Image
                src="/Polkadot_Logo.png"
                alt="diamond-sponsor"
                width={250}
                height={250}
                className={imageStyle}
              />
            </div>
          </div>
        </div>

        {/*----------------------------Silver Sponsors----------------------------*/}
        <div>
          <h3 className="text-[#9CA3AF] font-semibold text-20px lg:text-[30px] mb-6">
            Silver Sponsors
          </h3>
          <div className="flex gap-10 items-center justify-center">
            <div className={`col-start-2 flex items-center justify-center bg-white ${fixedDivSize}`}>
              <Image
                src="/Logo-Home-Credit.png"
                alt="silver-sponsor"
                width={210}
                height={210}
                className={imageStyle}
              />
            </div>
          </div>
        </div>

        {/*----------------------------Strategic Sponsors----------------------------*/}
        <div>
          <h3 className="text-[#9CA3AF] font-semibold text-20px lg:text-[30px] mb-6">
            Strategic Sponsors
          </h3>
          <div className="flex gap-10 items-center justify-center">
            <div className={`col-start-2 flex items-center justify-center bg-white ${fixedDivSize}`}>
              <Image
                src="/Logo-Home-Credit.png"
                alt="strategic-sponsor"
                width={210}
                height={210}
                className={imageStyle}
              />
            </div>
          </div>
        </div>

        {/*----------------------------Academic Sponsors----------------------------*/}
        <div>
          <h3 className="text-[#9CA3AF] font-semibold text-20px lg:text-[30px] mb-6">
            Academic Sponsors
          </h3>
          <div className="flex gap-10 items-center justify-center">
            <div className={`flex items-center justify-center bg-white ${fixedDivSize}`}>
              <Image
                src="/logo.png"
                alt="academic-sponsor"
                width={230}
                height={230}
                className={imageStyle}
              />
            </div>
            <div className={`flex items-center justify-center bg-white ${fixedDivSize}`}>
              <Image
                src="/cropped-bigo_5000x5000-300x300.png"
                alt="academic-sponsor"
                width={125}
                height={125}
                className={imageStyle}
              />
            </div>
            <div className={`flex items-center justify-center bg-white ${fixedDivSize}`}>
              <Image
                src="/1581359408041-1581323365860-Logo Blue.png"
                alt="academic-sponsor"
                width={230}
                height={230}
                className={imageStyle}
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
