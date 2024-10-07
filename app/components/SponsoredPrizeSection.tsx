'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

export const SponsoredPrizeSection = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.4
	});

	const controls = useAnimation();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);

	const variants = {
		hidden: { opacity: 0, y: 40 },
		visible: { opacity: 1, y: 0 }
	}

	const slideVariants = {
		hidden: { opacity: 0, x: -100 },
		visible: { opacity: 1, y: 0 }
	}

	return (
		<div ref={ref} className="text-white flex flex-col items-center justify-center max-md:px-[16px] max-md:mt-[20px] text-center">
			<motion.div
				animate={controls}
				initial="hidden"
				variants={variants}
				transition={{ duration: 1.3, delay: 0.2 }}
			>
				<span className="max-md:text-4xl md:text-6xl text-center text-white font-semibold md:px-[40px] max-md:mt-[20px] drop-shadow-text"><span className='text-[#C93FDD]'></span></span>
			</motion.div>

			<motion.div
				animate={controls}
				initial="hidden"
				variants={slideVariants}
				transition={{ duration: 1.3, delay: 0.2 }}
			>
			</motion.div>
			<div className='md:flex md:flex-wrap md:gap-48 text-[#FBF6FD] max-md:grid max-md:grid-cols-1 md:mx-auto justify-center items-center max-md:gap-[12px] max-md:w-full max-md:mt-[24px]'>
				<h1 className="mt-[100px] max-md:text-4xl md:text-6xl text-center text-white font-semibold md:px-[40px] max-md:mt-[10px] drop-shadow-text mx-auto w-full">Sponsored Category Awards</h1>
				<motion.div
					animate={controls}
					initial="hidden"
					variants={variants}
					transition={{ duration: 1.3, delay: 1.4 }}
				>
					<div className="max-md:py-[16px] text-center md:col-span-1">
						<Image src="/partners/polkadot.png" alt="2nd Prize" className="md:w-[200px] md:h-[309px] max-md:h-[200px] max-md:scale-75 rounded-xl mb-4 object-contain mx-auto items-start" width={200} height={200} />
						<div className='drop-shadow-container'>
							<h3 className="md:text-3xl max-md:text-2xl font-semibold mb-2 drop-shadow-text">Most Creative Business Model <br /> Built on Polkadot Blockchain</h3>
						</div>
					</div>
				</motion.div>
				<motion.div
					animate={controls}
					initial="hidden"
					variants={variants}
					transition={{ duration: 1.3, delay: 1.4 }}
				>
					<div className="max-md:py-[16px] text-center md:col-span-1">
						<Image src="/partners/monad.png" alt="2nd Prize" className="md:w-[200px] md:h-[309px] max-md:h-[200px] max-md:scale-75 rounded-xl mb-4 object-contain mx-auto" width={200} height={200} />
						<div className='drop-shadow-container'>
							<h3 className="md:text-3xl max-md:text-2xl font-semibold mb-2 drop-shadow-text">Best Monad-based Blockchain Solution</h3>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	)
}
