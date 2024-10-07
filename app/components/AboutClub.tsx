"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import '../css/AboutClub.css';
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer';

export const AboutClub = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.5  // Adjust threshold as needed
	});

	const settings = {
		dots: false,
		arrows: false,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1.1,
					slidesToScroll: 1,
					infinite: true,
					swipeToSlide: true,
				}
			}
		]
	};

	const activitiesSettings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					swipeToSlide: true,
				}
			}
		]
	};

	return (
		<div
			style={{
				background: "linear-gradient(0deg, #000000 0%, #111827 42%, #000000 100%)"
			}}
		>
			<div className='px-[16px]' >
				{/* Text Section */}
				< div className='w-fit mx-auto mb-8' >
					<h1 className='text-[#C93FDD] text-lg font-semibold font-sans'>Competition Organizer</h1>
					<div className='flex flex-col lg:flex-row w-full justify-center items-center'>
						<h2 className='md:text-6xl text-4xl text-white max-md:text-left font-bold md:mr-[60px] max-md:mt-[10px] max-md:place-self-start'>FinTech Club<br />Who are we?</h2>
						<p className='text-lg lg:max-w-3xl lg:mx-auto text-[#6B7280] w-full max-md:mt-[16px]'>
							The RMIT FinTech Club is Vietnam's first <span className='font-bold text-white'>Student-Led Financial Technology Club.</span> Our mission is to provide a platform where students from diverse backgrounds can collaborate, innovate, and build solutions that <span className='font-bold text-white'>Connect Business And Technology.</span>
						</p>
					</div>
				</div >

				{/* Image Section */}
				<div className="slider-container w-full justify-center items-center ">
					<Slider {...settings} className="center ">
						<div className="p-3 md:p-10 h-auto">
							<Image
								className="rounded-lg"
								src="/about_ftc_1.png"
								alt="About FinTech Club 1"
								width={4000}
								height={4000}
							/>
						</div>
						<div className="p-3 md:p-3">
							<Image
								className="rounded-lg"
								src="/about_ftc_2.png"
								alt="About FinTech Club 2"
								width={4000}
								height={4000}
							/>
						</div>
						<div className="p-3 md:p-10">
							<Image
								className="rounded-lg"
								src="/about_ftc_3.png"
								alt="About FinTech Club 1"
								width={4000}
								height={4000}
							/>
						</div>
					</Slider>
				</div>

			</div >
			<div className="grid grid-cols-3 md:px-[10vw] md:mt-[60px] max-md:mt-[30px] justify-items-center items-center font-sans max-md:px-[16px]">
				<div className="flex flex-col items-center max-md:px-[16px] max-md:justify-around max-md:h-full">
					<span ref={ref} className="text-[#C93FDD] md:text-4xl text-2xl font-semibold font-sans">
						<CountUp start={0} end={inView ? 80 : 0} duration={5}>
							{({ countUpRef }) => (
								<span ref={countUpRef} />
							)}
						</CountUp>+
					</span>
					<span className="text-lg font-sans text-center text-[#9CA3AF]">Club Members</span>
				</div>
				<div className="flex flex-col items-center border-r-[1.5px] border-l-[1.5px] border-[#582768] md:px-[134px] md:py-[42px] max-md:px-[16px] max-md:justify-around max-md:h-full drop-shadow-container">
					<span className="text-gradient text-white md:text-6xl text-3xl font-semibold font-sans drop-shadow-text">
						<CountUp start={0} end={inView ? 20 : 0} duration={5}>
							{({ countUpRef }) => (
								<span ref={countUpRef} />
							)}
						</CountUp>+
					</span>
					<span className="text-lg font-sans text-center text-[#FBF6FD] md:mt-[32px] justify-center">Industry Partners</span>
				</div>
				<div className="flex flex-col items-center max-md:justify-around max-md:h-full max-md:px-[16px]">
					<span className="text-[#C93FDD] md:text-4xl text-2xl font-semibold font-sans">
						<CountUp start={0} end={inView ? 50 : 0} duration={5}>
							{({ countUpRef }) => (
								<span ref={countUpRef} />
							)}
						</CountUp>+
					</span>
					<span className="text-lg font-sans text-center text-[#9CA3AF]">Club Projects</span>
				</div>
			</div>
			<div className="grid grid-cols-3 md:px-[10vw] md:mt-[100px] max-md:mt-[30px] justify-items-center items-center font-sans max-md:px-[16px]">
				<div className="flex flex-col items-center max-md:px-[16px] max-md:justify-around max-md:h-full">
					<span className="text-[#C93FDD] md:text-4xl text-2xl font-semibold font-sans">
						<CountUp start={0} end={inView ? 4 : 0} duration={5}>
							{({ countUpRef }) => (
								<span ref={countUpRef} />
							)}
						</CountUp>X
					</span>
					<span className="text-lg font-sans text-center text-[#9CA3AF]">Best Club Of Semester</span>
				</div>
				<div className="flex flex-col items-center border-r-[1.5px] border-l-[1.5px] border-[#582768] md:px-[100px] md:py-[42px] max-md:px-[16px] justify-around h-full drop-shadow-container">
					<span className="text-gradient text-white md:text-6xl text-3xl font-semibold font-sans drop-shadow-text">
						<CountUp start={0} end={inView ? 300 : 0} duration={5}>
							{({ countUpRef }) => (
								<span ref={countUpRef} />
							)}
						</CountUp>M+
					</span>
					<span className="text-lg font-sans text-center text-[#FBF6FD] md:mt-[32px] justify-center">Fund Raised For Projects</span>
				</div>
				<div className="flex flex-col items-center max-md:px-[16px] max-md:justify-around max-md:h-full">
					<span className="text-[#C93FDD] md:text-4xl text-2xl font-semibold font-sans">
						<CountUp start={0} end={inView ? 5000 : 0} duration={5}>
							{({ countUpRef }) => (
								<span ref={countUpRef} />
							)}
						</CountUp>+
					</span>
					<span className="text-lg font-sans text-center text-[#9CA3AF]">Social Media Followings</span>
				</div>
			</div>

			<div className="md:px-[10vw] max-md:px-[16px] md:mt-[80px]">
				<h1 className="max-md:hidden md:text-6xl text-3xl font-bold font-sans text-center md:mb-[48px] bg-gradient-to-r from-white via-white to-transparent text-clip"
					style={{ backgroundSize: '100%' }}
				>
					Our previous activities
				</h1>

				<h1 className="md:hidden md:text-6xl text-3xl font-bold font-sans text-center md:mb-[48px] max-md:mt-[40px] max-md:mb-[24px]"
					style={{
						// background: `linear-gradient(to right, transparent, #ffffff 0%, #9CA3AF 50%, transparent)`,
						backgroundRepeat: 'no-repeat',
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
					}}
				>
					Our previous activities
				</h1>
				<div className="grid grid-cols-2 grid-flow-row gap-4 max-md:hidden">
					<div>
						<Image
							src="/activities_1.png"
							alt="About FinTech Club 1"
							width={4000}
							height={4000}
						/>
					</div>
					<div>
						<Image
							src="/activities_2.png"
							alt="About FinTech Club 1"
							width={4000}
							height={4000}
						/>
					</div>
					<div>
						<Image
							src="/activities_3.png"
							alt="About FinTech Club 1"
							width={4000}
							height={4000}
						/>
					</div>
					<div>
						<Image
							src="/activities_4.png"
							alt="About FinTech Club 1"
							width={4000}
							height={4000}
						/>
					</div>
				</div>
				{/* Image Section */}
				<div className="slider-container w-full justify-center items-center md:hidden">
					<Slider {...activitiesSettings} className="center">
						<div className="p-3 md:p-3">
							<Image
								src="/activities_1.png"
								alt="About FinTech Club 1"
								width={4000}
								height={4000}
							/>
						</div>
						<div className="p-3 md:p-3">
							<Image
								src="/activities_2.png"
								alt="About FinTech Club 1"
								width={4000}
								height={4000}
							/>
						</div>
						<div className="p-3 md:p-3">
							<Image
								src="/activities_3.png"
								alt="About FinTech Club 1"
								width={4000}
								height={4000}
							/>
						</div>
						<div className="p-3 md:p-3">
							<Image
								src="/activities_4.png"
								alt="About FinTech Club 1"
								width={4000}
								height={4000}
							/>
						</div>
					</Slider>
				</div>
				<p className="text-lg items-center justify-center text-center text-[#9CA3AF] md:px-[160px] md:mt-[48px] max-md:mt-[32px]">
					Through various initiatives such as workshops, events, training programs, and competitions like Hack-A-Venture, the club empowers students to explore the future of financial technology and make a meaningful impact in the community.
				</p>
			</div>
		</div >
	)
}
