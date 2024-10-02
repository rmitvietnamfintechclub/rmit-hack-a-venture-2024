"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const AboutClub = (e) => {
  // const onClickSlide = () => {
  //   e
  //  }
  const settings = {
    slidesToShow: 4,
    // slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: 0,
    speed: 500,
    dots: false,
    arrows: true,
    // autoplay: true,
    autoplaySpeed: 1500,
  };
  return (
    <div className='bg-black text-white p-8' >
      {/* Text Section */}
      < div className='max-w-7xl mx-auto mb-8' >
        <h1 className='text-[#C93FDD] text-lg font-semibold'>Competition Organizer</h1>
        <div className='flex flex-row'>
          <div className='flex flex-col'>
            <h2 className='text-4xl font-bold mb-4'>FinTech Club<br />Who are we?</h2>
          </div>
          <p className='text-lg text-justify max-w-3xl mx-auto'>
            The RMIT FinTech Club is Vietnam's first <span className='font-bold'>Student-Led Financial Technology Club.</span> Our mission is to provide a platform where students from diverse backgrounds can collaborate, innovate, and build solutions that <span className='font-bold'>Connect Business And Technology.</span>
          </p>
        </div>
      </div >

      {/* Image Section */}
      <div className="slider-container">
        <Slider {...settings} className="center">
          <div className="p-3">
            <p>1</p>
            <a className="no-underline block" href="#">
              <img
                className=""
                src="/about_ftc_1.jpeg"
                alt="About FinTech Club 1"
              />
            </a>
          </div>
          <div className="p-3">
            <p>2</p>
            <a className="no-underline block" href="#">
              <img
                className=""
                src="/about_ftc_1.jpeg"
                alt="About FinTech Club 1"
              />
            </a>
          </div>
          <div className="p-3">
            <p>3</p>
            <a className="no-underline block" href="#">
              <img
                className=""
                src="/about_ftc_1.jpeg"
                alt="About FinTech Club 1"
              />
            </a>
          </div>
        </Slider>
      </div>
    </div >
  )
}
