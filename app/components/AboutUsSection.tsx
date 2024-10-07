import React from 'react'

export const AboutUsSection = () => {
	return (
		<div className='items-center justify-center mx-auto w-fit max-md:mx-[16px] max-md:mt-[40px] text-lg text-white text-justify font-medium text-md md:mx-[10vw] '>
			<div>
				This competition aims to bridge the gap between technical expertise and business strategy by encouraging students to leverage cutting-edge technologies, such as <span className='text-[#C93FDD] font-bold'> Artificial Intelligence</span>,
				<span className='text-[#C93FDD] font-bold'> Blockchain</span> and <span className='text-[#C93FDD] font-bold'>Cybersecurity</span>, to create scalable and impactful solutions.
			</div>

			<div className='my-[16px] '>
				Over multiple rounds, teams will progress through brainstorming, technical development, and live demonstrations, culminating in a final pitch to judges at RMIT University in Ho Chi Minh City.
			</div>
		</div>
	)
}
