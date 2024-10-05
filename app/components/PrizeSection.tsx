import Image from 'next/image'
import React from 'react'

export const PrizeSection = () => {
	return (
		<div className="text-white flex flex-col items-center justify-center md:mt-[120px] max-md:px-[16px] max-md:my-[68px]">
			<h1 className="max-md:text-5xl text-6xl font-bold md:mt-[51px] text-center">Hack-A-Venture <span className='text-[#C93FDD]'>Prizes</span></h1>
			<div className='md:flex md:flex-wrap md:gap-48 text-[#FBF6FD] max-md:grid max-md:grid-cols-2 md:mx-auto max-md:px-[60px] justify-center items-center max-md:gap-x-[40px] md:mt-[80px] max-md:w-full max-md:mt-[24px]'>
				<div className="max-md:py-[16px] text-center md:col-span-1 max-md:hidden">
					<Image src="/Second_Prize.png" alt="2nd Prize" className="md:w-[200px] max-md:w-[120px] h-auto rounded-xl mb-4 object-cover" width={200} height={200} />
					<div className='drop-shadow-container'>
						<h3 className="md:text-3xl max-md:text-2xl font-semibold mb-2 drop-shadow-text">2nd Prize</h3>
					</div>
				</div>
				<div className=" max-md:py-[16px] text-center max-md:col-span-2 max-md:mx-auto">
					<Image src="/First_Prize.png" alt="1st Prize" className="md:w-[270px] max-md:w-[150px] h-auto rounded-xl mb-4 object-cover" width={200} height={200} />
					<div className='drop-shadow-container'>
						<h3 className="md:text-3xl max-md:text-3xl font-semibold mb-2 drop-shadow-text">First Prize</h3>
					</div>
				</div>
				<div className=" max-md:py-[16px] text-center md:col-span-1 md:hidden max-md:mx-auto">
					<Image src="/Second_Prize.png" alt="2nd Prize" className="md:w-[200px] max-md:w-[120px] h-auto rounded-xl mb-4 object-cover" width={200} height={200} />
					<div className='drop-shadow-container'>
						<h3 className="md:text-3xl max-md:text-2xl font-semibold mb-2 drop-shadow-text">2nd Prize</h3>
					</div>
				</div>
				<div className="max-md:py-[16px] text-center max-md:mx-auto">
					<Image src="/Third_Prize.png" alt="3rd Prize" className="md:w-[200px] max-md:w-[120px] h-auto rounded-xl mb-4 object-cover" width={200} height={200} />
					<div className='drop-shadow-container'>
						<h3 className="md:text-3xl max-md:text-2xl font-semibold mb-2 drop-shadow-text">3rd Prize</h3>
					</div>
				</div>
			</div>

			<Image src="/Rectangle.png" alt="light" className="light-effect" width={726.1} height={68.34} />

			<h1 className="max-md:text-3xl text-6xl font-bold md:mt-[120px] max-md:mt-[48px] text-center">Special Category Awards</h1>
			<div className='md:flex md:flex-wrap md:gap-48 text-[#FBF6FD] max-md:grid max-md:grid-cols-2 md:mx-auto justify-center items-center max-md:gap-[12px] md:mt-[80px] max-md:w-full max-md:mt-[24px]'>
				<div className="max-md:py-[16px] text-center md:col-span-1 max-md:col-span-2">
					<Image src="/award1.png" alt="2nd Prize" className="md:w-[200px] h-[309px] max-md:scale-75 rounded-xl mb-4 object-cover mx-auto items-start" width={200} height={200} />
					<div className='drop-shadow-container'>
						<h3	className="md:text-3xl max-md:text-2xl font-semibold mb-2 drop-shadow-text">Best Use of Technology</h3>
					</div>
				</div>
				<div className="max-md:py-[16px] text-center md:col-span-1">
					<Image src="/award2.png" alt="2nd Prize" className="md:w-[200px] h-[309px]  max-md:scale-75 rounded-xl mb-4 object-cover mx-auto items-start" width={200} height={200} />
					<div className='drop-shadow-container'>
						<h3 className="md:text-3xl max-md:text-2xl font-semibold mb-2 drop-shadow-text">Best Business Viability</h3>
					</div>
				</div>
				<div className="max-md:py-[16px] text-center md:col-span-1">
					<Image src="/award3.png" alt="2nd Prize" className="md:w-[200px] h-[309px] max-md:scale-75 rounded-xl mb-4 object-cover mx-auto items-start" width={200} height={200} />
					<div className='drop-shadow-container'>
						<h3 className="md:text-3xl max-md:text-2xl font-semibold mb-2 drop-shadow-text">Most Voting Innovation</h3>
					</div>
				</div>
			</div>
		</div>
	)
}
