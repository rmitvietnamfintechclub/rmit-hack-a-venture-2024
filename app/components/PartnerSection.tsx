"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/PartnerSection.css";

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

  // Adjust the div size for larger screens and make it responsive for mobile
  const imageStyle = "object-contain"; // Ensure image fits within the div

  return (
    <div className="slider-container bg-black w-96 sm:w-4/5 lg:w-3/5 p-4 sm:p-10 mx-auto">
      <Slider {...settings}>
        {/*----------------------------Diamond Sponsors----------------------------*/}
        <div className="px-4">
          <h3 className="text-[#9CA3AF] font-semibold text-[20px] sm:text-[25px] lg:text-[30px] mb-6">
            Diamond Sponsors
          </h3>
          <div className="flex flex-row md:flex-nowrap gap-4 sm:gap-10 items-center justify-center">
            <div
              className={`flex items-center p-4 justify-center bg-white w-[200px] h-[100px] sm:w-[220px] sm:h-[140px] md:w-[250px] md:h-[150px]`}
            >
              <Image
                src="/DC_VerticalLogo_Digital_RGB.png"
                alt="diamond-sponsor"
                width={250}
                height={250}
                layout="responsive"
                className={imageStyle}
              />
            </div>
            <div
              className={`flex items-center p-4 justify-center bg-white w-[200px] h-[100px] sm:w-[220px] sm:h-[140px] md:w-[250px] md:h-[150px]`}
            >
              <Image
                src="/Monad Logo - Default - Horizontal Logo.png"
                alt="diamond-sponsor"
                width={250}
                height={250}
                layout="responsive"
                className={imageStyle}
              />
            </div>
            <div
              className={`flex items-center p-4 justify-center bg-white w-[200px] h-[100px] sm:w-[220px] sm:h-[140px] md:w-[250px] md:h-[150px]`}
            >
              <Image
                src="/Polkadot_Logo.png"
                alt="diamond-sponsor"
                width={250}
                height={250}
                layout="responsive"
                className={imageStyle}
              />
            </div>
          </div>
        </div>

        {/*----------------------------Silver Sponsors----------------------------*/}
        <div>
          <h3 className="text-[#9CA3AF] font-semibold text-[20px] sm:text-[25px] lg:text-[30px] mb-6">
            Silver Sponsors
          </h3>
          <div className="flex flex-row md:flex-nowrap gap-4 sm:gap-10 items-center justify-center">
            <div
              className={`flex items-center p-0 justify-center bg-white sm:p-4 w-[200px] h-[100px] sm:w-[220px] sm:h-[140px] md:w-[250px] md:h-[150px]`}
            >
              <Image
                src="/Logo-Home-Credit.png"
                alt="silver-sponsor"
                width={150}
                height={150}
                layout="responsive"
                className={imageStyle}
              />
            </div>
          </div>
        </div>

        {/*----------------------------Strategic Sponsors----------------------------*/}
        <div>
          <h3 className="text-[#9CA3AF] font-semibold text-[20px] sm:text-[25px] lg:text-[30px] mb-6">
            Strategic Sponsors
          </h3>
          <div className="flex flex-row md:flex-nowrap gap-4 sm:gap-10 items-center justify-center">
            <div
              className={`flex items-center p-4 justify-center bg-white w-[200px] h-[100px] sm:w-[220px] sm:h-[140px] md:w-[250px] md:h-[150px]`}
            >
              <Image
                src="/Chainlink-Logo-Blue.png"
                alt="strategic-sponsor"
                width={180}
                height={180}
                layout="responsive"
                className={imageStyle}
              />
            </div>
          </div>
        </div>

        {/*----------------------------Academic Sponsors----------------------------*/}
        <div className="px-4">
          <h3 className="text-[#9CA3AF] font-semibold text-[20px] sm:text-[25px] lg:text-[30px] mb-6">
            Academic Sponsors
          </h3>
          <div className="flex flex-row md:flex-nowrap gap-4 sm:gap-10 items-center justify-center">
            <div
              className={`flex items-centerjustify-center bg-white w-[200px] h-[100px] sm:w-[220px] sm:h-[140px] md:w-[250px] md:h-[150px]`}
            >
              <Image
                src="/logo.png"
                alt="academic-sponsor"
                width={230}
                height={230}
                className={imageStyle}
              />
            </div>
            <div
              className={`flex items-center justify-center bg-white w-[200px] h-[100px] sm:w-[220px] sm:h-[140px] md:w-[250px] md:h-[150px]`}
            >
              <Image
                src="/cropped-bigo_5000x5000-300x300.png"
                alt="academic-sponsor"
                width={100}
                height={100}
                className={imageStyle}
              />
            </div>
            <div
              className={`flex items-center justify-center bg-white w-[200px] h-[100px] sm:w-[220px] sm:h-[140px] md:w-[250px] md:h-[150px]`}
            >
              <Image
                src="/1581359408041-1581323365860-Logo Blue.png"
                alt="academic-sponsor"
                width={200}
                height={200}
                className={imageStyle}
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
