import Image from 'next/image'
import React from 'react'
import '../css/HeroSection.css'

export const ThemeSection = () => {
	return (
		<div className='md:px-[10vw] md:py-[80px] w-full max-md:px-[16px] max-md:pt-[40px]'>
			<div className='md:grid md:grid-cols-10 w-full md:pt-[80px]'>
				<div className='md:col-span-5 w-full h-full'>
					<div className='drop-shadow-container'>
						<h1 className='text-white md:text-7xl max-md:text-4xl font-bold drop-shadow-text font-sans'>
							Our themes <br />
							and tech focus
						</h1>
					</div>
					<p className='md:mt-[24px] font-sans text-[#9CA3AF] max-md:mt-[16px]'>
						Participants are required to leverage one or more of the following technologies:
					</p>

					<div className="grid grid-rows-3 md:mt-[25px] md:gap-[50px] max-md:mt-[32px] max-md:gap-[12px]">
						<div className='flex flex-row items-center gap-11 my-auto max-md:border-[1px] max-md:border-[#374151] max-md:rounded-lg max-md:p-4'>
							<Image
								className='w-[20px] h-[20px]'
								src='/smart_toy.png'
								alt='AI'
								width={1000}
								height={1000}
							/>
							<div className='text-white text-xl font-semibold font-sans'>Artificial Intelligence (AI)</div>
						</div>
						<div className='flex flex-row items-center gap-11 my-auto max-md:border-[1px] max-md:border-[#374151] max-md:rounded-lg max-md:p-4'>
							<Image
								className='w-[20px] h-[20px]'
								src='/currency_bitcoin.png'
								alt='bitcoin'
								width={1000}
								height={1000}
							/>
							<div className='text-white text-xl font-semibold font-sans'>Blockchain Technology</div>
						</div>
						<div className='flex flex-row items-center gap-11 my-auto max-md:border-[1px] max-md:border-[#374151] max-md:rounded-lg max-md:p-4'>
							<Image
								className='w-[20px] h-[20px]'
								src='/encrypted.png'
								alt='encrypted'
								width={1000}
								height={1000}
							/>
							<div className='text-white text-xl font-semibold font-sans'>Cybersecurity Technology</div>
						</div>
					</div>
				</div>
				<div className='md:col-span-5 object-cover max-md:hidden md:w-[600px] mx-auto'>
					<Image
						className='justify-self-end object-cover'
						src='/theme.webp'
						alt='theme'
						width={1000}
						height={10000}
					/>
				</div>
			</div>
			<div className='md:mt-[105px] max-md:mt-[32px]'>
				<span className='text-white text-xl font-normal font-sans'>
					These technologies will be used to develop innovative solutions to address social challenges within Vietnam. The specific social issues related to <span className='text-[#C93FDD] font-bold'>Sustainable Development Goals (SDGs)</span> will be revealed at the start of Round 1. Teams will be challenged to create solutions that are not only technologically sound but also practical and scalable in real-world scenarios.
				</span>
			</div>
		</div>
	)
}
