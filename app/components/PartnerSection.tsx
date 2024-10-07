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
      <h1
        className={`text-[45px] lg:text-[57px] text-center text-white font-semibold md:px-[40px] max-md:mt-[48px] drop-shadow-text`}
      >
        Our Sponsors
      </h1>
      <PartnerList />
    </div>
  );
};

export function PartnerList() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 1500,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
          dots: true,
        }
      }
    ]
  };

  // Adjust the div size for larger screens and make it responsive for mobile
  const imageStyle = "object-contain"; // Ensure image fits within the div

  return (
    <div className="slider-container bg-black w-96 sm:w-4/5 lg:w-[90vw] p-10 sm:p-0 mx-auto">
      <Slider {...settings}>
        {/*----------------------------Strategic Sponsors----------------------------*/}
        <div>
          <h3 className="text-white font-semibold text-[20px] sm:text-[25px] lg:text-[30px] mb-6">
            Strategic Sponsors
          </h3>
          <div className="flex flex-row md:flex-nowrap gap-4 sm:gap-5 items-center justify-center">
            <div
              className={`flex items-centerjustify-center w-[200px] h-[100px] sm:w-[220px] sm:h-[140px] md:w-[250px] md:h-[150px]`}
            >
              <Image
                src="/partners/chainlink.png"
                alt="strategic-sponsor"
                width={100}
                height={100}
                layout="responsive"
                className={imageStyle}
              />
            </div>
          </div>
        </div>

        {/*----------------------------Diamond Sponsors----------------------------*/}
        <div className="px-4">
          <h3 className="text-white font-semibold text-[20px] sm:text-[25px] lg:text-[30px] mb-6">
            Diamond Sponsors
          </h3>
          <div className="flex flex-row gap-4 sm:gap-10 items-center justify-center">
            <div
              className={`flex items-centerjustify-center w-[200px] h-[100px] sm:w-[220px] sm:h-[140px] md:w-[250px] md:h-[150px]`}
            >
              <Image
                src="/partners/dragon_capital.png"
                alt="diamond-sponsor"
                width={120}
                height={120}
                layout="responsive"
                className={imageStyle}
              />
            </div>
            <div
              className={`flex items-centerjustify-center w-[200px] h-[100px] sm:w-[220px] sm:h-[140px] md:w-[250px] md:h-[150px]`}
            >
              <Image
                src="/partners/monad.png"
                alt="diamond-sponsor"
                width={120}
                height={120}
                layout="responsive"
                className={imageStyle}
              />
            </div>
            <div
              className={`flex items-centerjustify-center w-[200px] h-[100px] sm:w-[220px] sm:h-[140px] md:w-[250px] md:h-[150px]`}
            >
              <Image
                src="/partners/polkadot.png"
                alt="diamond-sponsor"
                width={120}
                height={120}
                layout="responsive"
                className={imageStyle}
              />
            </div>
          </div>
        </div>

        <div className="px-4">
          <h3 className="text-white font-semibold text-[20px] sm:text-[25px] lg:text-[30px] mb-6">
            Academic Sponsors
          </h3>
          <div className="flex flex-row md:flex-nowrap gap-4 sm:gap-10 items-center justify-center">
            <div
              className={`flex items-centerjustify-center bg-white w-[100px] h-[100px] sm:w-[220px] sm:h-[140px] md:w-[150px] md:h-[150px] rounded-lg`}
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
              className={`flex items-center justify-center bg-white w-[100px] h-[100px] sm:w-[220px] sm:h-[140px] md:w-[150px] md:h-[150px] rounded-lg`}
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
              className={`flex items-center justify-center bg-white w-[100px] h-[100px] sm:w-[220px] sm:h-[140px] md:w-[150px] md:h-[150px] rounded-lg`}
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

        {/*----------------------------Silver Sponsors----------------------------*/}
        <div>
          <h3 className="text-white font-semibold text-[20px] sm:text-[25px] lg:text-[30px] mb-6">
            Silver Sponsors
          </h3>
          <div className="flex flex-row md:flex-nowrap gap-4 sm:gap-10 items-center justify-center">
            <div
              className={`flex items-center p-0 justify-center sm:p-4 w-[200px] h-[100px] sm:w-[220px] sm:h-[140px] md:w-[250px] md:h-[150px]`}
            >
              <Image
                src="/partners/homecredit.png"
                alt="silver-sponsor"
                width={160}
                height={160}
                layout="responsive"
                className={imageStyle}
              />
            </div>
          </div>
        </div>



        {/*----------------------------Academic Sponsors----------------------------*/}

      </Slider>
    </div>
  );
}
