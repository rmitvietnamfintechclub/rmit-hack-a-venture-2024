"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const AboutClub = () => {

	const settings = {
		dots: true,
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
	return (
		<div className='text-white px-[16px]' >
			{/* Text Section */}
			< div className='w-fit mx-auto mb-8' >
				<h1 className='text-[#C93FDD] text-lg font-semibold font-sans'>Competition Organizer</h1>
				<div className='flex flex-col lg:flex-row w-full justify-center items-center'>
					<h2 className='text-6xl font-bold mr-[60px]'>FinTech Club<br />Who are we?</h2>
					<p className='text-lg lg:max-w-3xl lg:mx-auto text-[#6B7280] w-full'>
						The RMIT FinTech Club is Vietnam's first <span className='font-bold text-white'>Student-Led Financial Technology Club.</span> Our mission is to provide a platform where students from diverse backgrounds can collaborate, innovate, and build solutions that <span className='font-bold text-white'>Connect Business And Technology.</span>
					</p>
				</div>
			</div >

			{/* Image Section */}
			<div className="slider-container">
				<Slider {...settings} className="center">
					<div className="p-3 md:p-10">
						<a className="no-underline block" href="#">
							<img
								className="rounded-lg"
								src="/about_ftc_1.png"
								alt="About FinTech Club 1"
							/>
						</a>
					</div>
					<div className="p-3 md:py-6 md:p-0">
						<a className="no-underline block" href="#">
							<img
								className="rounded-lg"
								src="/about_ftc_2.png"
								alt="About FinTech Club 1"
							/>
						</a>
					</div>
					<div className="p-3 md:p-10">
						<a className="no-underline block" href="#">
							<img
								className="rounded-lg"
								src="/about_ftc_3.png"
								alt="About FinTech Club 1"
							/>
						</a>
					</div>
				</Slider>
			</div>
		</div >
	)
}
