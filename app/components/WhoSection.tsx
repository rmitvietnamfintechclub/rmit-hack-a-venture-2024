import Image from 'next/image'
import React from 'react'

export const WhoSection = () => {
	const whoSection = ['University Students <br/> Passionate About <br/> Tech  & Business', 'Business-Related Majors', 'Technology-related majors', 'Finance-related majors', 'Marketing-related majors']

	return (
		<div
			className='md:px-[250px]'
		>
			<div className='text-center max-md:px-[33px] font-sans font-semibold md:text-[57px] max-md:text-[40px] max-md:leading-[50px]'>
				<span className='text-[#C93FDD]'>Who can join </span>
				Hack-A-Venture?
			</div>

			<div className="grid md:grid-cols-5 max-md:grid-cols-2 max-md:grid-flow-row md:gap-10 max-md:gap-4 md:mt-[48px] max-md:mt-[24px] max-md:px-[16px] max-md:mx-auto justify-items-center">
				{
					Array.from({ length: 5 }).map((_, index) => (
						<div key={index} className={`${index === 4 ? 'max-md:col-span-2 max-md:px-[93px]' : ''}`}>
							<Image
								src={`/who_section_${index + 1}.png`}
								alt='who'
								width={4000}
								height={4000}
							/>
							<div className='text-center font-sans font-semibold md:text-2xl max-md:text-lg md:mt-[24px] max-md:mt-[16px]'>
								<p dangerouslySetInnerHTML={{ __html: whoSection[index] }}></p>
							</div>
						</div>
					))
				}
			</div>
		</div>
	)
}
