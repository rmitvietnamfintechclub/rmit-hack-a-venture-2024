'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const WhoSection = () => {
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

	const swipeVariants = {
		hidden: { opacity: 0, y: 100 },
		visible: { opacity: 1, y: 0 }
	}

	const slideVariants = {
		hidden: { opacity: 0, x: -300 },
		visible: { opacity: 1, x: 0 }
	}



	const whoSection = ['University Students in Vietnam', 'Business-Related Majors', 'Technology-related majors', 'Finance-related majors', 'Marketing-related majors']

	return (
		<div
			className='md:px-[10vw] md:mt-[100px] max-md:mt-[20px]'
			ref={ref}
		>
			<div className='max-md:text-4xl md:text-6xl text-center text-white font-semibold md:px-[40px] max-md:mt-[40px] drop-shadow-text'>
				<motion.div
					initial='hidden'
					animate={controls}
					variants={slideVariants}
					transition={{ duration: 1.3, delay: 0.5 }}
					className='text-gradient inline-block'>
					Who can join&nbsp;
				</motion.div>
				<motion.div
					initial='hidden'
					animate={controls}
					variants={swipeVariants}
					transition={{ duration: 1.3, delay: 0.5 }}
					className='inline-block'
				>
					Hack-A-Venture?
				</motion.div>
			</div>

			<div className="grid md:grid-cols-5 max-md:grid-cols-2 max-md:grid-flow-row md:gap-10 max-md:gap-4 md:mt-[48px] max-md:mt-[24px] max-md:px-[16px] max-md:mx-auto justify-items-center">
				{
					Array.from({ length: 5 }).map((_, index) => (
						<div key={index} className={`${index === 4 ? 'max-md:col-span-2 max-md:px-[93px]' : ''}`}>
							<motion.div
								initial='hidden'
								animate={controls}
								variants={swipeVariants}
								transition={{ duration: 1.3, delay: 0.5 + index * 0.2 }}
							>
								<Image
									src={`/who_section_${index + 1}.webp`}
									alt='who'
									width={4000}
									height={4000}
									className="rounded-lg"
								/>
								<div className='text-center text-white font-sans font-semibold md:text-xl max-md:text-lg md:mt-[24px] max-md:mt-[16px]'>
									<p dangerouslySetInnerHTML={{ __html: whoSection[index] }}></p>
								</div>
							</motion.div>
						</div>
					))
				}
			</div>
		</div>
	)
}
