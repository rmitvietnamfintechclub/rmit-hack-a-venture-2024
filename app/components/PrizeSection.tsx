'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

export const PrizeSection = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2
	});

	const controls = useAnimation();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);

	const variants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 }
	}

	const imgVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { duration: 0.5, ease: "easeInOut" }
		}
	}

	return (
		<div className="text-white flex flex-col items-center justify-center md:mt-[120px] max-md:px-[16px] max-md:my-[68px] text-center">
			<motion.div
				animate={controls}
				initial="hidden"
				variants={variants}
				transition={{ duration: 1.3, delay: 0.2 }}
			>
				<span ref={ref} className="text-[45px] lg:text-[57px] text-center text-white font-semibold md:px-[40px] max-md:mt-[48px] drop-shadow-text">Hack-A-Venture <span className='text-[#C93FDD]'>Prizes</span></span>
			</motion.div>
			<div className='md:flex md:flex-wrap md:gap-48 text-[#FBF6FD] max-md:grid max-md:grid-cols-2 md:mx-auto max-md:px-[60px] justify-center items-center max-md:gap-x-[40px] md:mt-[80px] max-md:w-full max-md:mt-[24px]'>
				<div className="max-md:py-[16px] text-center md:col-span-1 max-md:hidden">
					<motion.div
						animate={controls}
						initial="hidden"
						variants={variants}
						transition={{ duration: 1.3, delay: 0.8 }}
					>
						<Image src="/Second_Prize.png" alt="2nd Prize" className="md:w-[200px] max-md:w-[120px] h-auto rounded-xl mb-4 object-cover" width={200} height={200} />
						<div className='drop-shadow-container'>
							<h3 className="md:text-3xl max-md:text-2xl font-semibold mb-2 drop-shadow-text">1st Runner Up</h3>
						</div>
					</motion.div>
				</div>
				<div className=" max-md:py-[16px] text-center max-md:col-span-2 max-md:mx-auto">
					<motion.div
						animate={controls}
						initial="hidden"
						variants={variants}
						transition={{ duration: 1.3, delay: 0.2 }}
					>
						<Image src="/First_Prize.png" alt="1st Prize" className="md:w-[270px] max-md:w-[150px] h-auto rounded-xl mb-4 object-cover" width={200} height={200} />
						<div className='drop-shadow-container'>
							<h3 className="md:text-3xl max-md:text-3xl font-semibold mb-2 drop-shadow-text">Champion Prize</h3>
						</div>
					</motion.div>
				</div>
				<div className=" max-md:py-[16px] text-center md:col-span-1 md:hidden max-md:mx-auto">
					<motion.div
						animate={controls}
						initial="hidden"
						variants={variants}
						transition={{ duration: 1.3, delay: 0.8 }}
					>
						<Image src="/Second_Prize.png" alt="2nd Prize" className="md:w-[200px] max-md:w-[120px] h-auto rounded-xl mb-4 object-cover" width={200} height={200} />
						<div className='drop-shadow-container'>
							<h3 className="md:text-3xl max-md:text-2xl font-semibold mb-2 drop-shadow-text">1st Runner Up</h3>
						</div>
					</motion.div>
				</div>
				<div className="max-md:py-[16px] text-center max-md:mx-auto">
					<motion.div
						animate={controls}
						initial="hidden"
						variants={variants}
						transition={{ duration: 1.3, delay: 1.4 }}
					>
						<Image src="/Third_Prize.png" alt="3rd Prize" className="md:w-[200px] max-md:w-[120px] h-auto rounded-xl mb-4 object-cover" width={200} height={200} />
						<div className='drop-shadow-container'>
							<h3 className="md:text-3xl max-md:text-2xl font-semibold mb-2 drop-shadow-text">2nd Runner Up</h3>
						</div>
					</motion.div>
				</div>
			</div>
			<motion.div
				animate={controls}
				initial="hidden"
				variants={variants}
				transition={{ duration: 1.3, delay: 0.8 }}
			>
				<Image src="/Rectangle.png" alt="light" className="light-effect" width={726.1} height={68.34} />
			</motion.div>

			<h1 className="mt-[100px] text-[45px] lg:text-[57px] text-center text-white font-semibold md:px-[40px] max-md:mt-[48px] drop-shadow-text">Special Category Awards</h1>
			<div className='md:flex md:flex-nowrap text-[#FBF6FD] max-md:grid max-md:grid-cols-1 md:mx-auto justify-center items-center max-md:gap-[12px] md:mt-[80px] max-md:w-full max-md:mt-[24px]'>
				<motion.div
					animate={controls}
					initial="hidden"
					variants={variants}
					transition={{ duration: 1.3, delay: 1.4 }}
				>
					<div className="max-md:py-[16px] text-center md:col-span-1 max-md:col-span-2">
						<Image src="/award1.png" alt="2nd Prize" className="md:w-[200px] h-[309px] max-md:scale-75 rounded-xl mb-4 object-cover mx-auto items-start" width={200} height={200} />
						<div className='drop-shadow-container'>
							<h3 className="md:text-2xl max-md:text-1xl font-semibold mb-2 drop-shadow-text">Most Technically Advanced Project</h3>
						</div>
					</div>

					<div className="max-md:py-[16px] text-center md:col-span-1">
						<Image src="/award2.png" alt="2nd Prize" className="md:w-[200px] h-[309px] max-md:scale-75 rounded-xl mb-4 object-cover mx-auto items-start" width={200} height={200} />
						<div className='drop-shadow-container'>
							<h3 className="md:text-2xl max-md:text-1xl font-semibold mb-2 drop-shadow-text">Most Market Potential Project</h3>
						</div>
					</div>

					<div className="max-md:py-[16px] text-center md:col-span-1">
						<Image src="/award3.png" alt="2nd Prize" className="md:w-[200px] h-[309px] max-md:scale-75 rounded-xl mb-4 object-cover mx-auto items-start " width={200} height={200} />
						<div className='drop-shadow-container'>
							<h3 className="md:text-2xl max-md:text-1xl font-semibold mb-2 drop-shadow-text">People Choice Award</h3>
						</div>
					</div>
				</motion.div>

			</div>
		</div>
	)
}
