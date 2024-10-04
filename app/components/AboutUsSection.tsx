import React from 'react'

export const AboutUsSection = () => {
	return (
		<div className='items-center justify-center mx-auto w-fit max-md:mx-[16px] max-md:mt-[40px] font-sans font-medium text-md'>
			<div>
				<p>
					This competition aims to bridge the gap between technical expertise and business strategy by
				</p>
				<p> encouraging students to leverage cutting-edge technologies, such as <span className='text-[#C93FDD]'> Artificial Intelligence</span>,</p>
				<p> <span className='text-[#C93FDD]'>Blockchain</span> and <span className='text-[#C93FDD]'>Cybersecurity</span>, to create scalable and impactful solutions.</p>
			</div>

			<div className='my-[16px] '>
				Over multiple rounds, teams will progress through brainstorming, technical development, and live demonstrations, culminating in a final pitch to judges at RMIT University in Ho Chi Minh City.
			</div>
		</div>
	)
}
