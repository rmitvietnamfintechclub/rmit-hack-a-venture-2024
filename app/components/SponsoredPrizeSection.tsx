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
		<motion.div
			animate={controls}
			initial="hidden"
			variants={variants}
			transition={{ duration: 1.3, delay: 0.5 }}
			className='w-full md:px-[10vw]'
			ref={ref}
		>
			<h1 className="mt-[100px] max-md:text-4xl md:text-6xl text-center text-white font-semibold md:px-[40px] max-md:my-[60px] max-md:mb-[20px] drop-shadow-text">Special Category Awards</h1>
			<p className='md:mt-[24px] md:mb-[40px] text-xl text-center font-sans text-white max-md:mt-[16px]'>
				Prize components will include <span className='font-bold text-[#C93FDD]'>Cash Vouchers</span>
			</p>
			<div className='md:grid md:grid-cols-2 text-[#FBF6FD] max-md:grid max-md:grid-cols-1 md:mx-auto justify-center items-start max-md:gap-[12px] md:mt-[10px] max-md:w-full max-md:mt-[24px] content-start'>
				<div className="text-center md:col-span-1">
					<Image src="/partners/polkadot.png" alt="Polkadot" className="md:w-[200px] max-md:h-[150px] max-md:scale-75 rounded-xl mb-4 object-contain mx-auto justify-start items-start" width={200} height={200} />
					<div className='drop-shadow-container'>
						<h3 className="md:text-3xl max-md:text-2xl font-semibold mb-2 drop-shadow-text">Most Creative Business Model <br /> Built on Polkadot Blockchain</h3>
					</div>
				</div>

				<div className="text-center md:col-span-1">
					<Image src="/partners/monad.png" alt="Monad" className="md:w-[200px] max-md:h-[150px] max-md:scale-75 rounded-xl mb-4 object-contain mx-auto items-start mt-[10px]" width={200} height={200} />
					<div className='drop-shadow-container'>
						<h3 className="md:text-3xl max-md:text-2xl font-semibold mb-2 drop-shadow-text">Best Monad-based <br /> Blockchain Solution</h3>
					</div>
				</div>

			</div>
		</motion.div>


	)
}
