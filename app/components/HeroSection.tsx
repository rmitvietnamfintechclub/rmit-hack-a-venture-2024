'use client'
import Image from 'next/image'
import React from 'react'
import '../css/HeroSection.css'

export const HeroSection = () => {
	return (
		<>
			<div className="max-md:hidden grid grid-cols-2 items-center md:px-[10vw]">
				<div className='justify-center mx-auto md:w-full'>
					<div className="mx-auto">
						<div className='mb-[16px] drop-shadow-container'>
							<h1 className='text-white text-6xl font-bold drop-shadow-text'>
								RMIT 2024
							</h1>
							<h1 className='text-gradient text-6xl font-bold drop-shadow-text'>
								Hack-A-Venture
							</h1>
						</div>

						<div className='w-[551px] text-[#9CA3AF] font-normal font-sans'>
							Organized by the RMIT FinTech Club, it’s a unique hackathon-style competition that brings together <span className='font-bold text-white'>Business</span> and <span className='font-bold text-white'>Technology</span> students to collaborate and develop innovative solutions for Vietnam's pressing social challenges.
						</div>

						<div className='mt-[40px] flex w-[247px] justify-between'>
							<button className='text-[#C93FDD] font-semibold text-md hover:underline hover:text-white'>
								See Booklet
							</button>

							<button
								className='w-[130px] h-[48px] bg-[#C93FDD] rounded-[12px] justify-items-center flex justify-center items-center hover:text-xl text-bold ease-in transition-all duration-200 font-semibold font-poppins'
							>
								Join Now
								<Image
									src={'/Vector.png'}
									alt='arrow'
									width={1000}
									height={1000}
									className='ml-[10px] w-[13.5px] h-[13.5px]'
								/>
							</button>
						</div>
					</div>
				</div>
				<div
					className='items-center mx-auto w-full bg-center md:pt-[100px] md:pb-[100px] bg-contain'
					style={{
						backgroundImage: `url(${'cubes.png'})`,
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'right 0px bottom 0px'
					}}
				>
					<Image
						src={'/mascot.png'}
						alt='hero'
						width={1000}
						height={1000}
						className=' my-7 w-[310px] h-[278px] mx-auto'
					/>
				</div>
			</div>

			<div className='md:hidden'>
				<div className='mb-[16px] justify-center mx-auto text-center drop-shadow-container'>
					<h1 className='text-5xl drop-shadow-lg shadow-lg font-sans font-bold mt-[40px] drop-shadow-text'>
						RMIT 2024
					</h1>
					<h1 className='text-gradient text-5xl font-sans font-bold drop-shadow-text'>
						Hack-A-Venture
					</h1>
				</div>

				<div className='text-[#9CA3AF] my-[16px] font-sans font-normal text-center mx-[16px] mt-[24px]'>
					Organized by the RMIT FinTech Club, it’s a unique hackathon-style competition that brings together <span className='font-bold text-white'>Business</span> and <span className='font-bold text-white'>Technology</span> students to collaborate and develop innovative solutions for Vietnam's pressing social challenges.
				</div>

				<div className='flex flex-col w-full gap-5 justify-center items-center px-[16px]'>
					<button className='text-[#C93FDD] font-semibold text-md hover:underline hover:text-white'>
						See Booklet
					</button>

					<button
						className='w-full h-[48px] bg-[#C93FDD] rounded-[12px] justify-items-center flex justify-center items-center hover:text-xl text-bold ease-in transition-all duration-200 font-semibold font-poppins'
					>
						Join Now
						<Image
							src={'/Vector.png'}
							alt='arrow'
							width={1000}
							height={1000}
							className='ml-[10px] w-[13.5px] h-[13.5px]'
						/>
					</button>
				</div>

				<div className="items-center mx-auto w-full bg-center bg-contain"
					style={{
						backgroundImage: `url(${'bg-cubes.png'})`,
						backgroundRepeat: 'no-repeat',

					}}
				>
					<Image
						src={'/mascot.png'}
						alt='hero'
						width={1000}
						height={1000}
						className=' my-7 w-[310px] h-[278px] mx-auto'
					/>
				</div>
			</div>
		</>
	)
}
