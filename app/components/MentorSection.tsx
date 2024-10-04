import React from 'react'

export const MentorSection = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center p-5">
      <h1 className="text-3xl font-bold mb-8">Mentoring Teams</h1>
      <div className="flex flex-wrap justify-center gap-5">
        <div className="bg-gray-800 rounded-xl w-72 p-5 text-center">
          <img src="/long_nguyen.jpeg" alt="Mr. Long Dang" className="w-full h-auto rounded-xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Mr. Long Dang</h3>
          <p className="text-base">AI Mentor - AI Engineer Intern, AI Bid</p>
        </div>
        <div className="bg-gray-800 rounded-xl w-72 p-5 text-center">
          <img src="/nam_nguyen.jpeg" alt="Mr. Nam Nguyen" className="w-full h-auto rounded-xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Mr. Nam Nguyen</h3>
          <p className="text-base">UI/UX Mentor - Design Consultant & Coordinator, GFT Group</p>
        </div>
        <div className="bg-gray-800 rounded-xl w-72 p-5 text-center">
          <img src="/tin_nguyen.png" alt="Mr. Tin Nguyen" className="w-full h-auto rounded-xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Mr. Tin Nguyen</h3>
          <p className="text-base">Cybersecurity Mentor - Director of Automotive, VinCSS</p>
        </div>
      </div>
    </div>
  )
}
