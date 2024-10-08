"use client"
import React, { useEffect, useState } from 'react';
import { ChevronUp } from "tabler-icons-react";

export const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div>
      {backToTopButton && (
        <button
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            width: "60px",
            height: "60px",
          }}
          onClick={scrollUp}
          className="rounded-full bg-[#C93FDD] hover:bg-[#CA8CE6] flex justify-center items-center"
        >
          <ChevronUp className='w-auto height-full' />
        </button>
      )}
    </div>
  );
};