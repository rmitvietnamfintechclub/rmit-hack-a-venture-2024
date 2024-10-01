"use client";
import React from "react";
import { useState } from "react";

export const Header = () => {
  return (
    <>
      <LaptopNav />
      <MobileNav />
    </>
  );
};

const LaptopNav = () => {
  const [hoverItemNumber, setHoverItemNumber] = useState(-1);
  return (
    <nav
      id="header"
      className="sticky top-0 w-full h-[72px] backdrop-blur-sm bg-black/30 border-b-[1px] border-solid border-[#374051] text-[14px] hidden lg:flex justify-between items-center gap-[100px]"
    >
      {/*-----------------------------left side ------------------------*/}
      <div className=" lg:ms-[70px] h-[100%] w-[650px] flex justify-between items-end items-center">
        <a className="no-underline block" href="#">
          <img
            className="w-[60px] h-[60px]"
            src="/alignVerticalLogo.svg"
            alt="laptop logo"
          />
        </a>
        <a
          className={`hover:text-white text-[#9CA3AF] font-normal  cursor-pointer`}
          style={{
            textShadow:
              hoverItemNumber == 1 ? "1px 1px 5px rgba(201, 63, 221, 1)" : "",
          }}
          onMouseEnter={() => setHoverItemNumber(1)}
          onMouseLeave={() => setHoverItemNumber(-1)}
        >
          <h1>About Hack-A-Venture</h1>
        </a>
        <a
          className={`hover:text-white text-[#9CA3AF] font-normal  cursor-pointer`}
          style={{
            textShadow:
              hoverItemNumber == 2 ? "1px 1px 5px rgba(201, 63, 221, 1)" : "",
          }}
          onMouseEnter={() => setHoverItemNumber(2)}
          onMouseLeave={() => setHoverItemNumber(-1)}
        >
          <h1>Rules & Regulations</h1>
        </a>
        <a
          className={`hover:text-white text-[#9CA3AF] font-normal  cursor-pointer`}
          style={{
            textShadow:
              hoverItemNumber == 3 ? "1px 1px 5px rgba(201, 63, 221, 1)" : "",
          }}
          onMouseEnter={() => setHoverItemNumber(3)}
          onMouseLeave={() => setHoverItemNumber(-1)}
        >
          <h1>Our Sponsors & Partners</h1>
        </a>
      </div>

      {/*-----------------------------right side ------------------------*/}
      <div className="lg:me-[70px]  h-full w-[320px] flex justify-between items-center">
        <a href="" className="no-underline font-semibold  text-[#C93FDD]">
          See Booklet
        </a>
        <a href="" className="no-underline font-semibold  text-[#C93FDD]">Contact Us</a>
        <button className="px-[15px] py-[5px] rounded-2xl bg-[#B25FD6] text-white">
          Join Now
        </button>
      </div>
    </nav>
  );
};

const MobileNav = () => {
  const [hamburgerBarIsActive, setHamburgerBarIsActive] = useState(false);
  const [hoverItemNumber, setHoverItemNumber] = useState(-1);

  return (
    <section className="lg:hidden flex justify-between items-center  sticky top-0 z-50">
      <nav className=" px-[30px] w-full h-[72px] backdrop-blur-sm bg-black/30 border-b-[1px] border-solid border-[#374051] flex justify-between items-center">
        {/*---------- mobile logo ----------*/}
        <a className="no-underline block" href="#header">
          <img className="h-[40px]" src="/alignHorizontalLogo.svg" alt="mobile logo" />
        </a>

        {/*---------- hamburger bar --------*/}
        <div
          onClick={() => {
            setHamburgerBarIsActive(!hamburgerBarIsActive);
          }}
          className="flex flex-col justify-around w-[40px] h-[30px] cursor-pointer"
        >
          <div className="w-full h-[3px] bg-white" />
          <div
            className={`${hamburgerBarIsActive && "hidden"
              } w-full h-[3px] bg-white`}
          />
          <div className="w-full h-[3px] bg-white" />
        </div>
      </nav>
      {/*----------------------- navbar body ---------------*/}
      <section
        className={`absolute top-[72px] w-full h-screen mx-auto ${hamburgerBarIsActive ? "left-0" : "left-full hidden"
          } top-[75px] bg-black z-50 duration-500 text-[25px]`}
      >
        <div className=" my-[30px] mx-auto w-[90%] flex flex-col gap-[50px]">
          <a
            className={`hover:text-white text-[#9CA3AF] font-normal  cursor-pointer`}
            style={{
              textShadow:
                hoverItemNumber == 1 ? "1px 1px 5px rgba(201, 63, 221, 1)" : "",
            }}
            onMouseEnter={() => setHoverItemNumber(1)}
            onMouseLeave={() => setHoverItemNumber(-1)}
          >
            <h1>About Hack-A-Venture</h1>
          </a>
          <a
            className={`hover:text-white text-[#9CA3AF] font-normal  cursor-pointer`}
            style={{
              textShadow:
                hoverItemNumber == 2 ? "1px 1px 5px rgba(201, 63, 221, 1)" : "",
            }}
            onMouseEnter={() => setHoverItemNumber(2)}
            onMouseLeave={() => setHoverItemNumber(-1)}
          >
            <h1>Rules & Regulations</h1>
          </a>
          <a
            className={`hover:text-white text-[#9CA3AF] font-normal  cursor-pointer`}
            style={{
              textShadow:
                hoverItemNumber == 3 ? "1px 1px 5px rgba(201, 63, 221, 1)" : "",
            }}
            onMouseEnter={() => setHoverItemNumber(3)}
            onMouseLeave={() => setHoverItemNumber(-1)}
          >
            <h1>Our Sponsors & Partners</h1>
          </a>

          {/*-----------------------------right side ------------------------*/}
          <a href="" className="no-underline font-semibold  text-[#C93FDD] block cursor-pointer">
            See Booklet
          </a>
          <a href="" className="no-underline font-semibold  text-[#C93FDD] block cursor-pointer">
            Contact Us
          </a>
          <button className="px-[15px] py-[2px] rounded-2xl bg-[#B25FD6] text-white">
            Join Now
          </button>
        </div>
      </section>
    </section>
  );
};
