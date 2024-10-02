"use client"
import React from "react";
import Slider from "react-slick";

export const AboutClub = () => {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500
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
      {/* <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <img
          src='path_to_image1' // Replace with the image path
          alt='FinTech Wonderland'
          className='rounded-xl'
        />
        <img
          src='path_to_image2' // Replace with the image path
          alt='FinTech Event 2023'
          className='rounded-xl'
        />
        <img
          src='path_to_image3' // Replace with the image path
          alt='FinTech Club Event'
          className='rounded-xl'
        />
      </div> */}
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
      </Slider>

    </div >
  )
}
