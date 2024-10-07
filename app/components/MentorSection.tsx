import Image from 'next/image'
import React from 'react'

export const MentorSection = () => {
    return (
        <div className="text-white flex flex-col items-center justify-center md:mt-[120px] max-md:px-[16px] md:mb-[400px] max-md:my-[68px]">
            <h1 className="text-[45px] lg:text-[57px] text-center text-white font-semibold md:px-[40px] max-md:mt-[48px] drop-shadow-text">Team Mentors</h1>
            <div className='md:flex md:flex-wrap md:gap-5 text-white max-md:grid max-md:grid-cols-2 mx-auto justify-center items-start max-md:gap-[12px] md:mt-[40px]'>
                <div className="md:w-[250px] max-md:py-[16px] text-center">
                    <Image src="/mentors/Long_Dang.png" alt="Mr. Long Dang" className="w-full h-auto rounded-xl mb-4 object-cover" width={200} height={200} />
                    <h3 className="md:text-2xl max-md:text-xl font-semibold mb-2">Mr. Long Dang</h3>
                    <p className="md:text-base max-md:text-md text-[#9CA3AF]">AI Mentor - AI Engineer Intern, AI Bid</p>
                </div>
                <div className="md:w-[250px] max-md:py-[16px] text-center">
                    <Image src="/mentors/Nam_Nguyen.png" alt="Mr. Nam Nguyen" className="w-full h-auto rounded-xl mb-4 object-cover" width={200} height={200} />
                    <h3 className="md:text-2xl max-md:text-xl font-semibold mb-2">Mr. Nam Nguyen</h3>
                    <p className="md:text-base max-md:text-md text-[#9CA3AF]">UI/UX Mentor - Design Consultant & Coordinator, GFT Grou</p>
                </div>
                <div className="md:w-[250px] max-md:py-[16px] text-center">
                    <Image src="/mentors/TinNguyen.png" alt="Mr. Tin Nguyen" className="w-full h-auto rounded-xl mb-4 object-cover" width={200} height={200} />
                    <h3 className="md:text-2xl max-md:text-xl font-semibold mb-2">Mr. Tin Nguyen</h3>
                    <p className="md:text-base max-md:text-md text-[#9CA3AF]">Cybersecurity Mentor - Director of Automotive, VinCSS</p>
                </div>
                <div className="md:w-[250px] max-md:py-[16px] text-center">
                    <Image src="/mentors/Louis_Nguyen.png" alt="Mr. Louis Nguyen" className="w-full h-auto rounded-xl mb-4 object-cover" width={200} height={200} />
                    <h3 className="md:text-2xl max-md:text-xl font-semibold mb-2">Mr. Louis Nguyen</h3>
                    <p className="md:text-base max-md:text-md text-[#9CA3AF]">Community Manager, ChainLink</p>
                </div>
                <div className="md:w-[250px] max-md:py-[16px] text-center">
                    <Image src="/mentors/Sang_Tran.png" alt="Mr. Sang Tran" className="w-full h-auto rounded-xl mb-4 object-cover" width={200} height={200} />
                    <h3 className="md:text-2xl max-md:text-xl font-semibold mb-2">Sang Tran</h3>
                    <p className="md:text-base max-md:text-md text-[#9CA3AF]">Product Manager, FireGroup Technology</p>
                </div>
            </div>
        </div>
    )
}
