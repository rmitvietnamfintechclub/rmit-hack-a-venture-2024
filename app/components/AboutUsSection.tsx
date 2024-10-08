import React from 'react';
import Image from 'next/image';

export const AboutUsSection = () => {
	return (
		<div className='items-center justify-center mx-auto w-fit max-md:mx-[16px] max-md:mt-[40px] text-lg text-white font-medium text-md md:mx-[10vw] '>
			<Image src="/key-visual.png" width={2000} height={1000} alt="Hack-A-Venture Key Visual" className="w-full h-auto rounded-lg" />
			<div className="mt-[40px]">
				This competition aims to bridge the gap between technical expertise and business strategy by having students leverage <span className='text-[#C93FDD] font-bold'> Artificial Intelligence</span>,
				<span className='text-[#C93FDD] font-bold'> Blockchain</span> and <span className='text-[#C93FDD] font-bold'>Cybersecurity</span>, to create realistic and impactful solutions advancing UN SDGs in Vietnam.
			</div>

			<div className='my-[16px] '>
				Over multiple rounds, teams will progress through ideation, documentation, technical development, and live demonstration, culminating in a final pitch to a panel of esteemed industry judges.
			</div>
		</div>
	)
}