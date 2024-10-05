import Image from 'next/image'
import React from 'react'

export const JudgeSection = () => {
	return (
		<>
			<div
				style={{
					background: "linear-gradient(0deg, #000000 0%, #111827 42%, #000000 100%)"
				}}
			>
				<h1 className="md:text-6xl max-md:text-4xl font-bold md:mb-[60px] md:mt-[160px] max-md:px-[16px] text-center font-sans">Hack-A-Venture <span className="text-purple-500">Judges</span></h1>
				<div className='md:px-[250px] max-md:px-[16px]'>
					<div className="md:flex md:flex-wrap md:gap-5 text-white max-md:grid max-md:grid-cols-2 mx-auto justify-center items-start max-md:gap-[12px] ">
						<div className="md:w-[250px] max-md:py-[16px] text-center">
							<Image src="/Huy_Pham.png" alt="Dr. Huy Pham" className="w-full h-auto rounded-xl mb-4 object-cover" width={200} height={200} />
							<h3 className="md:text-2xl max-md:text-xl font-semibold mb-2">Dr. Huy Pham</h3>
							<p className="md:text-base max-md:text-md text-[#9CA3AF]">Lecturer, Finance, RMIT Vietnam</p>
						</div>
						<div className="md:w-[250px] max-md:py-[16px] text-center">
							<Image src="/Minh_Nguyen.png" alt="Dr. Minh Nguyen" className="w-full h-auto rounded-xl mb-4 object-cover" width={200} height={200} />
							<h3 className="md:text-2xl max-md:text-xl font-semibold mb-2">Dr. Minh Nguyen</h3>
							<p className="md:text-base max-md:text-md text-[#9CA3AF]">Lecturer, Blockchain, RMIT Vietnam</p>
						</div>
						<div className="md:w-[250px] max-md:py-[16px] text-center">
							<Image src="/Ginel.png" alt="Dr. Ginel Dorleon" className="w-full h-auto rounded-xl mb-4 object-cover" width={200} height={200} />
							<h3 className="md:text-2xl max-md:text-xl font-semibold mb-2">Dr. Ginel Dorleon</h3>
							<p className="md:text-base max-md:text-md text-[#9CA3AF]">Lecturer, A.I., RMIT Vietnam</p>
						</div>
						<div className="md:w-[250px] max-md:py-[16px] text-center">
							<Image src="/Vinh_Dang.png" alt="Dr. Vinh Dang" className="w-full h-auto rounded-xl mb-4 object-cover" width={200} height={200} />
							<h3 className="md:text-2xl max-md:text-xl font-semibold mb-2">Dr. Vinh Dang</h3>
							<p className="md:text-base max-md:text-md text-[#9CA3AF]">Lecturer, Master of A.I., RMIT Vietnam</p>
						</div>
					</div>
					<div className='md:flex md:flex-wrap md:gap-5 text-white max-md:grid max-md:grid-cols-2 mx-auto justify-center items-start max-md:gap-[12px] md:mt-[40px]'>
						<div className="md:w-[250px] max-md:py-[16px] text-center">
							<Image src="/Ling_Huo.png" alt="Dr. Ling Huo Chong" className="w-full h-auto rounded-xl mb-4 object-cover" width={200} height={200} />
							<h3 className="md:text-2xl max-md:text-xl font-semibold mb-2">Dr. Ling Huo Chong</h3>
							<p className="md:text-base max-md:text-md text-[#9CA3AF]">Senior Lecturer, Software Engineering, RMIT Vietnam</p>
						</div>
						<div className="md:w-[250px] max-md:py-[16px] text-center">
							<Image src="/Tuan_Chu.png" alt="Dr. Tuan Chu" className="w-full h-auto rounded-xl mb-4 object-cover" width={200} height={200} />
							<h3 className="md:text-2xl max-md:text-xl font-semibold mb-2">Dr. Tuan Chu</h3>
							<p className="md:text-base max-md:text-md text-[#9CA3AF]">Deputy Head, Bachelor of Business, RMIT Vietnam</p>
						</div>
						<div className="md:w-[250px] max-md:py-[16px] text-center">
							<Image src="/Minh_Dinh.png" alt="Dr. Minh Dinh" className="w-full h-auto rounded-xl mb-4 object-cover" width={200} height={200} />
							<h3 className="md:text-2xl max-md:text-xl font-semibold mb-2">Dr. Minh Dinh</h3>
							<p className="md:text-base max-md:text-md text-[#9CA3AF]">Senior Lecturer, A.I., RMIT Vietnam</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
