"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dot } from "node:test/reporters";

export const PartnerSection = () => {
  return (
    <div className="bg-black text-center">
      <h1 className="text-[32px] lg:text-[57px] text-white font-semibold mb-8">
        Our Partners
      </h1>
      <p className="text-[#9CA3AF] text-[14px] lg:text-[20px] font-semibold mb-8">
        BLOCKCHAIN AND CRYPTOCURRENCY
      </p>
      <PartnerList />
    </div>
  );
};

export function PartnerList() {
  const settings = {
    dots: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 8, 
          slidesToScroll: 2,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 4, 
          slidesToScroll: 1,
          rows: 2, 
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="slider-container bg-black w-4/6 mx-auto px-50">
      <Slider {...settings}>
        {Array.from({ length: 8 }).map((_, index) => (
          <div className="rounded-full p-3">
            <div className="bg-blue-300 text-white flex aspect-square rounded-full items-center justify-center">
              {/* <span>iVolunteer Vietnam</span> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
