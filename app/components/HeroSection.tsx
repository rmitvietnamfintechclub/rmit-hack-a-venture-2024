'use client'
import Image from 'next/image'
import React from 'react'
import '../css/HeroSection.css'
import { motion } from 'framer-motion'
import Button from './Button'

const DURATION = 0.15;
const STAGGER = 0.015;

export const HeroSection = () => {
	return (
		<>
			<div className="max-md:hidden grid grid-cols-2 items-center md:px-[10vw]">
				<div className='justify-center mx-auto md:w-full'>
					<div className="mx-auto">
						<div className='mb-[16px] drop-shadow-container'>
							<motion.h1
								initial="initial"
								whileHover="hovered"
								className='overflow-hidden relative w-fit text-white text-6xl font-bold drop-shadow-text'
								style={{
									lineHeight: "0.9",
								}}
								transition={{
									staggerChildren: 0.01,
								}}
							>
								<FlipText>RMIT 2024</FlipText>
							</motion.h1>

							<motion.h1
								initial="initial"
								whileHover="hovered"
								className='overflow-hidden relative w-fit'
								style={{
									lineHeight: "0.9",
								}}
								transition={{
									staggerChildren: 0.01,
								}}
							>

								<div className='text-white text-6xl font-bold drop-shadow-text'>
									<FlipText>Hack-A-Venture</FlipText>
								</div>
							</motion.h1>
						</div>

						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5, duration: 0.5 }}
						>
							<div className='w-[551px] text-white font-normal font-sans'>
								Organized by RMIT Vietnam FinTech Club, Hack-A-Venture is a hackathon-style innovation competition for <span className='font-bold text-[#C93FDD]'>Business</span> and <span className='font-bold text-[#C93FDD]'>Technology</span> students nationwide, encouraging them to leverage technologies to solve Vietnam's pressing social challenge!
							</div>
						</motion.h1>

						<div className='mt-[60px] flex w-[320px] justify-between'>
							<button className='text-[#C93FDD] font-semibold text-md hover:underline hover:text-white'>
								<a href="https://docs.google.com/document/d/1FGA7Ds3eAuEGMV6rF1yvot5bwMmflQaoPDTHylie4JA/edit" target="_blank" className="no-underline">See Public Handbook</a>
							</button>

							<button
								className='w-[130px] h-[48px] bg-[#C93FDD] rounded-[12px] justify-items-center flex justify-center items-center hover:text-xl text-bold text-white ease-in transition-all duration-200 font-semibold font-poppins'
							>
								{/* <Button /> */}
								<a href="https://docs.google.com/forms/d/1azQmLTEt04oDg3TwJyTmQ-wbzgxiPLibbaQdSiTHtVU/viewform?edit_requested=true" target="_blank">Join Now</a>
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
						backgroundSize: 'contain',
						backgroundPosition: 'right -40px top 20px'
					}}
				>
					<Image
						src={'/mascot.png'}
						alt='hero'
						width={1000}
						height={1000}
						className=' my-7 w-auto h-[278px] mx-auto'
					/>
				</div>
			</div>

			<div className='md:hidden'>
				<div className='mb-[16px] text-white justify-center mx-auto text-center drop-shadow-container'>
					<h1 className='text-5xl drop-shadow-lg shadow-lg font-sans font-bold mt-[40px] drop-shadow-text'>
						RMIT 2024
					</h1>
					<h1 className='text-gradient text-5xl font-sans font-bold drop-shadow-text'>
						Hack-A-Venture
					</h1>
				</div>

				<div className='text-[#9CA3AF] my-[16px] font-sans font-normal text-center mx-[16px] mt-[24px]'>
					Organized by RMIT Vietnam FinTech Club, Hack-A-Venture is a hackathon-style innovation competition for <span className='font-bold text-[#C93FDD]'>Business</span> and <span className='font-bold text-[#C93FDD]'>Technology</span> students nationwide, encouraging them to leverage technologies to solve Vietnam's pressing social challenge!
				</div>

				<div className='flex flex-col w-full gap-5 justify-center items-center px-[16px]'>
					<button className='text-[#C93FDD] font-semibold text-md hover:underline hover:text-white'>
						See Public Handbook
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

const FlipText = ({ children }: { children: string }) => {
	const characters = children.split("").map(char => char === ' ' ? '\u00A0' : char);
	return (
		<>
			<div>
				{characters.map((char, index) => (
					<motion.span
						key={index}
						variants={{
							initial: {
								y: 0,
							},
							hovered: {
								y: "-100%",
							}
						}}
						transition={{
							duration: DURATION,
							ease: "easeInOut",
							delay: index * STAGGER,
						}}
						className='inline-block'
					>
						{char}
					</motion.span>
				))}
			</div>
			<div
				className='absolute inset-0'
			>
				{characters.map((char, index) => (
					<motion.span
						key={index}
						variants={{
							initial: {
								y: "100%",
							},
							hovered: {
								y: 0,
							}
						}}
						transition={{
							duration: DURATION,
							ease: "easeInOut",
							delay: index * STAGGER,
						}}
						className='inline-block'
					>
						{char}
					</motion.span>
				))}
			</div>
		</>
	)
}

